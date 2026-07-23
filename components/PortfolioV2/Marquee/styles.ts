import styled from 'styled-components';
import { COLOR, FONT } from '@my-portfolio/ui-theme';

export const Wrap = styled.section`
  position: relative;
  z-index: 1;
  background: ${COLOR.INK};
  padding: clamp(96px, 16vh, 160px) 0 clamp(40px, 6vh, 64px);
  overflow: hidden;
`;

export const Rows = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Track = styled.div`
  display: flex;
  gap: 12px;
  width: max-content;
  will-change: transform;

  @media (prefers-reduced-motion: reduce) {
    transform: none !important;
  }
`;

// Each tile is an app-preview card standing in for a screenshot: a browser
// chrome bar + the project name over a per-project gradient. Drop a real
// screenshot in later (public/images/work/<slug>.webp) and render it here.
export const Tile = styled.a`
  position: relative;
  flex-shrink: 0;
  width: 420px;
  height: 270px;
  max-width: 78vw;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid ${COLOR.BORDER};
  transition: transform 0.3s ease;

  .chrome {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 11px 14px;
    background: rgba(0, 0, 0, 0.28);
  }

  .chrome i {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.25);
  }

  .chrome i:first-child {
    background: ${COLOR.VIOLET};
  }

  .chrome b {
    margin-left: 6px;
    font-family: ${FONT.MONO};
    font-weight: 400;
    font-size: 0.72rem;
    color: rgba(255, 255, 255, 0.6);
  }

  .body {
    position: absolute;
    inset: 42px 0 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 22px;
  }

  .name {
    font-family: ${FONT.DISPLAY};
    font-weight: 700;
    font-size: 1.9rem;
    letter-spacing: -0.02em;
    color: ${COLOR.TEXT};
  }

  .kind {
    margin-top: 6px;
    font-family: ${FONT.MONO};
    font-size: 0.72rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${COLOR.VIOLET_LIGHT};
  }

  &:hover {
    transform: translateY(-4px);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;
