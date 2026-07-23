// Design tokens (Vercel Geist) + the four animations the interface uses.
//
// The tokens are CSS custom properties applied to the lib's root element rather
// than to <html>, so they stay scoped to MohanGPT and cannot leak into the rest
// of the site. Children read them as var(--token).

import { css, keyframes } from 'styled-components';

export const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

export const dot = keyframes`
  0%, 60%, 100% { transform: translateY(0); opacity: 0.35; }
  30% { transform: translateY(-4px); opacity: 1; }
`;

export const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const shimmer = keyframes`
  0% { background-position: -460px 0; }
  100% { background-position: 460px 0; }
`;

/** The shimmer fill shared by every skeleton block. */
export const skeletonFill = css`
  background: linear-gradient(
    90deg,
    var(--panel) 25%,
    var(--elevated) 37%,
    var(--panel) 63%
  );
  background-size: 800px 100%;
  animation: ${shimmer} 1.25s linear infinite;
`;

export const tokens = css`
  --font-sans: 'Geist', system-ui, -apple-system, sans-serif;
  --font-mono: 'Geist Mono', ui-monospace, SFMono-Regular, monospace;

  &[data-theme='dark'] {
    --bg: #0a0a0a;
    --panel: #0f0f0f;
    --elevated: #191919;
    --border: #262626;
    --composer-border: #2f2f2f;
    --text: #ededed;
    --muted: #a1a1a1;
    --faint: #707070;
    --accent: #0070f3;
    --accent-strong: #3291ff;
    --on-accent: #ffffff;
    --shadow: rgba(0, 0, 0, 0.5);
    --user-bubble: #1c1c1c;
  }

  &[data-theme='light'] {
    --bg: #ffffff;
    --panel: #ffffff;
    --elevated: #f4f4f5;
    --border: #eaeaea;
    --composer-border: #e2e2e2;
    --text: #171717;
    --muted: #666666;
    --faint: #999999;
    --accent: #0070f3;
    --accent-strong: #0761d1;
    --on-accent: #ffffff;
    --shadow: rgba(0, 0, 0, 0.08);
    --user-bubble: #f1f1f2;
  }

  /* Everything here is functional motion (streaming, thinking, entrance), so
     honour the OS setting rather than animating regardless. */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;

/** Focus ring shared by every interactive element. */
export const focusRing = css`
  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
`;

/** The mono chip used for tags and skills. */
export const monoChip = css`
  font-family: var(--font-mono);
  color: var(--muted);
  border: 1px solid var(--border);
  border-radius: 6px;
`;
