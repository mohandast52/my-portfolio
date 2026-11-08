---
name: project-overview
description: Route→source map for my-portfolio, the confidential-client naming rule, what does not belong in this repo, and the untracked paths that must stay untracked. Load when locating a route's code, when adding something new and deciding whether it belongs here, or before writing any portfolio-facing copy.
---

# project-overview

Portfolio site plus learning sandbox: one Next.js app (Pages Router), fourteen
mini-apps under `libs/`, each independent. Most are recruiter take-homes, kept
rather than deleted.

## Routes

Every file in `pages/` is a thin re-export. The real code is in the lib — when
adding behavior, edit the lib.

| Route | Source |
|---|---|
| `/` | `components/Portfolio/` — landing page, `getStaticProps` fetches GitHub repos |
| `/mohangpt` | `mohan-gpt` — chat-shaped résumé, own scoped tokens |
| `/weather-app` | `weather-app` — amCharts v5 from CDN |
| `/valory` | `valory` — see the naming rule below |
| `/timer` · `/dashboard` · `/cogsy` · `/plaza` · `/solid-principles` | same-named libs |
| `/friend-list` | `haptik` — the only lib with a real behavioural suite + coverage |
| `/assignment/taikai` · `/fynd` | same-named libs |
| `/assignment/appbase` · `/circles` | `appbase`, named exports `Appbase` / `Circles` |
| `/qiibee/*` | `qiibee`, 5 named exports — the only Redux feature |
| `/my-css/*` | in-page, not extracted |

`/v2` was removed in 6b8b983 and its motion folded into `/`. Don't reintroduce a
parallel landing page; extend the one that exists.

## Never name the client

The Web3 contract-client work is confidential. In rendered copy — landing page,
`/mohangpt` content, READMEs, project descriptions — describe it generically
("a Web3 contract-client dashboard", "an on-chain registry UI"). Never name the
client or its products. The `valory` directory name is pre-existing and stays;
what ships to the browser must not surface it.

## Untracked and must stay that way

- `components/TypescriptLearning/` — personal sandbox, gitignored. **Never
  `git add -A` or `git add .`** — stage explicitly by path.
- `.plans/` — gitignored working memory.
- `libs/javascript-learning` — committed but unwired: nothing imports it, and it
  has a `lint` target only. No barrel, no alias, no typecheck, no page. New JS
  scratch snippets go here and stay unwired.

## What doesn't belong here

Shared cross-feature abstractions — the boundary lint rejects them, and that is
deliberate. A design system merged across mini-apps; each keeps its own palette.
Anything needing a backend or database: the site is statically built to Vercel.
