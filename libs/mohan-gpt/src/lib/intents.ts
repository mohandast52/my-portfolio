// The agent's whole vocabulary. Every answer is hand-written from content.ts —
// there is no model, so an unmatched question must fall through to `fallback`
// rather than be invented.

import type { Followup, Intent } from './types';

/** Reusable follow-up chips, so the same question is always worded the same. */
const FU = {
  about: { label: 'Who is Mohan?', q: 'Who is Mohan?' },
  exp: { label: 'What’s his experience?', q: 'What’s his experience?' },
  proj: { label: 'Show his best projects', q: 'Show me his best projects' },
  allProj: { label: 'See every project', q: 'Show me all projects' },
  skills: { label: 'What’s his tech stack?', q: 'What’s his tech stack?' },
  contact: { label: 'How do I contact him?', q: 'How do I contact him?' },
  spec: { label: 'What does he specialize in?', q: 'What does he specialize in?' },
  ach: { label: 'See his achievements', q: 'What are his achievements?' },
  resume: { label: 'Get his résumé', q: 'Can I download his resume?' },
  why: { label: 'Why build this site?', q: 'Why this website?' },
  real: { label: 'Is this a real AI?', q: 'Is this a real AI?' },
  site: { label: 'How is this site built?', q: 'How is this site built?' },
  designSys: { label: 'Tell me about the design system', q: 'Tell me about his design system work' },
  web3: { label: 'What about Web3?', q: 'What Web3 work has he done?' },
} satisfies Record<string, Followup>;

export const SUGGESTIONS: string[] = [
  'Who is Mohan?',
  'What’s his experience?',
  'What does he specialize in?',
  'Show me his best projects',
  'What’s his tech stack?',
  'How do I contact him?',
];

/**
 * Insertion order matters: the matcher keeps the first intent with a strictly
 * higher score, so earlier entries win ties.
 */
