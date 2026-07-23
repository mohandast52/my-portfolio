// The app-shell sidebar: expanded (264px) and collapsed (68px) on desktop, an
// overlay drawer below 1024px. Topic rows inject their prompt into the chat.

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

  return (
    <S.Aside
      $mobile={isMobile}
      $open={drawerOpen}
      $collapsed={collapsed}
      aria-label="MohanGPT navigation"
      aria-hidden={isMobile && !drawerOpen}
      data-testid="sidebar"
    >
      <S.Head>
        <S.LogoRow $labels={labels}>
          <S.LogoGroup>
            <S.Monogram
              type="button"
              $interactive={!isMobile}
              onClick={isMobile ? undefined : onToggleCollapsed}
              aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              title="MohanGPT"
            >
              M
            </S.Monogram>
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
