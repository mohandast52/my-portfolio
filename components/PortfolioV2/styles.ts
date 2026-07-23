import styled from 'styled-components';
import { COLOR, FONT } from '@my-portfolio/ui-theme';

// Full-bleed dark ground for the v2 landing page. GlobalStyles paints <body>
// white for every mini-app, so — like the v1 Portfolio — this page owns its own
// dark background here rather than touching the global (the other pages must
// stay light). `overflow-x: clip` contains the marquee + magnetic transforms.
export const Page = styled.main`
  position: relative;
  min-height: 100vh;
  background: ${COLOR.INK};
  color: ${COLOR.TEXT};
  font-family: ${FONT.BODY};
  overflow-x: clip;
  -webkit-font-smoothing: antialiased;

  a {
    color: inherit;
    text-decoration: none;
  }

  ::selection {
    background: ${COLOR.VIOLET};
    color: ${COLOR.WHITE};
  }

  :focus-visible {
    outline: 2px solid ${COLOR.VIOLET_LIGHT};
    outline-offset: 3px;
    border-radius: 4px;
  }
`;

export const Container = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 clamp(20px, 5vw, 44px);
`;

// The giant cool-grey→ice gradient heading — the template's signature look,
// kept because it reads premium on the dark ground and harmonises with the
// TEXT/muted tokens. Space Grotesk is the display face (heaviest weight 700).
export const HeroHeading = styled.h1`
  margin: 0;
  font-family: ${FONT.DISPLAY};
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -0.03em;
  line-height: 0.92;
  background: linear-gradient(180deg, #646973 0%, #bbccd7 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
`;

// Section-level display heading (About / Capabilities / Projects) — same
// gradient treatment, sized down from the hero.
export const DisplayTitle = styled.h2`
  margin: 0;
  font-family: ${FONT.DISPLAY};
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  line-height: 0.95;
  font-size: clamp(3rem, 12vw, 160px);
  text-align: center;
  background: linear-gradient(180deg, #646973 0%, #bbccd7 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
`;

// The recurring mono kicker (`// about`, `// capabilities`) that ties the page
// to the code/craft theme — reused from the v1 vocabulary.
export const Eyebrow = styled.span`
  display: inline-block;
  font-family: ${FONT.MONO};
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${COLOR.VIOLET_LIGHT};

  &::before {
    content: '// ';
    color: ${COLOR.TEXT_FAINT};
  }
`;
