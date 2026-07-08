import styled from 'styled-components';
import { COLOR, FONT } from '@my-portfolio/ui-theme';

// Full-bleed dark ground for the landing page. GlobalStyles paints the <body>
// white for every mini-app, so the portfolio owns its own dark background here
// rather than changing the global — the other pages must stay light.
export const Page = styled.main`
  position: relative;
  min-height: 100vh;
  background: ${COLOR.INK};
  color: ${COLOR.TEXT};
  font-family: ${FONT.BODY};
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;

  /* One restrained atmosphere: a soft violet glow bleeding from the top. */
  &::before {
    content: '';
    position: absolute;
    top: -12%;
    left: 50%;
    width: min(1100px, 120vw);
    height: 620px;
    transform: translateX(-50%);
    background: radial-gradient(
      ellipse at center,
      ${COLOR.VIOLET}22 0%,
      transparent 68%
    );
    pointer-events: none;
    z-index: 0;
  }

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
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 clamp(20px, 5vw, 44px);
`;

export const Section = styled.section`
  position: relative;
  padding: clamp(72px, 12vh, 128px) 0;
  scroll-margin-top: 84px;
`;

// Mono kicker: `// about`, `// selected work` — the recurring structural label
// that ties the whole page to the code/craft theme.
export const Eyebrow = styled.span`
  display: inline-block;
  font-family: ${FONT.MONO};
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  color: ${COLOR.VIOLET_LIGHT};

  &::before {
    content: '// ';
    color: ${COLOR.TEXT_FAINT};
  }
`;

export const SectionTitle = styled.h2`
  margin: 14px 0 0;
  font-family: ${FONT.DISPLAY};
  font-weight: 600;
  font-size: clamp(1.9rem, 4vw, 2.9rem);
  line-height: 1.06;
  letter-spacing: -0.02em;
  color: ${COLOR.TEXT};
`;

export const SectionNote = styled.p`
  max-width: 46ch;
  margin: 16px 0 0;
  font-size: 1.02rem;
  line-height: 1.65;
  color: ${COLOR.TEXT_MUTED};
`;

export const SectionHead = styled.header`
  margin-bottom: clamp(36px, 6vw, 60px);
`;
