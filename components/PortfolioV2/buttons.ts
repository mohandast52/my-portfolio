import styled from 'styled-components';
import { COLOR, FONT } from '@my-portfolio/ui-theme';

// The template's signature gradient pill. Kept verbatim (gradient + inset
// glow + inset white outline) because it's the one loud accent on the page.
// Rendered as an <a> (links to a mailto: / #contact); label is set by the caller.
export const ContactButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${FONT.MONO};
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: ${COLOR.WHITE};
  border-radius: 999px;
  padding: 14px clamp(30px, 4vw, 48px);
  font-size: clamp(0.72rem, 1.1vw, 1rem);
  background: linear-gradient(
    123deg,
    #18011f 7%,
    #b600a8 37%,
    #7621b0 72%,
    #be4c00 100%
  );
  box-shadow:
    0 4px 4px rgba(181, 1, 167, 0.25),
    4px 4px 12px #7721b1 inset;
  outline: 2px solid ${COLOR.WHITE};
  outline-offset: -3px;
  transition: transform 0.2s ease, filter 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    filter: brightness(1.08);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover { transform: none; }
  }
`;

// Ghost/outline pill for the "Live project" links inside the project cards.
export const LiveProjectButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${FONT.MONO};
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: #d7e2ea;
  border: 2px solid #d7e2ea;
  border-radius: 999px;
  padding: 11px clamp(22px, 2.4vw, 34px);
  font-size: clamp(0.72rem, 1vw, 0.9rem);
  white-space: nowrap;
  transition: background 0.2s ease, color 0.2s ease;

  &:hover {
    background: rgba(215, 226, 234, 0.1);
  }
`;
