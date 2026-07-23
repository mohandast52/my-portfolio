import styled from 'styled-components';
import { COLOR, FONT } from '@my-portfolio/ui-theme';

// Pulled up over the previous section with rounded top corners, matching the
// template's dark projects slab.
export const Wrap = styled.section`
  position: relative;
  z-index: 10;
  margin-top: clamp(-56px, -6vh, -40px);
  background: ${COLOR.INK};
  border-top-left-radius: clamp(40px, 5vw, 60px);
  border-top-right-radius: clamp(40px, 5vw, 60px);
  padding: clamp(72px, 11vh, 130px) clamp(20px, 5vw, 44px) clamp(48px, 8vh, 96px);
`;

export const Head = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-bottom: clamp(24px, 5vh, 56px);
`;

export const Stack = styled.div`
  max-width: 1120px;
  margin: 0 auto;
`;

// Container (not sticky). Shorter than a viewport so the next card is already
// entering as this one leaves — that overlap is what reads as "stacking".
export const Slot = styled.div`
  height: 85vh;
`;

export const Card = styled.article`
  position: sticky;
  transform-origin: top center;
  will-change: transform;
  border: 2px solid #d7e2ea;
  background: ${COLOR.INK};
  border-radius: clamp(32px, 4vw, 56px);
  padding: clamp(18px, 2.6vw, 34px);
  box-shadow: 0 -8px 40px rgba(0, 0, 0, 0.5);

  @media (prefers-reduced-motion: reduce) {
    transform: none !important;
  }
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px 24px;
  margin-bottom: clamp(18px, 2.6vw, 30px);

  .no {
    font-family: ${FONT.DISPLAY};
    font-weight: 700;
    line-height: 0.85;
    font-size: clamp(2.6rem, 8vw, 120px);
    color: ${COLOR.TEXT_FAINT};
  }

  .meta {
    flex: 1;
    min-width: 200px;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .kind {
    font-family: ${FONT.MONO};
    font-size: 0.74rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${COLOR.VIOLET_LIGHT};
  }

  .name {
    font-family: ${FONT.DISPLAY};
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: -0.01em;
    line-height: 1;
    font-size: clamp(1.5rem, 3.4vw, 2.6rem);
    color: ${COLOR.TEXT};
  }

  .tagline {
    max-width: 46ch;
    margin-top: 4px;
    font-weight: 300;
    line-height: 1.5;
    font-size: clamp(0.85rem, 1.3vw, 1rem);
    color: ${COLOR.TEXT_MUTED};
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 40% 1fr;
  gap: clamp(10px, 1.4vw, 16px);

  .col-left {
    display: flex;
    flex-direction: column;
    gap: clamp(10px, 1.4vw, 16px);
  }

  .shot {
    border-radius: clamp(28px, 3.4vw, 48px);
    border: 1px solid ${COLOR.BORDER};
  }

  .short {
    height: clamp(130px, 16vw, 230px);
  }

  .tall {
    height: clamp(160px, 22vw, 340px);
  }

  .full {
    height: 100%;
    min-height: clamp(300px, 40vw, 586px);
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

export const Foot = styled.div`
  display: flex;
  justify-content: center;
  margin-top: clamp(32px, 6vh, 64px);

  a {
    font-family: ${FONT.MONO};
    font-size: 0.86rem;
    letter-spacing: 0.04em;
    color: ${COLOR.TEXT_MUTED};
    transition: color 0.2s ease;
  }

  a:hover {
    color: ${COLOR.VIOLET_LIGHT};
  }
`;
