import Link from 'next/link';
import styled, { css } from 'styled-components';
import { focusRing, monoChip } from '../tokens';

/* ---------------------------------------------------------------- AboutCard */

export const AboutShell = styled.div`
  display: flex;
  gap: 18px;
  align-items: flex-start;
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 18px;
  max-width: 560px;

  @media (max-width: 479px) {
    flex-direction: column;
  }
`;

export const AboutPhoto = styled.div`
  flex: 0 0 auto;
  width: 92px;
  height: 92px;
  border-radius: 16px;
  background: var(--elevated);
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--faint);
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const AboutBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
`;

export const AboutName = styled.span`
  font-size: 17px;
  font-weight: 600;
  color: var(--text);
  letter-spacing: -0.01em;
`;

export const AboutRole = styled.span`
  font-size: 13px;
  color: var(--muted);
`;

export const AboutBio = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
  color: var(--text);
  text-wrap: pretty;
`;

export const AboutLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 2px;
  color: var(--faint);
  font-size: 12.5px;
`;

/* ------------------------------------------------------------ shared chrome */

export const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 2px;
`;

export const Tag = styled.span`
  ${monoChip};
  font-size: 11.5px;
  padding: 3px 8px;
`;

/* --------------------------------------------------- ExperienceTimeline */

export const TimelineShell = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
`;

export const TimelineRow = styled.div`
  display: flex;
  gap: 14px;
  align-items: stretch;
`;

export const TimelineRail = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 14px;
`;

export const TimelineDot = styled.span`
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: var(--bg);
  border: 2px solid var(--accent);
  margin-top: 5px;
`;

export const TimelineLine = styled.span`
  flex: 1;
  width: 2px;
  background: var(--border);
`;

export const TimelineBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-bottom: 22px;
  min-width: 0;
`;

export const TimelineHead = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 8px;
`;

export const TimelineRole = styled.span`
  font-size: 14.5px;
  font-weight: 600;
  color: var(--text);
`;

export const TimelineCompany = styled.span`
  font-size: 13px;
  color: var(--accent);
`;

export const TimelinePeriod = styled.span`
  font-family: var(--font-mono);
  font-size: 11.5px;
  color: var(--faint);
`;

export const TimelineSummary = styled.p`
  margin: 0;
  font-size: 13px;
  line-height: 1.55;
  color: var(--muted);
  text-wrap: pretty;
`;

export const TimelineTag = styled.span`
  ${monoChip};
  font-size: 11px;
  padding: 2px 7px;
`;

/* -------------------------------------------------------------- ProjectCard */

export const ProjectShell = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 14px;
  overflow: hidden;
  width: 100%;
`;

export const ProjectThumb = styled.div`
  position: relative;
  aspect-ratio: 16 / 9;
  background: var(--elevated);
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--faint);
`;

export const ProjectBadge = styled.span`
  position: absolute;
  bottom: 8px;
  left: 10px;
  font-family: var(--font-mono);
  font-size: 10.5px;
  color: var(--faint);
`;

export const ProjectBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 14px 16px 16px;
`;

export const ProjectTitle = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: var(--text);
  letter-spacing: -0.01em;
`;

export const ProjectDesc = styled.p`
  margin: 0;
  font-size: 13px;
  line-height: 1.55;
  color: var(--muted);
  text-wrap: pretty;
`;

export const ProjectTag = styled.span`
  ${monoChip};
  font-size: 11px;
  padding: 3px 7px;
`;

export const ProjectLinkRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 2px;
`;

const projectLinkCss = css`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 12.5px;
  font-weight: 500;
  text-decoration: none;
  padding: 6px 11px;
  border-radius: 8px;
  border: 1px solid var(--border);
  color: var(--text);
  transition: border-color 0.15s, background 0.15s;
  ${focusRing};

  &:hover {
    color: var(--text);
    border-color: var(--accent);
    background: var(--elevated);
  }
`;

/** In-app routes — every project on this site is one, so these are the norm. */
export const ProjectLinkInternal = styled(Link)`
  ${projectLinkCss};
`;

export const ProjectLinkExternal = styled.a`
  ${projectLinkCss};
`;

export const ProjectGrid = styled.div<{ $min?: number }>`
  display: grid;
  grid-template-columns: ${({ $min = 230 }) => `repeat(auto-fit, minmax(${$min}px, 1fr))`};
  gap: 12px;
`;

/* --------------------------------------------------------------- SkillsGrid */

export const SkillsShell = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 12px;
  max-width: 600px;
`;

export const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 14px;
`;

export const SkillHead = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--accent);
`;

export const SkillDomain = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
`;

/** Mirrors the v1 data model's `growing` flag on the full-stack group. */
export const SkillGrowing = styled.span`
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--accent-strong);
  border: 1px solid var(--accent);
  border-radius: 6px;
  padding: 1px 5px;
`;

export const SkillChip = styled.span`
  ${monoChip};
  font-size: 11.5px;
  background: var(--elevated);
  padding: 3px 8px;
`;

/* ---------------------------------------------------------- AchievementCard */

export const AchievementShell = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 14px 16px;
  width: 100%;
`;

export const AchievementHead = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--accent);
`;

export const AchievementMetric = styled.span`
  font-family: var(--font-mono);
  font-size: 15px;
  font-weight: 600;
  color: var(--text);
`;

export const AchievementTitle = styled.span`
  font-size: 13.5px;
  font-weight: 600;
  color: var(--text);
  letter-spacing: -0.01em;
`;

export const AchievementDetail = styled.p`
  margin: 0;
  font-size: 12.5px;
  line-height: 1.5;
  color: var(--muted);
  text-wrap: pretty;
`;

export const AchievementGrid = styled.div<{ $min?: number }>`
  display: grid;
  grid-template-columns: ${({ $min = 210 }) => `repeat(auto-fit, minmax(${$min}px, 1fr))`};
  gap: 12px;
`;

/* ------------------------------------------------------------- ContactCard */

export const ContactShell = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 8px;
  max-width: 420px;
`;

export const ContactRow = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 11px 12px;
  border-radius: 10px;
  text-decoration: none;
  color: var(--text);
  ${focusRing};

  &:hover {
    background: var(--elevated);
    color: var(--text);
  }
`;

export const ContactGlyph = styled.span`
  display: inline-flex;
  color: var(--muted);
`;

export const ContactText = styled.span`
  display: flex;
  flex-direction: column;
  gap: 1px;
  min-width: 0;
`;

export const ContactLabel = styled.span`
  font-size: 11px;
  color: var(--faint);
`;

export const ContactValue = styled.span`
  font-size: 13.5px;
  overflow-wrap: anywhere;
`;

/** Renders as <a download> when a PDF exists, or <button> to open the classic view. */
export const ContactAction = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  margin-top: 6px;
  padding: 11px 12px;
  border: none;
  border-radius: 10px;
  text-decoration: none;
  background: var(--accent);
  color: var(--on-accent);
  font-family: var(--font-sans);
  font-size: 13.5px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s;
  ${focusRing};

  &:hover {
    background: var(--accent-strong);
    color: var(--on-accent);
  }
`;
