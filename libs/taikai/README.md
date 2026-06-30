# taikai

A self-contained mini-app: a paginated job-listing board (companies + roles)
with tech-stack, location and salary filters, search, and a per-role details
modal. Recruiter take-home assignment, authored in TypeScript.

## Usage

```tsx
import Taikai from '@my-portfolio/taikai';
```

Rendered by [pages/assignment/taikai.jsx](../../pages/assignment/taikai.jsx).

## Public API

Only `src/index.ts` is the public surface. Everything under `src/lib/` is
internal — import the package, don't reach into `lib/`.

## Targets

```bash
pnpm nx lint taikai
pnpm nx typecheck taikai
```
