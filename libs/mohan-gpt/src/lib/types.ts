// Domain + view types for MohanGPT. Everything the agent can say or render is
// modelled here, so the UI never has to guess at a shape.

export type Theme = 'dark' | 'light';
export type View = 'chat' | 'classic';

export interface AboutData {
  name: string;
  role: string;
  bio: string;
  location: string;
  tags: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  summary: string;
  tags: string[];
}

export interface ProjectLink {
  label: string;
  url: string;
  /** External links open in a new tab; in-app routes navigate in place. */
  external?: boolean;
}

export interface ProjectItem {
  title: string;
  /**
   * Mono label in the thumbnail corner. The design used a year; the real
   * projects are undated, so this carries their kind ("Take-home" / "Concept")
   * rather than inventing dates.
   */
  badge: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
}

/** The Lucide glyph a skill group is drawn with. */
export type SkillIcon = 'code' | 'grid' | 'sparkles' | 'shield' | 'wrench' | 'server';

export interface SkillGroupItem {
  domain: string;
  icon: SkillIcon;
  skills: string[];
  /** Areas actively being grown — badged in the UI, mirroring the v1 data model. */
  growing?: boolean;
}

export interface AchievementItem {
  metric: string;
  title: string;
  detail: string;
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  linkedinLabel: string;
  github: string;
  githubLabel: string;
  /**
   * Path to a downloadable résumé PDF, or null when none is published — in
   * which case the résumé affordances fall back to the classic view instead of
   * linking at a file that would 404.
   */
  resumeUrl: string | null;
}

/** The rich component an answer renders under its text, if any. */
export type CompType =
  | 'about'
  | 'timeline'
  | 'projects'
  | 'allProjects'
  | 'skills'
  | 'achievements'
  | 'contact';

export interface Followup {
  label: string;
  /** The question this chip sends when clicked. */
  q: string;
}

export interface Intent {
  text: string;
  comp: CompType | null;
  fu: Followup[];
  /** Substrings scored against the query; empty for system-only intents. */
  kw: string[];
}

export interface TourMeta {
  step: number;
  total: number;
}

export interface Message {
  id: string;
  role: 'user' | 'agent';
  /** What is currently on screen — grows one chunk at a time while streaming. */
  display: string;
  /** The full answer text, for agent messages. */
  text?: string;
  thinking?: boolean;
  streaming?: boolean;
  /** Text finished streaming: the rich component + follow-ups may show. */
  revealed?: boolean;
  /** The reveal delay has elapsed: swap the shimmer skeleton for the component. */
  compReady?: boolean;
  compType?: CompType | null;
  followups?: Followup[];
  tour?: TourMeta | null;
}
