// Content model for the portfolio landing page. Everything the page renders
// lives here as typed data, so adding a project or a role is a data edit, not
// a markup edit. All projects are real, live routes in this same app.
//
// NOTE: the current engagement is a confidential contract — the client and its
// product names are intentionally omitted; only the (public) technical scope is
// described. Do not add the client name here.

export type SocialIcon =
  | 'github'
  | 'linkedin'
  | 'twitter'
  | 'hackerrank'
  | 'cssbattle'
  | 'email';

export interface Social {
  icon: SocialIcon;
  label: string;
  handle: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
  /** Areas actively being grown (the full-stack push) — badged in the UI. */
  growing?: boolean;
}

export type ProjectKind = 'Take-home' | 'Concept';

export interface Project {
  slug: string;
  name: string;
  href: string;
  tagline: string;
  tags: string[];
  kind: ProjectKind;
  featured?: boolean;
}

export interface ExperienceEntry {
  period: string;
  role: string;
  org: string;
  detail: string;
  highlights?: string[];
  tech?: string[];
  /** Marks the ongoing role (subtle "now" indicator, not an availability ad). */
  live?: boolean;
}

export interface EducationEntry {
  degree: string;
  school: string;
  period: string;
  detail?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export const PROFILE = {
  name: 'Mohan',
  fullName: 'Mohan Das',
  role: 'Senior Frontend Engineer',
  location: 'Mumbai, India',
  email: 'mohandast52@gmail.com',
  avatar: '/images/mohan.png',
  // The one-line thesis; the accent word is highlighted in the hero.
  thesisLead: 'I build fast, accessible,',
  thesisAccent: 'pixel-perfect',
  thesisTrail: 'interfaces.',
  blurb:
    'Senior software developer with 7+ years building production React & '
    + 'TypeScript apps — design systems, dashboards, and Web3 dApp frontends. '
    + 'Currently a frontend tech lead on a long-term contract, and now '
    + 'broadening into full-stack — Node, APIs and databases — to own features '
    + 'end to end.',
};

export const NAV_LINKS: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Stack', href: '#stack' },
  { label: 'Work', href: '#work' },
  { label: 'Open source', href: '#github' },
  { label: 'Contact', href: '#contact' },
];

export const STATS: Stat[] = [
  { value: '7+', label: 'years shipping' },
  { value: '1,500+', label: 'PRs merged' },
  { value: '12', label: 'live projects here' },
];

