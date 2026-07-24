---
name: ui-rules
description: How to build UI in my-portfolio — the styled-components patterns, transient props, the WCAG AA contrast floor and how to verify it, focus/keyboard rules, prefers-reduced-motion, SSR-safe browser API access, responsive approach, and images. Load before writing or editing any component, styles.ts, animation, or interactive element, and before reviewing UI changes.
---

# UI rules

Non-negotiables first: **WCAG AA contrast in every state**, **keyboard operable**,
**`prefers-reduced-motion` honoured**, **SSR-safe**. Everything else is style.

## styled-components

- One colocated **`styles.ts`** per component folder. Components import from it;
  they don't declare styled-components inline in `index.tsx`. (The one accepted
  exception is a tiny local wrapper used once, as in `reveal.tsx`.)
- Import tokens, never hardcode a hex that already has a token:
  ```ts
  import styled from 'styled-components';
  import { COLOR, FONT } from '@my-portfolio/ui-theme';
  ```
- **Transient props** (`$`-prefixed) for anything used only for styling, so it
  never reaches the DOM:
  ```ts
  const Box = styled.div<{ $shown: boolean; $delay: number }>`
    opacity: ${props => (props.$shown ? 1 : 0)};
    transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${props => props.$delay}ms;
  `;
  ```
  Note `arrow-parens: as-needed` — `props => …`, not `(props) => …`.
- **Never edit `GlobalStyles` to style one page.** It paints `body` white for
  every mini-app. The dark landing pages own their own background on their local
  `Page` wrapper — follow that. A change to `GlobalStyles` affects 14 apps.
- Scope a lib's CSS variables to **the lib's root element**, not `<html>` — see
  `libs/mohan-gpt/src/lib/tokens.ts`. This is what keeps a mini-app's theme from
  leaking.
- SSR is via `ServerStyleSheet` in `_document.tsx` and works automatically. Don't
  add a `.babelrc` — SWC handles the transform and a babelrc disables SWC.

## Accessibility — the floor, not a nice-to-have

**Contrast: 4.5:1 for normal text, 3:1 for large text (≥24px, or ≥18.66px bold)
and for UI component boundaries / focus indicators.** This has been enforced
before (`fix(mohan-gpt): clear WCAG AA across every state`) and is expected to
hold.

Check **every state**, not just the resting one: default, hover, active,
disabled, placeholder, and against **every surface the element can sit on**. The
MohanGPT `--faint` token needed three surfaces checked (`--panel`, `--elevated`,
`--bg`) and the spec value failed on all of them.

When you correct a spec colour for contrast, **leave the measured ratio in a
comment** so the next person doesn't revert it:

```ts
/* Spec value was #707070, which measures 3.87:1 on --panel and 4.27:1 on
   --elevated — under the 4.5:1 AA floor for the small text it carries.
   Nudged to the lightest value that clears AA against all three surfaces. */
```

Also required:

- **Focus visible on everything interactive.** The house rings:
  ```css
  :focus-visible { outline: 2px solid ${COLOR.VIOLET_LIGHT}; outline-offset: 3px; border-radius: 4px; }
  ```
  and MohanGPT's exported `focusRing` helper (`2px solid var(--accent)`,
  `outline-offset: 2px`). Never `outline: none` without a replacement indicator.
- **Semantic elements.** `<button>` for actions, `<a href>` for navigation,
  real headings in order, `<main>`/`<section>`/`<nav>` for landmarks. A `div`
  with an `onClick` is a bug.
- **Accessible names** on icon-only controls (`aria-label`), and `alt` on every
  meaningful image (`alt=""` for decorative).
- **Keyboard**: every interaction reachable and operable by keyboard, in a
  sensible tab order. If you build a custom control, you own its key handling.
- `eslint-plugin-jsx-a11y` runs via `eslint-config-next` — a clean `pnpm lint`
  is necessary but **not** sufficient; it cannot see contrast.

