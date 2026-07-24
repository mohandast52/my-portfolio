---
name: progress-tracker
description: How to record and pick up in-flight work in my-portfolio — the newest-first status-log convention in `.plans/`, what a phase-outcome entry must contain (commit SHA, verified evidence, what's left), how to record blockers and reversions honestly, and the resume checklist for a new session. Load when resuming multi-session work, after landing a phase of a plan, when a phase gets blocked or reverted, or when asked "where did we get to".
---

# Progress tracker

A plan without an honest status log is worse than no plan — it makes stale
assumptions look current. The convention here:
**a plan file becomes its own status log, newest entry at the top.**

The reference is
[.plans/dependency-upgrade-plan.md](../../../.plans/dependency-upgrade-plan.md),
which ran across many sessions and multiple reversals.

## The two things you update

### 1. The status blockquote at the top

Always current, always the first thing a new session reads:

```markdown
> Status: Phases 0,1,2,4,5,6,7,8 done + Node pinned to 20 (b568a29) +
> **Next 14.2 (9a44744)**. Node 20 unblocked the rest. Remaining (all reachable
> on Node 20): Next 15→16, React 19, @ant-design/charts 2, Jest 30, antd 6,
> ESLint flat config.
> NOTE for future runs: `engines` pins Node 20 — prefix commands with
> `nvm use 24`, else the install errors on the default Node.
```

Note the second line. **Environment gotchas that cost you time go in the status
block**, not buried in a phase entry. The next session hits them first.

### 2. A phase-outcome section, inserted at the top of the body

```markdown
## <Phase name> DONE (<commit sha>) — <one-line what changed>

<What changed, concretely.> <What broke and how it was worked around.>
<Verification evidence — actual numbers, not "it works".>

Remaining: <what's still open, and what it now depends on>.
```

Real example from the repo:

```markdown
## Phase 9 DONE (ebab186) — .babelrc deleted, SWC re-enabled

Removed the last Babel config; SWC is active again. styled-components → SWC
`compiler.styledComponents`; aliases → jsconfig `paths` + jest
`moduleNameMapper`; removed 3 dead babel-plugin-* devDeps. Build "Compiled
successfully" under SWC (~7.5s), 7/7 tests, SSR (styled + antd) intact.
**This unblocks Next 16 (Turbopack).**
```

## What every entry must contain

- **The commit SHA.** Prose without a SHA can't be checked.
- **Verified evidence, with numbers.** "SSR HTML has 2747 `.ant-` rules",
  "7/7 tests", "build static, 24 pages" — not "verified working". This is the
  same standard as the `code-standards` verification gate: if you didn't run it,
  don't write it.
- **What's left and what it depends on.** The next session should be able to
  start without re-deriving the graph.

## Recording blockers — do this properly

The single highest-value content in the log. Blocked ≠ failed; it's a finding.

```markdown
## antd 6 DONE (on Next 15). Next 16 CONCLUSIVELY blocked.

**Next 16 retried with antd 6 → STILL 4 antd SSR rules.** So across antd 5,
antd 6, AND SWC, Next 16's `_document` `renderPage`/`extractStyle` cssinjs
extraction does not capture. Conclusion: **Next 16's Pages-Router CSS-in-JS SSR
pipeline is the blocker** — not antd, not Babel. Fixing it would need App-Router
migration (out of scope). **Next 15 is the ceiling for this app.**
```

Include: **what you tried**, **the evidence** (the 4-vs-2747 number *is* the
finding), **the conclusion**, and **the likely fix path** if there is one.
Without this, the same dead end gets walked again next session — and in this
repo it was, twice, until it was written down.

Mark superseded entries `## (historical) …` rather than deleting them. The
history of *why* something was blocked is what let Next 16 eventually land.

## Also record

- **Decided against, and why.** `@ant-design/charts 2` was skipped by choice —
  client-only canvas charts behind a login, no tests, unverifiable headlessly.
  Written down, that's a decision. Undocumented, it looks like an oversight.
- **Open follow-ups / tech debt** in their own section — e.g. "visual QA in a
  browser needed", "qiibee reducer mutates in place → RTK checks disabled
  (refactor to Immer to re-enable)".
- **Post-plan additions**, dated, when work lands that wasn't in the original
  phasing.
- **What could not be verified**, explicitly. Chart pages depend on the amCharts
  CDN and headless tooling blocks on them, so "needs a browser pass" is a real
  and recurring status — say it rather than implying coverage you don't have.

## Resuming a session

1. `ls .plans/` and read the **status blockquote** of the relevant plan first.
2. `git log --oneline -15` — reconcile the log against what actually landed. The
   commits are the truth; the plan is a claim about them.
3. `git status` — check for uncommitted work in progress. Remember
   `components/TypescriptLearning/` is deliberately untracked and `/.plans` is
   gitignored, so neither shows as a change to worry about.
4. `nvm use`, then re-establish a green baseline before adding to it:
   `pnpm nx affected -t lint typecheck testc build`.
5. **If the plan and the code disagree, the code wins** — fix the plan first,
   then continue.

## Landing a phase

1. Run the full gate (`code-standards` skill). Confirm green.
2. Commit with a conventional message, scoped to the one concern, no AI
   attribution trailer.
3. Add the phase-outcome section at the top of the plan body, with the SHA.
4. Rewrite the status blockquote.
5. If it changed how the repo works — a new lib, a new alias, a new convention,
   a new config workaround — **update [CLAUDE.md](../../../CLAUDE.md) and the
   affected skill** in the same commit. `CLAUDE.md` and these skills are the
   published memory; `.plans/` is the private working memory, and it's gitignored
   so it will not travel to another machine or a fresh clone.

## Reporting to the user

Same standard as the log. State what passed, what failed with its output, what
you skipped and why. Don't report "done" for a phase where one check didn't run.