export const SOCIALS: Social[] = [
  {
    icon: 'github',
    label: 'GitHub',
    handle: 'mohandast52',
    href: 'https://github.com/mohandast52',
  },
  {
    icon: 'linkedin',
    label: 'LinkedIn',
    handle: 'in/mohandast52',
    href: 'https://www.linkedin.com/in/mohandast52/',
  },
  {
    icon: 'twitter',
    label: 'X / Twitter',
    handle: '@Mohan_das_',
    href: 'https://twitter.com/Mohan_das_',
  },
  {
    icon: 'cssbattle',
    label: 'CSS Battle',
    handle: 'top 400 peak',
    href: 'https://cssbattle.dev/player/mohandast52',
  },
  {
    icon: 'email',
    label: 'Email',
    handle: 'mohandast52@gmail.com',
    href: 'mailto:mohandast52@gmail.com',
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  { label: 'languages', items: ['TypeScript', 'JavaScript', 'Python', 'HTML', 'CSS', 'SCSS'] },
  {
    label: 'frontend',
    items: ['React', 'Next.js', 'Redux Toolkit', 'styled-components', 'Ant Design', 'Storybook'],
  },
  {
    label: 'web3',
    items: ['ethers', 'viem', 'wagmi', 'The Graph', 'WalletConnect'],
  },
  {
    label: 'testing & quality',
    items: ['Jest', 'React Testing Library', 'GitHub Actions', 'a11y'],
  },
  {
    label: 'tooling',
    items: ['Nx', 'Git', 'Vercel', 'Electron', 'Figma'],
  },
  {
    label: 'backend & full-stack',
    growing: true,
    items: ['Node.js', 'REST & GraphQL', 'MongoDB', 'Express', 'Docker'],
  },
];

// Every project below is a page that runs in this same app — the href is its
// live route. Featured ones lead the grid with a violet accent.
export const PROJECTS: Project[] = [
  {
    slug: 'qiibee',
    name: 'qiibee',
    href: '/qiibee',
    tagline:
      'A loyalty-points platform with separate customer and brand dashboards, '
      + 'sign-in / sign-up, and a Redux store the app composes.',
    tags: ['React', 'Redux', 'TypeScript', 'Auth'],
    kind: 'Take-home',
    featured: true,
  },
  {
    slug: 'taikai',
    name: 'taikai',
    href: '/assignment/taikai',
    tagline:
      'A paginated job board with tech-stack, location and salary filters, '
      + 'live search, and a role-details modal.',
    tags: ['React', 'TypeScript', 'Filtering', 'Modal'],
    kind: 'Take-home',
    featured: true,
  },
  {
    slug: 'valory',
    name: 'crypto price',
    href: '/valory',
    tagline:
      "Bitcoin's average price across any date range you pick, charted live "
      + 'from the CoinGecko API.',
    tags: ['TypeScript', 'Charts', 'REST', 'Web3'],
    kind: 'Take-home',
    featured: true,
  },
  {
    slug: 'weather-app',
    name: 'weather-app',
    href: '/weather-app',
    tagline:
      'A 5-day forecast with an interactive amCharts temperature graph, '
      + 'powered by OpenWeatherMap.',
    tags: ['React', 'amCharts', 'REST'],
    kind: 'Concept',
    featured: true,
  },
  {
    slug: 'dashboard',
    name: 'dashboard',
    href: '/dashboard',
    tagline:
      'An admin analytics UI: side / top nav, project-detail cards with '
      + 'charts, and a client-messages panel.',
    tags: ['React', 'UI', 'Charts'],
    kind: 'Concept',
  },
  {
    slug: 'haptik',
    name: 'friends list',
    href: '/friend-list',
    tagline:
      'A searchable, paginated friends list — favourite, add, delete and sort '
      + '— with a full Jest suite.',
    tags: ['React', 'useReducer', 'Jest'],
    kind: 'Take-home',
  },
  {
    slug: 'cogsy',
    name: 'cogsy',
    href: '/cogsy',
    tagline:
      'A responsive card grid where every card adapts to its data — image, '
      + 'video or text — with a favourite toggle.',
    tags: ['React', 'Responsive', 'CSS'],
    kind: 'Take-home',
  },
  {
    slug: 'plaza',
    name: 'plaza',
    href: '/plaza',
    tagline:
      'A virtual-meeting join flow: debounced email autocomplete, a details '
      + 'confirmation, and a reschedule step.',
    tags: ['React', 'Forms', 'UX'],
    kind: 'Take-home',
  },
  {
    slug: 'fynd',
    name: 'fynd',
    href: '/assignment/fynd',
    tagline:
      'A searchable multi-select dropdown with per-item and select-all checks, '
      + 'driven by a reducer.',
    tags: ['React', 'useReducer'],
    kind: 'Take-home',
  },
  {
    slug: 'appbase',
    name: 'appbase',
    href: '/assignment/appbase',
    tagline:
      'A data-list search widget (single or multi-select) backed by a reducer '
      + 'that never loses the source list.',
    tags: ['React', 'useReducer'],
    kind: 'Take-home',
  },
  {
    slug: 'timer',
    name: 'timer',
    href: '/timer',
    tagline:
      'Three independent stopwatches — start, pause and stop — each tracking '
      + 'its own time.',
    tags: ['React', 'Hooks', 'State'],
    kind: 'Concept',
  },
  {
    slug: 'solid-principles',
    name: 'solid principles',
    href: '/solid-principles',
    tagline:
      'A tiny sandbox demonstrating the Single Responsibility Principle with a '
      + 'calorie tracker.',
    tags: ['TypeScript', 'SOLID'],
    kind: 'Concept',
  },
];

export const EXPERIENCE: ExperienceEntry[] = [
  {
    period: 'Aug 2021 — Present',
    role: 'Senior Frontend Engineer (Contract)',
    org: 'Web3 · decentralized-AI ecosystem — Remote',
    live: true,
    detail:
      'Frontend technical lead and the team’s primary code reviewer across a '
      + 'large open-source Web3 ecosystem.',
    highlights: [
      'Grew from top individual contributor (1,500+ merged PRs, 94% merge rate) '
      + 'to reviewing 1,800+ of the team’s pull requests across 45+ repositories.',
      'Lead the frontend for an Electron + Next.js desktop app operating '
      + 'autonomous on-chain agents across 7 blockchains (600+ merged PRs).',
      'Sole author and maintainer of a published React + Web3 component library '
      + '(a shared design system) reused across every dApp in the ecosystem.',
      'Led a supply-chain security initiative (~300 changes): license-compliance '
      + 'CI gates, Dependabot triage, Snyk integration, and XSS / injection fixes.',
    ],
    tech: ['React', 'Next.js', 'TypeScript', 'Redux Toolkit', 'ethers', 'viem', 'wagmi', 'The Graph', 'Electron'],
  },
  {
    period: 'Jan 2019 — Apr 2021',
    role: 'Software Developer',
    org: 'GoComet Solutions · Mumbai, India',
    detail: 'Built core product frontends and led a small team.',
    highlights: [
      'Built the frontend testing suite from scratch (Jest + React Testing '
      + 'Library), raising coverage to 95%.',
      'Shipped a UI-driven data-analysis and report-scheduling tool that '
      + 'compiled to MongoDB queries, cutting reporting effort ~80%.',
      'Built RFQ management and vendor-quotation flows with real-time bidding '
      + 'and messaging over WebSockets.',
      'Led a team of 4 and onboarded new hires; Employee of the Month for '
      + 'leading core product migrations.',
    ],
    tech: ['React', 'Redux', 'Next.js', 'Jest', 'RTL', 'amCharts', 'WebSockets'],
  },
];

export const EDUCATION: EducationEntry = {
  degree: 'M.Sc. Computer Science & Engineering',
  school: 'Mumbai University',
  period: '2017 — 2019',
  detail: 'GPA 9.33 / 10',
};

export const ACHIEVEMENTS: string[] = [
  'Top 400 worldwide — CSSBattle (2021)',
  'Top 500 — InterviewBit CodersBit (2018)',
  'Top 10% globally — HackerEarth (2017)',
];
