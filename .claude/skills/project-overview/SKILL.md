---
name: project-overview
description: Orienting context for the my-portfolio repo — what it is, who it's for, the full route→lib map, and what is deliberately out of scope. Load this first when starting work in an unfamiliar area, when asked "where does X live", when deciding whether something belongs in this repo at all, or before touching portfolio-facing copy.
---

# Project overview

## What this is

A **personal portfolio + learning sandbox** — one Next.js site (Pages Router)
that stitches together a landing page and ~14 largely independent mini-apps.
The mini-apps are recruiter take-home assignments and UI/concept practice,
preserved rather than deleted, each carrying its own brand and its own history.

Two things follow from that, and they drive almost every judgement call here:

1. **There is almost no shared domain logic.** Treat each lib as its own app.
   A pattern that is right for `haptik` is not automatically right for `qiibee`.
   Resist the urge to "unify" them — the isolation is enforced by lint (see the
   `architecture` skill) because it is the point, not an accident.
2. **The landing page is a hiring artifact.** It is read by recruiters and
   engineers. Copy, polish, and accessibility on `/` and `/mohangpt` matter
   more than on the assignment pages.

## Audience

- **Recruiters / hiring managers** — land on `/`, skim, click one project.
- **Engineers reviewing the code** — land on the GitHub repo, read `CLAUDE.md`,
  open a lib. The repo *is* the portfolio; commit history and structure are on
  display as much as the rendered page.

## Route map

Every file in `pages/` is a **thin re-export**. All real code lives in a lib
under `libs/` or in `components/` (app shell only). Never add logic to a page.

### Landing / shell

| Route | Source | Notes |
|---|---|---|
| `/` | `components/Portfolio/` | The landing page. Dark + violet. Hand-rolled motion (scroll reveal, magnetic avatar, character reveal, sticky showcase); `getStaticProps` fetches GitHub repos. |
| `/mohangpt` | `@my-portfolio/mohan-gpt` | Interactive chat-shaped résumé. Vercel Geist look, its own scoped token set, WCAG AA verified. |

> A second landing page briefly existed at `/v2` and was **removed** (6b8b983) —
> its motion was folded into `/`. Don't reintroduce a parallel landing page;
> extend the one that exists.

### Mini-apps

| Route | Lib | What it is |
|---|---|---|
| `/weather-app` | `weather-app` | OpenWeatherMap client + amCharts v5 graph |
| `/valory` | `valory` | Web3 contract-client dashboard (see *Naming* below) |
| `/timer` | `timer` | Timer/stopwatch practice |
| `/solid-principles` | `solid-principles` | SOLID write-up |
| `/dashboard` | `dashboard` | Dashboard UI practice |
| `/cogsy` | `cogsy` | Take-home assignment |
| `/plaza` | `plaza` | Take-home assignment |
| `/friend-list` | `haptik` | Paginated searchable friends list. **The only lib with a real behavioural suite + coverage.** |
| `/assignment/taikai` | `taikai` | Take-home assignment |
| `/assignment/fynd` | `fynd` | Take-home assignment |
| `/assignment/appbase` | `appbase` (named `Appbase`) | Take-home assignment |
| `/assignment/circles` | `appbase` (named `Circles`) | Second screen from the same lib |
| `/qiibee/*` | `qiibee` (5 named exports) | The **only** Redux feature — owns its own slice |
| `/my-css/*` | in-page | Plain CSS experiments; not extracted to a lib |

### Not routed

- `libs/javascript-learning` — plain-JS interview/concept snippets. Nothing
  imports it. `lint` target only: no typecheck, no barrel, no alias, no page.
  If you are adding a JS scratch snippet, it goes here and stays unwired.
- `components/TypescriptLearning/` — personal sandbox, **gitignored and must
  stay untracked**. Never `git add -A`; stage explicitly.

## Naming constraint (important)

The Web3 contract-client work is under a **confidentiality constraint**. In any
portfolio-facing copy — landing page, `/mohangpt` content, README,
project descriptions — describe it **generically** ("a Web3 contract-client
dashboard", "an on-chain registry UI"). Do not name the client or its products.
The lib directory name is pre-existing and stays; the rendered copy must not
surface it.

## What belongs here vs. not

**Belongs:** a new self-contained mini-app; polish on the landing pages; a new
practice/learning lib; tooling and dependency upgrades for the workspace.

**Does not belong:** shared cross-feature abstractions (the boundary rule will
reject them); a design system merged across mini-apps — each keeps its own
palette on purpose; anything that requires a backend or a database. The site is
statically built and deployed to Vercel.

## Where to look next

- **How it's wired** → `architecture` skill
- **How to write the code** → `code-standards` skill
- **Building or restyling UI** → `ui-rules`, `ui-tokens`, `ui-registry` skills
- **Dependency/version gotchas** → `library-docs` skill
- **Starting a multi-step change** → `build-plan`, then `progress-tracker`
- **Canonical source of truth for commands** → [CLAUDE.md](../../../CLAUDE.md)
