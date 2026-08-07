// The single source of truth MohanGPT answers from. Both the chat and the
// classic résumé view read from here — nothing else hardcodes copy.
//
// The facts mirror the v1 landing-page content model in
// components/Portfolio/data.ts. They are duplicated rather than imported on
// purpose: a `type:feature` lib may only depend on `type:util` libs, so a lib
// cannot reach back into the app's components/ folder.
//
// NOTE: the current engagement is a confidential contract — never name the
// client or its products here. Describe it generically, exactly as data.ts
// already does.

import type {
  AboutData,
  AchievementItem,
  ContactInfo,
  ExperienceItem,
  ProjectItem,
  SkillGroupItem,
} from './types';

/**
 * Portrait for the AboutCard. `public/images/mohan.png` is still the v1 site's
 * placeholder graphic rather than a real photo, so this stays null and the card
 * falls back to the design's own Lucide placeholder — which reads as
 * intentional, where the purple placeholder does not. Point this at
 * '/images/mohan.png' once a real portrait replaces that file.
 */
export const AVATAR_SRC: string | null = null;

export const PROFILE = {
  name: 'Mohan Das',
  role: 'Senior Frontend Engineer',
  identity:
    'Senior Frontend Engineer · 7+ years · React, TypeScript, design systems '
    + '& Web3 interfaces',
  bio:
    'Senior frontend engineer with 7+ years shipping production React and '
    + 'TypeScript — design systems, dashboards, and Web3 dApp frontends. '
    + 'Currently a frontend tech lead and the team’s primary reviewer on a '
    + 'long-term contract, now broadening into full-stack. He also built the '
    + 'chat you’re using right now.',
};

export const ABOUT: AboutData = {
  name: PROFILE.name,
  role: PROFILE.role,
  bio:
    'Senior frontend engineer with 7+ years in React and TypeScript. He works '
    + 'where interaction, performance and accessibility meet — design systems, '
    + 'dashboards, and Web3 dApp frontends — and is broadening into full-stack '
    + 'to own features end to end.',
  location: 'Mumbai, India · Remote',
  tags: ['Design Systems', 'React & TypeScript', 'Web3 Frontends', 'a11y'],
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Senior Frontend Engineer (Contract)',
    company: 'Web3 · decentralized-AI ecosystem',
    period: 'Aug 2021 — Present',
    summary:
      'Frontend technical lead and the team’s primary code reviewer across a '
      + 'large open-source Web3 ecosystem. Grew from top individual contributor '
      + '(1,500+ merged PRs, 94% merge rate) to reviewing 1,800+ of the team’s '
      + 'pull requests across 45+ repositories. Leads the frontend for an '
      + 'Electron + Next.js desktop app operating autonomous on-chain agents '
      + 'across 7 blockchains, and is sole author of the ecosystem’s shared '
      + 'React + Web3 component library.',
    tags: ['React', 'Next.js', 'TypeScript', 'ethers', 'viem', 'wagmi', 'Electron'],
  },
  {
    role: 'Software Developer',
    company: 'GoComet Solutions',
    period: 'Jan 2019 — Apr 2021',
    summary:
      'Built core product frontends and led a team of 4. Stood up the frontend '
      + 'testing suite from scratch (Jest + React Testing Library) to 95% '
      + 'coverage, shipped a UI-driven data-analysis and report-scheduling tool '
      + 'that compiled to MongoDB queries, and built RFQ and vendor-quotation '
      + 'flows with real-time bidding over WebSockets.',
    tags: ['React', 'Redux', 'Next.js', 'Jest', 'amCharts', 'WebSockets'],
  },
];

export const EDUCATION = {
  degree: 'M.Sc. Computer Science & Engineering',
  school: 'Mumbai University',
  period: '2017 — 2019',
  detail: 'GPA 9.33 / 10',
};