export const INTENTS: Record<string, Intent> = {
  about: {
    text:
      'Mohan is a senior frontend engineer with 7+ years in React and '
      + 'TypeScript. He builds design systems, dashboards and Web3 dApp '
      + 'frontends — and he built the chat you’re using right now.',
    comp: 'about',
    fu: [FU.exp, FU.proj, FU.contact],
    kw: ['who is', 'about mohan', 'tell me about', 'his bio', 'biography', 'who’s mohan', "who's mohan", 'introduce', 'who he is'],
  },
  experience: {
    text:
      'Seven-plus years across two companies — currently frontend tech lead on '
      + 'a long-term Web3 contract, and before that a software developer at '
      + 'GoComet. Here’s the timeline:',
    comp: 'timeline',
    fu: [FU.proj, FU.skills, FU.ach],
    kw: ['experience', 'work history', 'career', 'his roles', 'past jobs', 'where has he worked', 'background', 'worked', 'employment'],
  },
  specialization: {
    text:
      'He specializes where design and engineering overlap: design systems, '
      + 'performant and accessible web apps, and Web3 dApp frontends. The '
      + 'breakdown:',
    comp: 'skills',
    fu: [FU.proj, FU.exp],
    kw: ['specialize', 'specialise', 'specialty', 'expertise', 'what does he do', 'focus on', 'good at', 'strengths'],
  },
  projects: {
    text:
      'Every project on this site is a live route in this same app — no '
      + 'screenshots of things you can’t click. Four he’d lead with:',
    comp: 'projects',
    fu: [FU.allProj, FU.skills, FU.contact],
    kw: ['project', 'best work', 'portfolio piece', 'built', 'shipped', 'things he made', 'case study', 'showcase', 'his work'],
  },
  allProjects: {
    text:
      'All twelve — take-home assignments and UI concepts, each one a live '
      + 'route in this app:',
    comp: 'allProjects',
    fu: [FU.skills, FU.contact],
    kw: ['all projects', 'every project', 'full list of projects', 'see all', 'show everything', 'complete list'],
  },
  skills: {
    text: 'His stack, grouped by domain:',
    comp: 'skills',
    fu: [FU.proj, FU.spec],
    kw: ['skill', 'tech stack', 'his stack', 'technolog', 'tools he use', 'languages', 'framework', 'what tech'],
  },
  achievements: {
    text: 'Selected highlights:',
    comp: 'achievements',
    fu: [FU.exp, FU.contact],
    kw: ['achievement', 'accomplish', 'award', 'recognition', 'highlight', 'proud of', 'wins', 'impact', 'metrics'],
  },
  contact: {
    text: 'The fastest ways to reach Mohan:',
    comp: 'contact',
    fu: [FU.resume, FU.proj],
    kw: ['contact', 'reach him', 'get in touch', 'email him', 'hire', 'connect with', 'reach out', 'message him', 'how do i contact'],
  },
  resume: {
    text:
      'There’s a classic résumé view of everything here — same content, laid '
      + 'out as a single scrollable page. Contact details below:',
    comp: 'contact',
    fu: [FU.proj, FU.exp],
    kw: ['resume', 'résumé', 'cv', 'download'],
  },
  years: {
    text:
      '7+ years — since January 2019. He’s currently a senior frontend '
      + 'engineer and technical lead, and is broadening into full-stack. Want '
      + 'the breakdown by role?',
    comp: null,
    fu: [FU.exp],
    kw: ['how many years', 'years of experience', 'how long has he', 'how experienced', 'total experience'],
  },
  education: {
    text:
      'M.Sc. in Computer Science & Engineering from Mumbai University '
      + '(2017 — 2019), GPA 9.33 / 10. Most of the craft, though, came from '
      + 'shipping and reviewing a lot of code.',
    comp: null,
    fu: [FU.exp, FU.skills],
    kw: ['education', 'study', 'studied', 'degree', 'university', 'college', 'academic', 'school', 'msc'],
  },
  location: {
    text: 'Based in Mumbai, India, and works remote-first across time zones.',
    comp: null,
    fu: [FU.contact],
    kw: ['where is he', 'located', 'based', 'location', 'which city', 'remote', 'timezone', 'where does he live'],
  },
  availability: {
    text:
      'He’s selectively open to senior frontend and design-systems roles, and '
      + 'is currently on a long-term contract. Contact details:',
    comp: 'contact',
    fu: [FU.resume, FU.exp],
    kw: ['available', 'hiring', 'open to', 'opportunit', 'looking for work', 'freelance', 'for hire', 'open roles'],
  },
  designSystems: {
    text:
      'Design systems are his core. He’s the sole author and maintainer of a '
      + 'published React + Web3 component library — a shared design system '
      + 'reused across every dApp in the ecosystem, Storybook-driven, '
      + 'accessible and themeable.',
    comp: 'skills',
    fu: [FU.web3, FU.exp, FU.contact],
    kw: ['design system', 'design systems', 'component library', 'storybook', 'tokens'],
  },
  web3: {
    text:
      'Plenty. Wallet flows, on-chain reads and writes, and subgraph data with '
      + 'ethers, viem, wagmi and The Graph — across 7 blockchains, including an '
      + 'Electron + Next.js desktop app that operates autonomous on-chain '
      + 'agents.',
    comp: 'skills',
    fu: [FU.designSys, FU.proj, FU.exp],
    kw: ['web3', 'blockchain', 'crypto', 'on-chain', 'onchain', 'dapp', 'wallet', 'ethereum', 'smart contract', 'subgraph'],
  },
  review: {
    text:
      'A lot of it. He’s the team’s primary code reviewer — 1,800+ pull '
      + 'requests reviewed across 45+ repositories, after 1,500+ of his own '
      + 'merged at a 94% merge rate. He also led a supply-chain security push: '
      + 'license-compliance CI gates, Dependabot triage, Snyk, and XSS fixes.',
    comp: 'achievements',
    fu: [FU.exp, FU.ach],
    kw: ['code review', 'reviewer', 'reviews', 'mentor', 'lead', 'leadership', 'team lead', 'security', 'supply chain'],
  },
  testing: {
    text:
      'Testing is not an afterthought for him. He built GoComet’s frontend '
      + 'test suite from scratch with Jest and React Testing Library to 95% '
      + 'coverage, and gates work behind CI with accessibility baked in.',
    comp: null,
    fu: [FU.skills, FU.ach],
    kw: ['testing', 'tests', 'jest', 'coverage', 'quality', 'accessibility', 'a11y'],
  },
  outside: {
    text:
      'Away from client work he keeps this site as a running sandbox — twelve '
      + 'mini-apps of take-homes and UI concepts — and he’s competed on '
      + 'CSSBattle, peaking in the top 400 worldwide.',
    comp: null,
    fu: [FU.site, FU.proj],
    kw: ['outside work', 'hobbies', 'free time', 'for fun', 'interests', 'when he’s not', "when he's not", 'personal life', 'outside of work', 'cssbattle'],
  },
  tools: {
    text:
      'Daily drivers: VS Code, Git, Figma, and Nx for the monorepo. He ships '
      + 'to Vercel and reaches for Electron when something needs to leave the '
      + 'browser.',
    comp: null,
    fu: [FU.skills],
    kw: ['favorite tool', 'favourite tool', 'daily driver', 'editor does he', 'his setup', 'what does he use to', 'favorite app'],
  },
  site: {
    text:
      'This one is a Next.js app in an Nx monorepo — TypeScript throughout, '
      + 'styled-components, twelve feature libs with enforced module '
      + 'boundaries, and CI that lints, type-checks, tests and builds only what '
      + 'a change touches. MohanGPT is one of those libs.',
    comp: null,
    fu: [FU.real, FU.proj],
    kw: ['how is this site', 'built this site', 'this website built', 'what is this built', 'stack of this site', 'how did he build this'],
  },
  why: {
    text:
      'Because a static PDF can’t show frontend craft. This chat is the '
      + 'portfolio — the medium is the demonstration.',
    comp: null,
    fu: [FU.real, FU.proj],
    kw: ['why this website', 'why build this', 'why a chat', 'why did he make', 'purpose of this site', 'why chat', 'why website'],
  },
  real: {
    text:
      'Honest answer: no. This is a scripted agent that only knows Mohan’s '
      + 'résumé — no live model, no API keys, no cost. The AI-product feel is '
      + 'the point; the craft is the portfolio.',
    comp: null,
    fu: [FU.why, FU.site, FU.proj],
    kw: ['real ai', 'are you real', 'actually ai', 'is this an ai', 'an llm', 'chatgpt', 'is this real', 'really ai', 'are you an ai'],
  },

  // System intents — never keyword-matched, only dispatched directly.
  greeting: {
    text:
      'Hey — I’m MohanGPT. I can tell you about Mohan’s experience, projects, '
      + 'skills, and how to reach him. Where should we start?',
    comp: null,
    fu: [FU.about, FU.proj, FU.contact],
    kw: [],
  },
  exitTour: {
    text: 'Sure — ask me anything. Here are a few starting points:',
    comp: null,
    fu: [FU.about, FU.exp, FU.proj, FU.contact],
    kw: [],
  },
  tourEnd: {
    text: 'That’s the tour. Ask me anything else, or reach out below.',
    comp: 'contact',
    fu: [FU.proj, FU.skills],
    kw: [],
  },
  fallback: {
    text:
      'I can answer questions about Mohan’s experience, projects, skills, and '
      + 'contact info — I stick strictly to what’s on his résumé. Try one of '
      + 'these:',
    comp: null,
    fu: [FU.about, FU.proj, FU.skills, FU.contact],
    kw: [],
  },
};

/** The guided tour, in order. */
export const TOUR: string[] = ['about', 'experience', 'projects', 'skills', 'contact'];