## Motion

- **Always honour `prefers-reduced-motion: reduce.`** Two accepted shapes:

  Per-component:
  ```ts
  @media (prefers-reduced-motion: reduce) { transition: none; }
  ```

  Lib-wide (as in `tokens.ts`):
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
  ```
  Also check it in JS where motion is scripted —
  `window.matchMedia('(prefers-reduced-motion: reduce)').matches` — and skip
  straight to the end state (see `reveal.tsx`).
- Animate **`opacity` and `transform` only**. Add `will-change` for sustained
  animations, not for one-offs.
- House easing for entrances: `cubic-bezier(0.22, 1, 0.36, 1)`, ~0.7s.
- **All motion is hand-rolled** — CSS transitions plus rAF-throttled scroll
  effects. The four reference implementations, all in `components/Portfolio/`:
  `reveal.tsx` (IntersectionObserver fade+rise), `magnet.tsx` (pointer-follow,
  skips itself on `hover: none` and reduced motion), `AnimatedText.tsx`
  (character reveal — its `DIM = 0.55` floor is an **AA constraint**, commented
  in the file; don't tune it down), and the Work sticky showcase (scroll-driven
  scale that degrades to a plain list under reduced motion and 640px).
- **GSAP is installed but currently unused** (the intro overlay that used it is
  gone). Don't reach for it for something CSS/rAF can do; if nothing adopts it,
  it's a removal candidate.

## SSR safety

Pages are pre-rendered. Any `window` / `document` / `IntersectionObserver` /
`matchMedia` access must be inside `useEffect` (or feature-detected), and the
component must render a sensible **server** state first.
[reveal.tsx](../../../components/Portfolio/reveal.tsx) is the reference:

- starts hidden — no `window` on the server;
- feature-detects `IntersectionObserver` and `matchMedia`;
- falls back to "just show it" via `requestAnimationFrame` (so it isn't a
  synchronous `setState` in an effect);
- disconnects the observer in the cleanup.

Hydration mismatches show up as a flash or a React warning — if you see one,
the fix is a correct server state, not `suppressHydrationWarning`.

## Responsive

- **Fluid by default**: `clamp()` for type, padding, and radius. Reach for a
  media query only when the layout must genuinely re-flow.
- Container: `max-width: 1120px` + `margin: 0 auto` +
  `padding: 0 clamp(20px, 5vw, 44px)`.
- Contain horizontal overflow at the page wrapper (`overflow-x: hidden`, or
  `clip` when transforms must not create a scroll container).
- Test at 375px, 768px, 1280px, 1920px.

## Images

- **`next/image`**, not `<img>` — bare `<img>` was deliberately removed
  (`refactor: replace <img> with next/image`) and `eslint-config-next` will
  flag it.
- Always set dimensions or `fill` + a sized parent, and preserve aspect ratio.
  A past bug (`fix(weather-app): weather icons stretched/blurry`) came from
  exactly this.

## antd

antd 6 is CSS-in-JS; SSR extraction is already wired in `_document.tsx` via
`@ant-design/cssinjs`. Use antd where a mini-app already uses it; **do not
introduce antd into a lib that doesn't have it** — it is a large dependency and
the mini-apps are meant to stay independent.

## Review checklist

Before calling a UI change done:

- [ ] Contrast checked in **every** state against **every** surface
- [ ] Keyboard reachable + visible focus ring
- [ ] `prefers-reduced-motion` honoured
- [ ] Semantic elements; icon-only controls have accessible names
- [ ] No hardcoded colour that already has a token
- [ ] Transient (`$`) props for style-only props
- [ ] `GlobalStyles` untouched
- [ ] SSR-safe; no hydration warning in the console
- [ ] 375 / 768 / 1280 / 1920 checked; no horizontal scroll
- [ ] `pnpm lint` and `pnpm nx typecheck <lib>` green
