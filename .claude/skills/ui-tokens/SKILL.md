---
name: ui-tokens
description: The actual design-token values in my-portfolio — the shared shell palette and fonts in ui-theme, the scoped MohanGPT CSS-variable set, the loaded webfonts, and the de-facto spacing/radius/motion scales. Load before picking any colour, font, radius, easing, or breakpoint, before adding a token, or when checking a contrast ratio.
---

# UI tokens

## The rule that governs all of this

**There is no site-wide design system, on purpose.** `ui-theme` holds the
**app-shell** tokens only. Every mini-app under `libs/` keeps its **own** brand
palette locally. Do not merge them, and do not reach for `ui-theme` colours
inside a mini-app just because they're available — a `type:feature` lib *may*
import `type:util`, so lint won't stop you, but it breaks the mini-apps'
independent identities.

**Where a token belongs:**

| Used by | Put it in |
|---|---|
| Landing page `/`, `Layout`, `GlobalStyles` | `libs/ui-theme/src/lib/` |
| One mini-app | that lib's `styles.ts` or `tokens.ts` |
| One component inside a lib | that component's `styles.ts` |

---

## `@my-portfolio/ui-theme` — the shell tokens

### `COLOR` — [libs/ui-theme/src/lib/colors.ts](../../../libs/ui-theme/src/lib/colors.ts)

**Legacy app-shell palette** (Layout, Footer, GlobalStyles — the light chrome):

| Token | Value |
|---|---|
| `BLUE` | `#337AB7` |
| `ORANGE` | `#F97168` |
| `LIGHT_GREY` | `#F2F2F2` |
| `YELLOW` | `#FFC600` |
| `LIGHT_YELLOW` | `#FFF3D8` |
| `WHITE` | `#FFFFFF` |
| `BLACK` | `#000000` |

**Landing-page palette** — dark + violet, used by `/`:

| Token | Value | Role |
|---|---|---|
| `INK` | `#0A0A0F` | page ground |
| `INK_2` | `#0E0E15` | alternate ground band |
| `SURFACE` | `#14141C` | raised cards |
| `SURFACE_2` | `#1B1B26` | elevated / hover |
| `BORDER` | `#262630` | hairlines |
| `TEXT` | `#ECECF1` | body text |
| `TEXT_MUTED` | `#8B8B99` | secondary |
| `TEXT_FAINT` | `#5C5C6B` | tertiary — **large/decorative text only**, it does not clear 4.5:1 on `INK` |
| `VIOLET` | `#8B5CF6` | the **single** accent |
| `VIOLET_LIGHT` | `#A78BFA` | focus ring, hover |
| `VIOLET_DARK` | `#6D28D9` | pressed / gradient stop |

Violet is deliberately the *only* accent on the landing page. Adding a second
hue there needs a real reason.

### `FONT` — [libs/ui-theme/src/lib/fonts.ts](../../../libs/ui-theme/src/lib/fonts.ts)

```ts
DISPLAY: "'Space Grotesk', system-ui, -apple-system, sans-serif"
BODY:    "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
MONO:    "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace"
```

Every token carries a system fallback so the shell renders before the webfont
arrives. Keep that when adding faces.

---

## MohanGPT — scoped CSS variables

[libs/mohan-gpt/src/lib/tokens.ts](../../../libs/mohan-gpt/src/lib/tokens.ts).
A Vercel-Geist-flavoured set, applied to the **lib's root element** — not
`<html>` — so it stays scoped and cannot leak into the rest of the site.
Children read them as `var(--token)`. Theme switches on
`&[data-theme='dark'] / &[data-theme='light']`.

