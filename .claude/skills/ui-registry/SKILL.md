---
name: ui-registry
description: Inventory of the UI primitives, layout wrappers, icons, and behavioural helpers that already exist in my-portfolio, and which of them you may reuse across project boundaries. Load BEFORE building any new component, wrapper, icon, animation helper, card, or button — check here first so you extend what exists instead of duplicating it.
---

# UI registry

**Check this before you build.** Then remember the boundary rule: a
`type:feature` lib may import `type:util` (`ui-theme`) **only**. Everything
listed under the app shell or another lib is **not importable** from a feature
lib — reuse means copying the pattern, not the import.

## Reuse matrix

| Source | Importable from the app shell (`components/`, `pages/`) | Importable from a feature lib |
|---|---|---|
| `@my-portfolio/ui-theme` | ✅ | ✅ |
| `components/Portfolio/*` | ✅ (`components/**` is allow-listed) | ❌ lint error |
| Another lib's internals | ❌ | ❌ |
| Same lib's `src/lib/**` | — | ✅ (relative imports) |

---

## `@my-portfolio/ui-theme` — the only cross-project surface

`COLOR` (shell + landing palette) and `FONT` (`DISPLAY` / `BODY` / `MONO`).
Values in the `ui-tokens` skill. Nothing else lives here, and it should stay
that way — it is site-shell tokens, not a component library.

---

## App shell — `components/`

### `Layout/` + `Layout/Footer/`
The site chrome wrapping the mini-app pages. Light theme (`GlobalStyles` paints
`body` white). Touch with care: it renders on every page.

### `GlobalStyles/`
`createGlobalStyle` — box-sizing reset, smooth scroll, `body`/`html` sizing,
Josefin Sans, font smoothing. **Affects all 14 apps. Do not edit it to style one
page.**

### `Portfolio/` — the live landing page (`/`)

Layout primitives in [components/Portfolio/styles.ts](../../../components/Portfolio/styles.ts):

| Export | What it is |
|---|---|
| `Page` | Dark full-bleed ground + the violet radial glow, `::selection`, `:focus-visible` ring |
| `Container` | `max-width: 1120px`, gutter `clamp(20px, 5vw, 44px)` |
| `Section` | Vertical rhythm `clamp(72px, 12vh, 128px)`, `scroll-margin-top: 84px` |
| `Eyebrow` | Mono kicker — `// about`, `// selected work` |
| `SectionTitle` · `SectionNote` · `SectionHead` | Section heading cluster |

Sections (each its own folder with `index.tsx` + `styles.ts`): `Hero`, `About`,
`Experience`, `Work`, `OpenSource`, `Stack`, `Contact`, `Navbar`.

Helpers:

- **`reveal.tsx`** — `<Reveal delay={n}>`: scroll-triggered fade + rise.
  **This is the reference implementation for SSR-safe, reduced-motion-aware,
  observer-cleanup-correct effects in this repo.** Copy its shape when you need
  a scroll effect in a lib.
- **`magnet.tsx`** — `<Magnet padding={n} strength={n}>`: magnetic pointer-follow
  wrapper (wraps the Hero avatar). Skips itself under `prefers-reduced-motion`
  and on non-hover pointers. Wrap an element that owns its own box — it is an
  `inline-block` shell, so a child sized in `%` will lose its reference.
- **`AnimatedText.tsx`** — `<AnimatedText text="…" />`: character-by-character
  scroll reveal (the About lead paragraph). Deliberately carries **no
  typography** — it renders a plain `<p>` so the surrounding context styles it.
  Its dim floor is an **accessibility constraint** (see the comment in the file);
  do not lower it below 0.55 or the un-scrolled text drops under AA.
- **`icons.tsx`** — inline SVG icons for the landing page.
- **`data.ts`** — static content (experience, projects, stack).
- **`github.ts`** — `fetchRepos()` + the `Repo` type, called from
  `pages/index.tsx`'s `getStaticProps`.

