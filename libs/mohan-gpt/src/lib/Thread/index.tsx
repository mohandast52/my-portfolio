import { useEffect, useRef } from 'react';
import { IconArrowRight } from '../icons';
import type { Message } from '../types';
import RichComponent from './RichComponent';
import * as S from './styles';

/** How close to the bottom still counts as "following along". */
const STICK_THRESHOLD = 80;

interface ThreadProps {
  messages: Message[];
  busy: boolean;
  tourActive: boolean;
  onAsk: (question: string) => void;
  onNextTour: () => void;
  onExitTour: () => void;
  onViewClassic: () => void;
}

const Thread = ({
  messages,
  busy,
  tourActive,
  onAsk,
  onNextTour,
  onExitTour,
  onViewClassic,
}: ThreadProps) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  // Whether to keep pinning to the bottom; released when the user scrolls up.
  const stickRef = useRef(true);
  const countRef = useRef(messages.length);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    stickRef.current = el.scrollHeight - el.clientHeight - el.scrollTop < STICK_THRESHOLD;
  };

  // Runs on every message change — streaming chunks and the card reveal both
  // produce a new array, which is what keeps the view pinned.
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    if (messages.length !== countRef.current) {
      countRef.current = messages.length;
      // A brand-new message always re-pins, even if the user had scrolled away.
      stickRef.current = true;
    }
    if (stickRef.current) el.scrollTop = el.scrollHeight;
  }, [messages]);

  const lastIndex = messages.length - 1;

  return (
    <S.Scroll
      ref={scrollRef}
      onScroll={handleScroll}
      aria-live="polite"
      data-testid="thread"
    >
      <S.Inner>
        {messages.map((message, index) => {
          if (message.role === 'user') {
            return (
              <S.UserRow key={message.id}>
                <S.UserBubble>{message.display}</S.UserBubble>
              </S.UserRow>
            );
          }

          const showRich = Boolean(message.revealed && message.compType);
          const showTour = Boolean(
            message.tour && message.revealed && tourActive && index === lastIndex,
          );
          // Follow-ups sit alongside the tour controls, as in the prototype —
          // clicking one is the concrete "ask something else" escape hatch.
          const showFollowups = Boolean(message.revealed && message.followups?.length);
          const isLastStep = message.tour
            ? message.tour.step === message.tour.total - 1
            : false;

          return (
            <S.AgentRow key={message.id}>
              <S.Avatar aria-hidden>M</S.Avatar>
              <S.AgentCol>
                <S.AgentName>MohanGPT</S.AgentName>

                {message.thinking ? (
                  <S.Dots aria-label="MohanGPT is thinking">
                    <S.Dot $delay="0s" />
                    <S.Dot $delay="0.15s" />
                    <S.Dot $delay="0.3s" />
                  </S.Dots>
                ) : (
                  <S.AgentText>
                    {message.display}
                    {message.streaming ? <S.Cursor aria-hidden /> : null}
                  </S.AgentText>
                )}

                {showRich && message.compType ? (
                  <>
                    {!message.compReady ? (
                      <S.Skeleton aria-hidden data-testid="skeleton">
                        <S.SkeletonBlock />
                        <S.SkeletonBar />
                      </S.Skeleton>
                    ) : null}
                    <S.CompWrap $ready={Boolean(message.compReady)}>
                      <RichComponent type={message.compType} onViewClassic={onViewClassic} />
                    </S.CompWrap>
                  </>
                ) : null}

                {showTour ? (
                  <S.TourRow>
                    <S.TourNext type="button" onClick={onNextTour} disabled={busy}>
                      <span>{isLastStep ? 'Finish tour' : 'Next'}</span>
                      <IconArrowRight />
                    </S.TourNext>
                    <S.TourSkip type="button" onClick={onNextTour} disabled={busy}>
                      Skip section
                    </S.TourSkip>
                    <S.TourExit type="button" onClick={onExitTour} disabled={busy}>
                      Ask something else
                    </S.TourExit>
                    <S.StepText>
                      {`${(message.tour?.step ?? 0) + 1} of ${message.tour?.total ?? 0}`}
                    </S.StepText>
                  </S.TourRow>
                ) : null}

                {showFollowups ? (
                  <S.FollowupRow>
                    {message.followups?.map(followup => (
                      <S.FollowupChip
                        key={followup.q}
                        type="button"
                        disabled={busy}
                        onClick={() => onAsk(followup.q)}
                      >
                        <IconArrowRight size={12} />
                        <span>{followup.label}</span>
                      </S.FollowupChip>
                    ))}
                  </S.FollowupRow>
                ) : null}
              </S.AgentCol>
            </S.AgentRow>
          );
        })}
      </S.Inner>
    </S.Scroll>
  );
};

export default Thread;
