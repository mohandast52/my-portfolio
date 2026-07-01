# cogsy

A self-contained mini-app: the **Cogsy card-UI assignment** — a responsive grid
of content cards. Each card adapts to the data it is given: an optional media
header (image, `<video>`, or none), a heading/subheading/optional description,
and an optional footer with a favourite toggle and a kebab menu. Authored in
TypeScript.

## Usage

```tsx
import Cogsy from '@my-portfolio/cogsy';
```

## Public API

Only `src/index.ts` is the public surface. Everything under `src/lib/` is
internal — import the package, don't reach into `lib/`.

## Targets

```bash
pnpm nx lint cogsy
pnpm nx typecheck cogsy
```