// Every project is a live route in this same app — the link is where it runs.
export const PROJECTS: ProjectItem[] = [
  {
    title: 'qiibee',
    badge: 'Take-home',
    description:
      'A loyalty-points platform with separate customer and brand dashboards, '
      + 'sign-in / sign-up, and a Redux store the app composes.',
    tags: ['React', 'Redux', 'TypeScript', 'Auth'],
    links: [{ label: 'Open', url: '/qiibee' }],
  },
  {
    title: 'taikai',
    badge: 'Take-home',
    description:
      'A paginated job board with tech-stack, location and salary filters, '
      + 'live search, and a role-details modal.',
    tags: ['React', 'TypeScript', 'Filtering', 'Modal'],
    links: [{ label: 'Open', url: '/assignment/taikai' }],
  },
  {
    title: 'crypto price',
    badge: 'Take-home',
    description:
      'Bitcoin’s average price across any date range you pick, charted live '
      + 'from the CoinGecko API.',
    tags: ['TypeScript', 'Charts', 'REST', 'Web3'],
    links: [{ label: 'Open', url: '/valory' }],
  },
  {
    title: 'weather-app',
    badge: 'Concept',
    description:
      'A 5-day forecast with an interactive amCharts temperature graph, '
      + 'powered by OpenWeatherMap.',
    tags: ['React', 'amCharts', 'REST'],
    links: [{ label: 'Open', url: '/weather-app' }],
  },
  {
    title: 'dashboard',
    badge: 'Concept',
    description:
      'An admin analytics UI: side / top nav, project-detail cards with '
      + 'charts, and a client-messages panel.',
    tags: ['React', 'UI', 'Charts'],
    links: [{ label: 'Open', url: '/dashboard' }],
  },
  {
    title: 'friends list',
    badge: 'Take-home',
    description:
      'A searchable, paginated friends list — favourite, add, delete and sort '
      + '— with a full Jest suite.',
    tags: ['React', 'useReducer', 'Jest'],
    links: [{ label: 'Open', url: '/friend-list' }],
  },
  {
    title: 'cogsy',
    badge: 'Take-home',
    description:
      'A responsive card grid where every card adapts to its data — image, '
      + 'video or text — with a favourite toggle.',
    tags: ['React', 'Responsive', 'CSS'],
    links: [{ label: 'Open', url: '/cogsy' }],
  },
  {
    title: 'plaza',
    badge: 'Take-home',
    description:
      'A virtual-meeting join flow: debounced email autocomplete, a details '
      + 'confirmation, and a reschedule step.',
    tags: ['React', 'Forms', 'UX'],
    links: [{ label: 'Open', url: '/plaza' }],
  },
  {
    title: 'fynd',
    badge: 'Take-home',
    description:
      'A searchable multi-select dropdown with per-item and select-all checks, '
      + 'driven by a reducer.',
    tags: ['React', 'useReducer'],
    links: [{ label: 'Open', url: '/assignment/fynd' }],
  },
  {
    title: 'appbase',
    badge: 'Take-home',
    description:
      'A data-list search widget (single or multi-select) backed by a reducer '
      + 'that never loses the source list.',
    tags: ['React', 'useReducer'],
    links: [{ label: 'Open', url: '/assignment/appbase' }],
  },
  {
    title: 'timer',
    badge: 'Concept',
    description:
      'Three independent stopwatches — start, pause and stop — each tracking '
      + 'its own time.',
    tags: ['React', 'Hooks', 'State'],
    links: [{ label: 'Open', url: '/timer' }],
  },
  {
    title: 'solid principles',
    badge: 'Concept',
    description:
      'A tiny sandbox demonstrating the Single Responsibility Principle with a '
      + 'calorie tracker.',
    tags: ['TypeScript', 'SOLID'],
    links: [{ label: 'Open', url: '/solid-principles' }],
  },
];

/** The four the chat leads with; the rest are one follow-up chip away. */
export const FEATURED_PROJECTS: ProjectItem[] = PROJECTS.slice(0, 4);

export const SKILL_GROUPS: SkillGroupItem[] = [
  {
    domain: 'Languages',
    icon: 'code',
    skills: ['TypeScript', 'JavaScript', 'Python', 'HTML', 'CSS', 'SCSS'],
  },
  {
    domain: 'Frontend',
    icon: 'grid',
    skills: ['React', 'Next.js', 'Redux Toolkit', 'styled-components', 'Ant Design', 'Storybook'],
  },
  {
    domain: 'Web3',
    icon: 'sparkles',
    skills: ['ethers', 'viem', 'wagmi', 'The Graph', 'WalletConnect'],
  },
  {
    domain: 'Testing & Quality',
    icon: 'shield',
    skills: ['Jest', 'React Testing Library', 'GitHub Actions', 'a11y'],
  },
  {
    domain: 'Tooling',
    icon: 'wrench',
    skills: ['Nx', 'Git', 'Vercel', 'Electron', 'Figma'],
  },
  {
    domain: 'Backend & full-stack',
    icon: 'server',
    growing: true,
    skills: ['Node.js', 'REST & GraphQL', 'MongoDB', 'Express', 'Docker'],
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    metric: '1,800+',
    title: 'Pull requests reviewed',
    detail:
      'Primary code reviewer for the team across 45+ repositories in a large '
      + 'open-source Web3 ecosystem.',
  },
  {
    metric: '1,500+',
    title: 'Pull requests merged',
    detail: 'Top individual contributor, at a 94% merge rate.',
  },
  {
    metric: 'Top 400',
    title: 'CSSBattle worldwide',
    detail: 'Peak worldwide ranking on CSSBattle (2021).',
  },
  {
    metric: '95%',
    title: 'Test coverage from zero',
    detail:
      'Built the frontend testing suite from scratch (Jest + React Testing '
      + 'Library) at GoComet.',
  },
  {
    metric: '~80%',
    title: 'Reporting effort cut',
    detail:
      'A UI-driven data-analysis and report-scheduling tool that compiled to '
      + 'MongoDB queries.',
  },
  {
    metric: 'Top 500',
    title: 'InterviewBit CodersBit',
    detail: 'Competitive-programming placement (2018); top 10% globally on HackerEarth (2017).',
  },
];

export const CONTACT: ContactInfo = {
  email: 'mohandast52@gmail.com',
  linkedin: 'https://www.linkedin.com/in/mohandast52/',
  linkedinLabel: 'in/mohandast52',
  github: 'https://github.com/mohandast52',
  githubLabel: '@mohandast52',
  // TODO: drop a résumé PDF in public/ and point this at it (e.g.
  // '/mohan-das-resume.pdf'). Until then the résumé affordances open the
  // classic view rather than linking at a file that does not exist.
  resumeUrl: null,
};
