---
name: build-plan
description: How to plan a non-trivial change in my-portfolio before writing code — the `.plans/<topic>-plan.md` format actually used in this repo (status blockquote, open decisions, guardrails, phasing), when a plan is warranted, and the standard phase shapes for a new lib, a landing page, or a dependency upgrade. Load when starting any multi-step or multi-session piece of work, when asked to "plan" something, or before a refactor that touches more than one project.
---

# Build plan

## When to write one

Write a plan for: a new mini-app lib · a new or reworked landing page · a
dependency/toolchain upgrade · anything spanning more than one Nx project ·
anything you won't finish in one sitting.

Skip it for: a bug fix · a copy tweak · a single-file change · anything you can
describe in one commit message.

## Where plans live

`.plans/<topic>-plan.md`, kebab-case. **`/.plans` is gitignored** — plans are
working memory, not published artifacts, so they can be blunt about blockers,
dead ends, and decisions that didn't work out. Existing plans to read as models:

- [.plans/portfolio-v2-landing-plan.md](../../../.plans/portfolio-v2-landing-plan.md)
  — a feature plan (the cleanest example of the format; the page it built was
  later folded into `/` — the plan remains the format model)
- [.plans/dependency-upgrade-plan.md](../../../.plans/dependency-upgrade-plan.md)
  — a long-running upgrade plan that became a status log

## The format

````markdown
# <Title> — <one-line what it is>

> Status: **<PLANNED / IN PROGRESS / DONE / BLOCKED>.** Two or three sentences on
> what this is, what it does *not* change, and what stays live.
>
> Decisions locked (YYYY-MM-DD): decision · decision · decision

## Open decisions (resolve before/at start)
- **<Thing>** — options, and the **default** you'll take if nobody answers.

## Guardrails (repo conventions — do not deviate)
- **Stack:** …no new deps unless justified…
- **Tokens:** …from `@my-portfolio/ui-theme`…
- **A11y:** …`prefers-reduced-motion`, focus rings, contrast…
- **<Any project-specific constraint>**

## Phasing

### Phase 0 — Scaffold
- …

### Phase 1 — …
- …

## Verification
- `pnpm lint` · `pnpm nx typecheck <lib>` · `pnpm testc` · `pnpm build`
- <anything that can only be checked in a browser — say so explicitly>
````

Four things make this format work here, and they're all easy to skip:

1. **The status blockquote is the first thing anyone reads.** Keep it current.
   State what is *not* changing as clearly as what is — "does not replace the
   current landing page under `components/Portfolio/*`, which stays the live
   home (`/`)" prevented a lot of ambiguity.
2. **Open decisions carry a default.** "Default: 3 sticky cards + a quiet link
   to the full grid" means work can start without a blocking question. Reserve
   real blocking questions for choices where guessing wrong wastes the work.
3. **Guardrails are restated in the plan**, even though they're in `CLAUDE.md`
   and these skills. Repeating them at the top of the plan is what keeps a
   long-running effort from drifting.
4. **Date the locked decisions.** Convert relative dates to absolute.

## Guardrails to restate in almost every plan

- **Repo stack only.** No new frameworks. Next 16 Pages Router + React 19 +
  styled-components + react-icons + antd (where already used); motion is
  hand-rolled CSS/rAF/IntersectionObserver (GSAP is installed but unused). If a
  reference design uses Tailwind / Framer Motion / Lucide, **re-express the
  effect** with what's here — that's how the v2 landing page was built (and its
  motion later folded into `/`).
- **Tokens from `@my-portfolio/ui-theme`**; each mini-app keeps its own palette.
- **Module boundaries** — no feature→feature imports. If the plan needs one,
  the plan is wrong; fix the plan.
- **No `any`.** Model the real types.
- **A11y**: WCAG AA in every state, `prefers-reduced-motion`, focus-visible,
  semantic headings, `alt` text.
- **Confidential client**: never name the Web3 contract client in any
  portfolio-facing copy; describe it generically.
- **Aliases in three places** if a new lib is involved.

## Standard phase shapes

### New mini-app lib
```
Phase 0 — Scaffold: libs/<name>/{src/index.ts, src/lib/index.tsx, styles.ts},
          project.json, tsconfig.json, README.md, aliases ×3, thin page
Phase 1 — Core UI: sections/components, each folder index.tsx + styles.ts
Phase 2 — State: useReducer (or the `...Copy` pattern if it filters/sorts a list)
Phase 3 — A11y + motion pass: contrast in every state, focus, reduced-motion
Phase 4 — Spec: co-located src/lib/index.test.tsx (mount smoke test minimum)
Phase 5 — Verify: nx lint/typecheck <name>, testc, build; README + CLAUDE.md
```

### Landing page / visual work
```
Phase 0 — Scaffold: page wrapper (overflow containment), container, shared primitives; confirm SSR clean
Phase 1 — Reusable pieces: buttons, Reveal, hooks — before any section
Phase 2..N — One phase per section, in reading order
Phase N+1 — Responsive pass: 375 / 768 / 1280 / 1920
Phase N+2 — A11y pass: contrast every state, keyboard, reduced-motion
Phase N+3 — Content: real copy + assets (list exactly which assets are needed)
```

### Dependency / toolchain upgrade
```
Phase 0 — Green baseline: record what currently passes, so a regression is visible
Phase N — One package (or one tightly-coupled group) per phase
          → upgrade, run the full gate, commit, record the outcome in the plan
```
Upgrades cascade — order matters and blockers move. `dependency-upgrade-plan.md`
records Next 16 being blocked, retried, still blocked, then unblocked only after
the Babel→SWC phase landed. **When a phase is blocked, write down what you
tried and what the evidence was** — that's what stopped the same dead end being
walked twice.

## Before writing the plan

1. Read the relevant skills: `architecture` (where it goes), `code-standards`
   (how to write it), `ui-registry` (**what already exists** — the most common
   planning mistake here is planning to build something that's already there).
2. Read the actual code you're about to change.
3. Check `.plans/` for a prior plan on the same topic.

Then keep it updated as you go — see the `progress-tracker` skill.
