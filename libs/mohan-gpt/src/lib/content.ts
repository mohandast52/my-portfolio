// The single source of truth MohanGPT answers from. Both the chat and the
// classic résumé view read from here; nothing else hardcodes copy.
//
// NOTE: the current engagement is a confidential contract; never name the
// client or its products here. Describe it generically.

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
 * renders without a photo slot. Point this at '/images/mohan.png' once a real
 * portrait replaces that file.
 */
export const AVATAR_SRC: string | null = null;

export const PROFILE = {
  name: 'Mohan Das',
  role: 'Senior Frontend Engineer',
  identity:
    'Senior Frontend Engineer · 7+ years · React, TypeScript, Web3 · '
    + 'AI-assisted full-stack',
  bio:
    'Senior frontend engineer with 7+ years shipping production React and '
    + 'TypeScript: design systems, dashboards, and Web3 dApp frontends. '
    + 'Currently a frontend tech lead and the team’s primary reviewer on a '
    + 'long-term contract, now broadening into full-stack. He also built the '
    + 'chat you’re using right now.',
};

export const ABOUT: AboutData = {
  name: PROFILE.name,
  highlights: [
    'Web3: senior frontend engineer for a decentralized-AI ecosystem, from '
    + 'dApps to an Electron desktop app running agents across 7 chains',
    'Freight & logistics SaaS at GoComet: RFQ and vendor bidding over '
    + 'WebSockets, plus a report-scheduling analytics tool',
    'Property-tax software',
  ],
  location: 'Mumbai, India · Remote',
  tags: [
    'React',
    'TypeScript',
    'Next.js',
    'Node.js',
    'Web3',
    'Design Systems',
    'a11y',
  ],
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Senior Frontend Engineer (Contract)',
    company: 'Web3 · decentralized-AI ecosystem',
    period: 'Aug 2021 - Present',
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
    period: 'Jan 2019 - Apr 2021',
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
  period: '2017 - 2019',
  detail: 'GPA 9.33 / 10',
};

// The real projects Mohan leads with. Dashboard UI is a live route on this
// site; MyCodes and the Medium scraper live in their own repos.
export const REAL_PROJECTS: ProjectItem[] = [
  {
    title: 'Dashboard UI',
    badge: 'Project',
    description:
      'An analytics dashboard in React: side and top navigation, project-detail '
      + 'cards with charts, and a client-messages panel.',
    tags: ['React', 'TypeScript', 'Charts', 'UI'],
    links: [{ label: 'Open', url: '/dashboard' }],
  },
  {
    title: 'MyCodes',
    badge: 'Project',
    description:
      'A collection of vanilla-JavaScript projects and demos, from DOM and '
      + 'canvas experiments to CSS interactions.',
    tags: ['JavaScript', 'HTML', 'CSS', 'DOM'],
    links: [
      { label: 'View', url: 'https://mohandast52.github.io/MyCodes', external: true },
    ],
  },
  {
    title: 'Medium Scraper',
    badge: 'Project',
    description:
      'An article scraper that pulls and organises Medium content, built with '
      + 'Ruby on Rails, Nokogiri and SQLite.',
    tags: ['Ruby on Rails', 'Nokogiri', 'SQLite'],
    links: [
      { label: 'View code', url: 'https://github.com/mohandast52/medium-scrapper', external: true },
    ],
  },
];

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
