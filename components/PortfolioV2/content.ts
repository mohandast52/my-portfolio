// v2-specific copy for the animated alternate landing page. The shared identity
// (PROFILE, PROJECTS, SOCIALS) is reused from the v1 content model in
// components/Portfolio/data.ts — this file only holds what v2 adds on top:
// the hero copy, the About paragraph, and the "Capabilities" list (a reframe of
// the source template's 3D-designer "Services" section).
//
// NOTE: the current engagement is a confidential contract — never name the
// client here; describe it generically, exactly as data.ts already does.

export const HERO = {
  eyebrow: 'frontend engineer · mumbai, india',
  // Rendered lowercase on purpose (the playful template voice). The apostrophe
  // is a curly ’ to match the source.
  heading: 'hi, i’m mohan',
  subline: 'a frontend engineer crafting fast, accessible, pixel-perfect interfaces',
};

export const ABOUT_TEXT =
  'Senior frontend engineer with 7+ years shipping production React and '
  + 'TypeScript — design systems, dashboards, and Web3 dApp frontends. Currently '
  + 'a frontend tech lead and the team’s primary reviewer on a long-term '
  + 'contract, now broadening into full-stack to own features end to end. '
  + 'Let’s build something solid together.';

export interface Capability {
  no: string;
  name: string;
  detail: string;
}

// Drafted from the SKILL_GROUPS + EXPERIENCE in data.ts — the engineering
// answer to the template's "3D Modeling / Rendering / Branding" list.
export const CAPABILITIES: Capability[] = [
  {
    no: '01',
    name: 'Design Systems',
    detail:
      'Sole author of a published React + Web3 component library reused across '
      + 'every dApp in the ecosystem — Storybook-driven, accessible, themeable.',
  },
  {
    no: '02',
    name: 'Web3 dApp Frontends',
    detail:
      'Wallet flows, on-chain reads and writes, and subgraph data with ethers, '
      + 'viem, wagmi and The Graph — across 7 blockchains, including an '
      + 'Electron + Next.js desktop app.',
  },
  {
    no: '03',
    name: 'Dashboards & Data-viz',
    detail:
      'Admin analytics, charts and reporting UIs (amCharts / Ant Design Charts) '
      + 'that turn dense data into clear decisions.',
  },
  {
    no: '04',
    name: 'Testing, Quality & a11y',
    detail:
      'Jest + React Testing Library suites, CI gates, supply-chain security and '
      + 'accessibility baked in — also the team’s primary reviewer, 1,800+ PRs '
      + 'across 45+ repos.',
  },
  {
    no: '05',
    name: 'Full-stack (growing)',
    detail:
      'Extending into Node, REST / GraphQL APIs and databases to own features '
      + 'end to end.',
  },
];
