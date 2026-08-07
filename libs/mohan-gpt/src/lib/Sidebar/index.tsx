// The app-shell sidebar: expanded (264px) and collapsed (68px) on desktop, an
// overlay drawer below 1024px. Topic rows inject their prompt into the chat.

import { useEffect, useRef } from 'react';
import {
  IconBriefcase,
  IconDownload,
  IconFileText,
  IconFolder,
  IconGithub,
  IconLinkedin,
  IconMail,
  IconMoon,
  IconPanelLeft,
  IconSun,
  IconTrophy,
  IconUser,
  IconWrench,
  IconCompass,
} from '../icons';
import type { ContactInfo, Theme } from '../types';
import * as S from './styles';

const TOPICS = [
  { id: 'about', label: 'About', q: 'Who is Mohan?', Glyph: IconUser },
  { id: 'experience', label: 'Experience', q: 'What’s his experience?', Glyph: IconBriefcase },
  { id: 'projects', label: 'Projects', q: 'Show me his best projects', Glyph: IconFolder },
  { id: 'skills', label: 'Skills', q: 'What’s his tech stack?', Glyph: IconWrench },
  { id: 'achievements', label: 'Achievements', q: 'What are his achievements?', Glyph: IconTrophy },
  { id: 'contact', label: 'Contact', q: 'How do I contact him?', Glyph: IconMail },
];

interface SidebarProps {
  isMobile: boolean;
  drawerOpen: boolean;
  collapsed: boolean;
  theme: Theme;
  busy: boolean;
  contact: ContactInfo;
  onAsk: (question: string) => void;
  onStartTour: () => void;
  onToggleCollapsed: () => void;
  onToggleTheme: () => void;
  onViewClassic: () => void;
}

const Sidebar = ({
  isMobile,
  drawerOpen,
  collapsed,
  theme,
  busy,
  contact,
  onAsk,
  onStartTour,
  onToggleCollapsed,
  onToggleTheme,
  onViewClassic,
}: SidebarProps) => {
  // The drawer always shows labels; only the desktop rail collapses.
  const labels = isMobile ? true : !collapsed;
  // A closed drawer is translated off-screen but still in the DOM, so without
  // `inert` its twelve controls stay in the tab order and keyboard focus
  // disappears into an invisible panel. `inert` also hides it from the a11y
  // tree, which is why aria-hidden tracks the same condition.
  const offscreen = isMobile && !drawerOpen;
  const asideRef = useRef<HTMLElement | null>(null);

  // Opening the drawer moves focus into it, so a keyboard user lands on the
  // thing that just appeared rather than continuing through the page behind it.
  useEffect(() => {
    if (isMobile && drawerOpen) asideRef.current?.focus();
  }, [isMobile, drawerOpen]);

  return (
    <S.Aside
      ref={asideRef}
      $mobile={isMobile}
      $open={drawerOpen}
      $collapsed={collapsed}
      aria-label="MohanGPT navigation"
      aria-hidden={offscreen}
      inert={offscreen}
      // Below 1024px it overlays the page behind a scrim — that is a modal.
      role={isMobile ? 'dialog' : undefined}
      aria-modal={isMobile ? true : undefined}
      tabIndex={isMobile ? -1 : undefined}
      data-testid="sidebar"
    >
      <S.Head>
        <S.LogoRow $labels={labels}>
          <S.LogoGroup>
            {isMobile ? (
              // No collapse behaviour on mobile, so the mark is decorative
              // rather than a button that does nothing but take a tab stop.
              <S.Monogram as="div" $interactive={false} aria-hidden>M</S.Monogram>
            ) : (
              <S.Monogram
                type="button"
                $interactive
                onClick={onToggleCollapsed}
                aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                title="MohanGPT"
              >
                M
              </S.Monogram>
            )}
            {labels ? (
              <S.LogoText>
                <S.LogoTitle>MohanGPT</S.LogoTitle>
                <S.LogoSub>Portfolio agent</S.LogoSub>
              </S.LogoText>
            ) : null}
          </S.LogoGroup>
          {!isMobile && !collapsed ? (
            <S.IconButton type="button" onClick={onToggleCollapsed} aria-label="Collapse sidebar">
              <IconPanelLeft />
            </S.IconButton>
          ) : null}
        </S.LogoRow>

        <S.TourButton
          type="button"
          $labels={labels}
          onClick={onStartTour}
          disabled={busy}
          title="Take the tour"
        >
          <IconCompass />
          {labels ? <span>Take the tour</span> : null}
        </S.TourButton>
      </S.Head>

      <S.Nav>
        {labels ? <S.NavLabel>Topics</S.NavLabel> : null}
        {TOPICS.map(({ id, label, q, Glyph }) => (
          <S.NavItem
            key={id}
            type="button"
            $labels={labels}
            title={label}
            disabled={busy}
            onClick={() => onAsk(q)}
          >
            <Glyph />
            {labels ? <span>{label}</span> : null}
          </S.NavItem>
        ))}
      </S.Nav>

      <S.Footer>
        {contact.resumeUrl ? (
          <S.NavItem
            as="a"
            $labels={labels}
            href={contact.resumeUrl}
            download
            title="Download résumé"
          >
            <IconDownload />
            {labels ? <span>Download résumé</span> : null}
          </S.NavItem>
        ) : null}
        <S.NavItem
          type="button"
          $labels={labels}
          onClick={onViewClassic}
          title="Classic view"
        >
          <IconFileText />
          {labels ? <span>Classic view</span> : null}
        </S.NavItem>
        <S.NavItem
          type="button"
          $labels={labels}
          onClick={onToggleTheme}
          title="Toggle theme"
        >
          {theme === 'dark' ? <IconSun /> : <IconMoon />}
          {labels ? <span>{theme === 'dark' ? 'Light mode' : 'Dark mode'}</span> : null}
        </S.NavItem>
        <S.SocialRow $labels={labels}>
          <S.SocialLink href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <IconGithub size={17} strokeWidth={1.6} />
          </S.SocialLink>
          <S.SocialLink
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <IconLinkedin size={17} strokeWidth={1.6} />
          </S.SocialLink>
        </S.SocialRow>
      </S.Footer>
    </S.Aside>
  );
};

export default Sidebar;