| Variable | Dark | Light |
|---|---|---|
| `--bg` | `#0a0a0a` | `#ffffff` |
| `--panel` | `#0f0f0f` | `#ffffff` |
| `--elevated` | `#191919` | `#f4f4f5` |
| `--border` | `#262626` | `#eaeaea` |
| `--composer-border` | `#2f2f2f` | `#e2e2e2` |
| `--text` | `#ededed` | `#171717` |
| `--muted` | `#a1a1a1` | `#666666` |
| `--faint` | `#828282` | `#6f6f6f` |
| `--accent` | `#0070f3` | `#0070f3` |
| `--accent-strong` | `#3291ff` | `#0761d1` |
| `--on-accent` | `#ffffff` | `#ffffff` |
| `--shadow` | `rgba(0,0,0,0.5)` | `rgba(0,0,0,0.08)` |
| `--user-bubble` | `#1c1c1c` | `#f1f1f2` |
| `--font-sans` | `'Geist', system-ui, -apple-system, sans-serif` | ← same |
| `--font-mono` | `'Geist Mono', ui-monospace, SFMono-Regular, monospace` | ← same |

**`--faint` in both themes is contrast-corrected, not a spec value.** The design
spec said `#707070` (dark) and `#999999` (light); those measure 3.87:1 and
2.84:1 — under the 4.5:1 AA floor for the small text they carry. They were
nudged to the lightest AA-clean values. Both are load-bearing and commented in
the file. **If you re-sync this palette from a spec, re-verify the ratios rather
than reverting the values.**

Shared `css` helpers exported alongside the tokens: `focusRing`, `monoChip`,
`skeletonFill`, and the keyframes `blink`, `dot`, `fadeUp`, `shimmer`.

---

## Webfonts

Loaded in [pages/_document.tsx](../../../pages/_document.tsx) from Google Fonts,
all with `display=swap`:

| Family | Weights | Used by |
|---|---|---|
| Josefin Sans | 400, 600, 700 | global `body` (legacy shell) |
| PT Sans | 400, 700 | legacy mini-apps |
| Inter | 400, 500, 600 | `FONT.BODY` |
| JetBrains Mono | 400, 500, 700 | `FONT.MONO` |
| Space Grotesk | 500, 600, 700 | `FONT.DISPLAY` |
| Geist / Geist Mono | 300–700 / 400–600 (variable) | MohanGPT |

Adding a face means another render-blocking request — reuse what's loaded unless
a new mini-app genuinely needs its own identity.

---

## De-facto scales

Not centralised as tokens; these are the values actually in use. **Match them
rather than inventing new steps.**

**Radius** — `4` · `6` · `8` · `9` · `10` · `12` · `14` · `16` px, `50%` for
avatars/dots, `999px` for pills. The Work showcase's big sticky cards use `20px`.

**Layout** — content width `1120px`; gutter `clamp(20px, 5vw, 44px)`; section
rhythm `clamp(72px, 12vh, 128px) 0` with `scroll-margin-top: 84px` for the
sticky nav.

**Responsive** — fluid `clamp()` is the default; only reach for a media query
when layout must actually re-flow. `prefers-reduced-motion: reduce` is a
first-class breakpoint here and must be honoured (see the `ui-rules` skill).

**Motion** — entrance easing `cubic-bezier(0.22, 1, 0.36, 1)`; reveal duration
`0.7s`; the MohanGPT micro-interactions run `1.25s linear infinite` (shimmer)
and short `fadeUp` on entrance. All landing-page motion is hand-rolled
(CSS transitions + rAF-throttled scroll effects) — **GSAP is installed but
currently unused**; don't reach for it without a reason CSS/rAF can't cover.

---

## Adding a token

1. Confirm it's genuinely shell-wide (else it's local — put it in the lib).
2. Add to `libs/ui-theme/src/lib/colors.ts` or `fonts.ts` **with a comment
   saying what role it plays**, matching the existing grouped-with-a-header style.
3. Export it through `libs/ui-theme/src/index.ts`.
4. Check contrast before committing a text or border colour — see `ui-rules`.
5. `pnpm nx typecheck ui-theme && pnpm nx lint ui-theme`.
