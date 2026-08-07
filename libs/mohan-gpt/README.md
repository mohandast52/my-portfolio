# mohan-gpt

An AI-native interactive portfolio: instead of scrolling a résumé, a visitor
"talks to" **MohanGPT**, an agent that answers strictly from pre-authored
content. A one-click **classic résumé view** reuses the exact same components
laid out statically, for recruiters, print and crawlers.

Live at [`/mohangpt`](../../pages/mohangpt.tsx).

## There is no LLM

Deliberately. `lib/match.ts` lowercases the query, short-circuits greetings, then
scores every intent in `lib/intents.ts` by the summed length of the keywords it
matched — highest total wins, nothing matched routes to `fallback`. No model, no
API key, no runtime cost, and it can never fabricate an answer.

Everything goes through `getAnswer(query)`, so swapping in an LLM + RAG later
needs no UI change.

## Layout

```
src/lib/
  index.tsx            # root: shell, conversation state machine, empty state
  content.ts           # the ONLY source of copy — résumé facts, projects, contact
  intents.ts           # ~24 intents (answer + rich component + follow-up chips)
  match.ts             # the intent engine
  types.ts             # domain + message types
  tokens.ts            # Geist design tokens (scoped CSS custom properties) + keyframes
  icons.tsx            # inline Lucide glyphs
  styles.ts            # app-shell styled-components
  cards/               # the six rich components, reused by BOTH views
  Composer/            # auto-growing textarea, Enter sends / Shift+Enter newline
  Sidebar/             # expanded · collapsed · mobile drawer
  Thread/              # message list, streaming, skeleton, tour controls
  Classic/             # the classic résumé view
```

## Send pipeline

`user message → agent "thinking" → 620ms → stream +3 chars/16ms with a blinking
cursor → revealed → 520ms → rich component`. A shimmer skeleton bridges the last
gap so the card never flashes in as an empty box. `busy` blocks concurrent sends.

## Design tokens

Vercel Geist: Geist Sans + Geist Mono (loaded in [`_document.tsx`](../../pages/_document.tsx)),
the Geist neutral scale, dark by default with a persisted light-mode toggle, and
a single accent — Vercel blue `#0070F3`. Lucide icons only, no emoji.

The tokens are applied to the lib's root element rather than `<html>`, so they
stay scoped here and cannot leak into the rest of the site.

**One deliberate deviation from the spec's token values.** `--faint` failed WCAG
AA in both themes for the small text it carries (step indicator, disclaimer,
mono badges, the About location line): the spec's `#707070` measures 3.87:1 on
`--panel` in dark, and `#999999` only 2.84:1 on white in light. Both are nudged
to the closest AA-clean value — `#828282` and `#6f6f6f` — since the same brief
also asks for WCAG 2.1 AA. Every other token is exactly as specified.

## Accessibility

Audited with axe-core (`wcag2a`, `wcag2aa`, `wcag21a`, `wcag21aa`) across six
states — empty, conversation, classic/light, sidebar collapsed, and the mobile
drawer open and closed. **Zero violations.**

The mobile drawer is a real modal: it is `inert` while off-screen (otherwise its
twelve controls stay in the tab order behind the scrim), it carries
`role="dialog"` + `aria-modal`, opening it moves focus in and marks the main
column `inert` so Tab stays contained, and Escape closes it and returns focus to
the hamburger.

## Content

`content.ts` mirrors the facts in `components/Portfolio/data.ts`. They are
duplicated rather than imported on purpose: a `type:feature` lib may only depend
on `type:util` libs, so a lib cannot reach back into the app's `components/`.

Two things worth knowing before editing it:

- **The current engagement is a confidential contract.** Never name the client or
  its products — describe the scope generically, exactly as `data.ts` does.
- **No résumé PDF is published yet.** `CONTACT.resumeUrl` is `null`, so the
  résumé affordances fall back to the classic view instead of linking at a file
  that would 404. Drop a PDF in `public/` and set the field to enable the real
  download in both the sidebar and the ContactCard.
- **No real portrait yet.** `public/images/mohan.png` is the v1 site's
  placeholder graphic, so `AVATAR_SRC` is `null` and the AboutCard shows the
  design's Lucide placeholder. Point it at a real photo to turn it on.

## Known gap

The theme is restored from `localStorage` after mount, so a returning
light-mode visitor sees one dark frame before it flips. Removing that needs a
blocking inline script in `_document`, which would apply site-wide for a
single page — deliberately not done.
