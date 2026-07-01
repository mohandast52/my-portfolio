# valory

A self-contained mini-app: shows bitcoin's average price over a date range
(CoinGecko API). Second feature extracted into an Nx library, authored in
TypeScript.

## Usage

```tsx
import Valory from '@my-portfolio/valory';
```

Rendered by [pages/valory.jsx](../../pages/valory.jsx).

## Public API

Only `src/index.ts` is the public surface. Everything under `src/lib/` is
internal — import the package, don't reach into `lib/`.

## Targets

```bash
pnpm nx lint valory
pnpm nx typecheck valory
```
