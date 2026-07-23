// MohanGPT — a portfolio reimagined as an AI chat product. There is no live
// model: a client-side intent matcher maps free-typed questions onto a finite
// set of hand-written answers, each with a rich inline component. The classic
// résumé view reuses the very same components, laid out statically.

import {
  useCallback, useEffect, useRef, useState, useSyncExternalStore,
} from 'react';
import Classic from './Classic';
import Composer from './Composer';
import { CONTACT, PROFILE } from './content';
import { IconCompass, IconFileText, IconMenu } from './icons';
import { INTENTS, SUGGESTIONS, TOUR } from './intents';
import { getAnswer } from './match';
import Sidebar from './Sidebar';
import * as S from './styles';
import Thread from './Thread';
import type { Message, Theme, TourMeta } from './types';

const THEME_KEY = 'mohangpt:theme';
const MOBILE_QUERY = '(max-width: 1023px)';

/** Timings from the design spec — thinking pause, stream rate, card reveal. */
const THINKING_MS = 620;
const STREAM_MS = 16;
const STREAM_CHARS = 3;
const REVEAL_MS = 520;

interface RespondOptions {
  userText?: string;
  tour?: TourMeta | null;
}

/*
 * The theme lives in localStorage, not in React state — it *is* an external
 * store, so reading it through useSyncExternalStore avoids the
 * render-then-correct-in-an-effect dance. `storage` only fires cross-tab, so
 * toggling also dispatches a same-document event to notify subscribers.
 */
const THEME_EVENT = 'mohangpt:theme';

const subscribeToTheme = (onChange: () => void) => {
  window.addEventListener(THEME_EVENT, onChange);
  window.addEventListener('storage', onChange);
  return () => {
    window.removeEventListener(THEME_EVENT, onChange);
    window.removeEventListener('storage', onChange);
  };
};

/** Backs the store when localStorage is unavailable, so the toggle still works. */
let memoryTheme: Theme = 'dark';