Work's featured showcase (`Work/styles.ts`: `Showcase`, `Slot`, `BigCard`) is
the reference for **sticky-stacking cards** — a scroll-driven `scale` on
`position: sticky` cards, which falls back to a plain stacked list under
`prefers-reduced-motion` and on narrow screens.

> A second landing page (`PortfolioV2`, `/v2`) existed briefly and was removed —
> its motion (magnet, character reveal, sticky stacking) was folded into
> `Portfolio/` instead. Don't reintroduce a parallel landing page; extend this one.

---

## `libs/mohan-gpt` — the richest component set in the repo

Self-contained; **not importable elsewhere**. But it is the best local reference
for a themed, accessible, token-driven interface — read it before designing a
new one.

- **`tokens.ts`** — scoped CSS variables + reusable `css` helpers:
  `focusRing`, `monoChip`, `skeletonFill`, and keyframes `blink`, `dot`,
  `fadeUp`, `shimmer`.
- **`styles.ts`** — the shell primitives: `Root`, `Body`, `Scrim`, `Main`,
  `TopBar`, `TopBarSpacer`, `Hamburger`, `ClassicButton`, `Empty`, `EmptyInner`,
  `HeroMonogram`, `HeroText`, `Welcome`, `HeroName`, `HeroIdentity`,
  `ComposerSlot`, `ChipRow`, `Chip`, `TourTextButton`, `ComposerBar`,
  `ComposerBarInner`, `Disclaimer`.
- **`icons.tsx`** — **26 inline SVG icons** + `SkillGlyph`, all typed with a
  shared `IconProps`:
  `IconArrowUp/Right/Left/UpRight`, `IconMenu`, `IconPanelLeft`, `IconSun`,
  `IconMoon`, `IconDownload`, `IconFileText`, `IconCompass`, `IconUser`,
  `IconBriefcase`, `IconFolder`, `IconWrench`, `IconCode`, `IconGrid`,
  `IconSparkles`, `IconShield`, `IconServer`, `IconTrophy`, `IconMail`,
  `IconLinkedin`, `IconGithub`, `IconMapPin`, `IconImage`.
  **Check here before drawing a new icon.**
- **Sub-components**: `Sidebar/`, `Thread/` (+ `RichComponent.tsx`),
  `Composer/`, `cards/`, `Classic/`.
- **Data/logic**: `content.ts` (résumé data), `intents.ts`
  (`SUGGESTIONS`/`INTENTS`/`TOUR`), `match.ts` (`resolve`, `getAnswer`),
  `types.ts` (19 exported types).

---

## Mini-app UI (each self-contained, none importable)

| Lib | Notable UI |
|---|---|
| `haptik` | `List/`, `Pagination/`, `Helpers/theme.ts` — the paginated searchable list |
| `weather-app` | `Graph/` — amCharts v5 via CDN globals |
| `qiibee` | 5 screens: `Brand`, `Customer`, `Login/SignIn`, `Login/SignUp`, root; antd + Redux |
| `appbase` | Two screens: `Appbase`, `Circles` |
| `dashboard`, `cogsy`, `taikai`, `fynd`, `plaza`, `timer`, `solid-principles`, `valory` | Single-screen mini-apps, each with its own local palette |

---

## Before you add a component

1. **Search first** — `grep -rn "styled.button" components libs` etc. The icon
   set and the layout wrappers already cover most needs.
2. **Decide where it lives.** Used by one lib → that lib. Used by the landing
   pages → `components/Portfolio*` . Genuinely shell-wide token → `ui-theme`
   (tokens only, not components).
3. **Don't create a shared component lib.** It would be a `type:util` project
   that every feature could import, which is exactly the coupling the boundary
   rule exists to prevent. Duplicate instead — it is the cheaper trade here.
4. **Follow the layout convention**: new folder, `index.tsx` + `styles.ts`.
5. **Update this skill** when you add something reusable, so the next session
   finds it.
