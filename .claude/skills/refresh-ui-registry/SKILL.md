---
name: refresh-ui-registry
description: Re-scan the my-portfolio codebase and update the ui-registry (and ui-tokens) skill so its component/icon/primitive inventory matches reality. Run after adding or removing components, on a schedule via /loop, or when ui-registry looks stale. Invoke directly as /refresh-ui-registry.
---

# Refresh the UI registry

`ui-registry` is a hand-maintained inventory, so it drifts the moment a
component lands without the skill being updated. This is the routine that
re-syncs it. It is **read-and-update-docs only** — it must not change any
application code.

## Scan

Run these and compare against
[.claude/skills/ui-registry/SKILL.md](../ui-registry/SKILL.md):

```bash
cd "$(git rev-parse --show-toplevel)"

# 1. Exported styled-components / primitives per styles-and-helpers file
for f in components/Portfolio/styles.ts components/Portfolio/Work/styles.ts \
         libs/mohan-gpt/src/lib/styles.ts libs/mohan-gpt/src/lib/tokens.ts; do
  echo "== $f"
  grep -oE '^export const [A-Za-z0-9_]+' "$f" | sed 's/export const //' | tr '\n' ' '; echo
done

# 2. Icons (the set most likely to have grown)
grep -oE '^export const Icon[A-Za-z0-9_]*|^export const [A-Za-z0-9_]*Glyph' \
  libs/mohan-gpt/src/lib/icons.tsx components/Portfolio/icons.tsx 2>/dev/null \
  | sed 's/.*export const //' | sort -u

# 3. Component folders (a new folder = a new entry)
find components libs -type d -name node_modules -prune -o -type f -name 'index.tsx' -print | sort

# 4. Lib barrels — the public surfaces
for f in libs/*/src/index.ts; do echo "== $f"; cat "$f"; done

# 5. Behavioural helpers (non-styles .tsx/.ts at a component root)
find components libs -name node_modules -prune -o \
  \( -name '*.tsx' -o -name '*.ts' \) -not -name 'index.tsx' \
  -not -name 'styles.ts' -not -name '*.test.tsx' -print | sort

# 6. New Nx projects / tags
pnpm nx show projects
```

For `ui-tokens`, also diff the token sources:

```bash
cat libs/ui-theme/src/lib/colors.ts libs/ui-theme/src/lib/fonts.ts
grep -nE '^\s+--[a-z-]+:' libs/mohan-gpt/src/lib/tokens.ts
grep -n 'fonts.googleapis' pages/_document.tsx
grep -rhoE 'border-radius: [^;]+' components libs | sort | uniq -c | sort -rn | head -20
```

## Update

Edit **`ui-registry`** (and `ui-tokens` if token values moved):

- **Add** new exports, icons, sub-components, and libs to the right table.
- **Remove** anything that no longer exists — a registry that lists deleted
  components is worse than one that's merely incomplete, because it sends the
  next session looking for something that isn't there.
- **Re-check the reuse matrix** if `pnpm nx show projects` reveals a new project
  or a changed tag — `type:feature` still may import `type:util` only.
- **Keep counts honest.** The skill states exact counts ("26 inline SVG
  icons", "19 exported types"); if a count changed, change the number.
- Preserve the existing table shapes, tone, and the boundary caveats. This is a
  sync, not a rewrite.

## Report

State plainly what changed: added / removed / corrected, or "no drift — registry
matches". If you found drift, mention whether any of it suggests a real problem
(e.g. a feature lib that has started duplicating a shell primitive, which may
mean something belongs in `ui-theme`).

## Constraints

- **Docs only.** Do not touch application code, even if the scan reveals a
  genuine issue — report it instead.
- Do not run `pnpm build` / `testc`; nothing here can break them.
- No commit unless asked. If asked: `docs(skills): refresh ui-registry inventory`.

## Running it on a schedule

```
/loop 1d /refresh-ui-registry
```

Dynamic pacing (`/loop /refresh-ui-registry`) also works, but this only needs to
run when components change — after a UI-heavy session is the natural trigger.