const getStoredTheme = (): Theme => {
  try {
    const stored = window.localStorage.getItem(THEME_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
  } catch {
    // Storage can be unavailable (private mode); fall through to memory.
  }
  return memoryTheme;
};

/** The server has no storage to read, so it always renders the default. */
const getServerTheme = (): Theme => 'dark';

const MohanGPT = () => {
  const theme = useSyncExternalStore(subscribeToTheme, getStoredTheme, getServerTheme);
  const [isClassic, setIsClassic] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [busy, setBusy] = useState(false);
  const [tour, setTour] = useState({ active: false, step: 0 });

  // Mirrors of state read inside timers/callbacks, where the state value would
  // otherwise be stale. `busy` also has to flip synchronously to block a second
  // send landing before React re-renders.
  const busyRef = useRef(false);
  const tourRef = useRef(tour);
  const seqRef = useRef(0);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const uid = () => {
    seqRef.current += 1;
    return `m${seqRef.current}`;
  };

  const markBusy = (value: boolean) => {
    busyRef.current = value;
    setBusy(value);
  };

  const setTourState = (next: { active: boolean; step: number }) => {
    tourRef.current = next;
    setTour(next);
  };

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY);
    const update = () => {
      setIsMobile(mq.matches);
      setDrawerOpen(false);
    };
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  // Clear every pending timer on unmount so a stream cannot outlive the view.
  useEffect(() => () => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, []);

  const patch = useCallback((id: string, changes: Partial<Message>) => {
    setMessages(prev => prev.map(m => (m.id === id ? { ...m, ...changes } : m)));
  }, []);

  /** Thinking pause → character stream → card reveal. */
  const animate = useCallback((id: string, full: string) => {
    const start = setTimeout(() => {
      patch(id, { thinking: false, streaming: true });
      let pos = 0;
      intervalRef.current = setInterval(() => {
        pos += STREAM_CHARS;
        if (pos >= full.length) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          intervalRef.current = null;
          patch(id, { display: full, streaming: false, revealed: true });
          markBusy(false);
          // The shimmer skeleton bridges this gap, so the card never flashes in
          // as an empty box.
          const reveal = setTimeout(() => patch(id, { compReady: true }), REVEAL_MS);
          timersRef.current.push(reveal);
        } else {
          patch(id, { display: full.slice(0, pos) });
        }
      }, STREAM_MS);
    }, THINKING_MS);
    timersRef.current.push(start);
  }, [patch]);

  const respond = useCallback((intentId: string, options: RespondOptions = {}) => {
    if (busyRef.current) return;
    const intent = INTENTS[intentId] ?? INTENTS.fallback;

    const additions: Message[] = [];
    if (options.userText) {
      additions.push({ id: uid(), role: 'user', display: options.userText });
    }
    const agentId = uid();
    additions.push({
      id: agentId,
      role: 'agent',
      display: '',
      text: intent.text,
      thinking: true,
      streaming: false,
      revealed: false,
      compReady: false,
      compType: intent.comp,
      followups: intent.fu,
      tour: options.tour ?? null,
    });

    setMessages(prev => [...prev, ...additions]);
    markBusy(true);
    animate(agentId, intent.text);
  }, [animate]);

  const ask = useCallback((question: string) => {
    if (busyRef.current) return;
    setDrawerOpen(false);
    // Any manual question leaves the tour.
    if (tourRef.current.active) setTourState({ active: false, step: 0 });
    respond(getAnswer(question).id, { userText: question });
  }, [respond]);

  const startTour = useCallback(() => {
    if (busyRef.current) return;
    setDrawerOpen(false);
    setTourState({ active: true, step: 0 });
    respond(TOUR[0], { tour: { step: 0, total: TOUR.length } });
  }, [respond]);

  const nextTour = useCallback(() => {
    if (busyRef.current) return;
    const next = tourRef.current.step + 1;
    if (next >= TOUR.length) {
      setTourState({ active: false, step: 0 });
      respond('tourEnd');
      return;
    }
    setTourState({ active: true, step: next });
    respond(TOUR[next], { tour: { step: next, total: TOUR.length } });
  }, [respond]);

  const exitTour = useCallback(() => {
    if (busyRef.current) return;
    setTourState({ active: false, step: 0 });
    respond('exitTour');
  }, [respond]);

  const toggleTheme = useCallback(() => {
    const next: Theme = getStoredTheme() === 'dark' ? 'light' : 'dark';
    memoryTheme = next;
    try {
      window.localStorage.setItem(THEME_KEY, next);
    } catch {
      // Storage can be unavailable; the in-memory value still drives this session.
    }
    window.dispatchEvent(new Event(THEME_EVENT));
  }, []);

  const goClassic = useCallback(() => {
    setIsClassic(true);
    setDrawerOpen(false);
  }, []);

  const goChat = useCallback(() => setIsClassic(false), []);

  const hasMessages = messages.length > 0;

  return (
    <S.Root data-theme={theme} data-testid="mohan-gpt">
      {isClassic ? (
        <Classic theme={theme} onBackToChat={goChat} onToggleTheme={toggleTheme} />
      ) : (
        <S.Body>
          {isMobile && drawerOpen ? (
            <S.Scrim
              type="button"
              aria-label="Close menu"
              onClick={() => setDrawerOpen(false)}
            />
          ) : null}

          <Sidebar
            isMobile={isMobile}
            drawerOpen={drawerOpen}
            collapsed={collapsed}
            theme={theme}
            busy={busy}
            contact={CONTACT}
            onAsk={ask}
            onStartTour={startTour}
            onToggleCollapsed={() => setCollapsed(prev => !prev)}
            onToggleTheme={toggleTheme}
            onViewClassic={goClassic}
          />

          <S.Main>
            <S.TopBar>
              {isMobile ? (
                <S.Hamburger
                  type="button"
                  aria-label="Open menu"
                  onClick={() => setDrawerOpen(prev => !prev)}
                >
                  <IconMenu />
                </S.Hamburger>
              ) : null}
              <S.TopBarSpacer />
              <S.ClassicButton type="button" onClick={goClassic}>
                <IconFileText size={15} />
                <span>View classic résumé</span>
              </S.ClassicButton>
            </S.TopBar>

            {hasMessages ? (
              <>
                <Thread
                  messages={messages}
                  busy={busy}
                  tourActive={tour.active}
                  onAsk={ask}
                  onNextTour={nextTour}
                  onExitTour={exitTour}
                  onViewClassic={goClassic}
                />
                <S.ComposerBar>
                  <S.ComposerBarInner>
                    <Composer onSend={ask} disabled={busy} />
                    <S.Disclaimer>
                      MohanGPT is a scripted agent — it only answers from Mohan’s résumé.
                    </S.Disclaimer>
                  </S.ComposerBarInner>
                </S.ComposerBar>
              </>
            ) : (
              <S.Empty>
                <S.EmptyInner>
                  <S.HeroMonogram aria-hidden>M</S.HeroMonogram>
                  <S.HeroText>
                    <S.Welcome>
                      I’m MohanGPT — ask me anything about Mohan’s work.
                    </S.Welcome>
                    <S.HeroName>{PROFILE.name}</S.HeroName>
                    <S.HeroIdentity>{PROFILE.identity}</S.HeroIdentity>
                  </S.HeroText>
                  <S.ComposerSlot>
                    <Composer onSend={ask} disabled={busy} autoFocus />
                  </S.ComposerSlot>
                  <S.ChipRow>
                    {SUGGESTIONS.map(suggestion => (
                      <S.Chip
                        key={suggestion}
                        type="button"
                        disabled={busy}
                        onClick={() => ask(suggestion)}
                      >
                        {suggestion}
                      </S.Chip>
                    ))}
                  </S.ChipRow>
                  <S.TourTextButton type="button" disabled={busy} onClick={startTour}>
                    <IconCompass size={15} />
                    <span>Or take the guided tour</span>
                  </S.TourTextButton>
                </S.EmptyInner>
              </S.Empty>
            )}
          </S.Main>
        </S.Body>
      )}
    </S.Root>
  );
};

export default MohanGPT;
