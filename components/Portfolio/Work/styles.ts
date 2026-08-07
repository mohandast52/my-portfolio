import styled from 'styled-components';
import Link from 'next/link';
import { COLOR, FONT } from '@my-portfolio/ui-theme';

/* ---- featured showcase: sticky cards that stack as you scroll past ---- */

export const Showcase = styled.div`
  margin-bottom: clamp(40px, 7vh, 76px);
`;

// Shorter than a viewport so the next card is already entering as this one
// leaves — that overlap is what reads as "stacking".
export const Slot = styled.div`
  height: 74vh;

  /* Without the scroll-driven scale there is nothing to stack, so fall back to
     a plain stacked list rather than pinning cards on top of each other. */
  @media (prefers-reduced-motion: reduce) {
    height: auto;
    margin-bottom: 18px;
  }

  @media (max-width: 640px) {
    height: auto;
    margin-bottom: 18px;
  }
`;

export const BigCard = styled(Link)`
  position: sticky;
  display: flex;
  flex-direction: column;
  transform-origin: top center;
  will-change: transform;
  padding: clamp(24px, 3.4vw, 44px);
  border-radius: 20px;
  background: ${COLOR.SURFACE};
  border: 1px solid ${COLOR.VIOLET_DARK};
  box-shadow: 0 0 0 1px ${COLOR.VIOLET_DARK}, 0 26px 60px -30px ${COLOR.VIOLET};
  transition: border-color 0.25s ease;

  &:hover {
    border-color: ${COLOR.VIOLET};
  }

  &:hover .go-arrow-wrap svg {
    transform: translateX(4px);
  }

  .no {
    font-family: ${FONT.DISPLAY};
    font-weight: 600;
    font-size: clamp(1.6rem, 4vw, 2.6rem);
    line-height: 1;
    color: ${COLOR.TEXT_FAINT};
  }

  .head {
    display: flex;
    align-items: baseline;
    gap: 16px;
    margin-bottom: 14px;
  }

  .big-name {
    margin: 0;
    font-family: ${FONT.DISPLAY};
    font-weight: 600;
    font-size: clamp(1.7rem, 4.4vw, 2.9rem);
    line-height: 1.05;
    color: ${COLOR.TEXT};
  }

  .big-tagline {
    max-width: 54ch;
    margin: 0 0 20px;
    font-size: clamp(1rem, 1.5vw, 1.18rem);
    line-height: 1.6;
    color: ${COLOR.TEXT_MUTED};
  }

  @media (prefers-reduced-motion: reduce) {
    position: static;
    transform: none !important;
  }

  @media (max-width: 640px) {
    position: static;
    transform: none !important;
  }
`;

export const MoreHead = styled.div`
  margin-bottom: 18px;
`;

export const Filters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 32px;
`;

export const FilterButton = styled.button<{ $active?: boolean }>`
  padding: 7px 16px;
  border-radius: 999px;
  font-family: ${FONT.MONO};
  font-size: 0.82rem;
  cursor: pointer;
  transition: all 0.2s ease;
  color: ${({ $active }) => ($active ? COLOR.WHITE : COLOR.TEXT_MUTED)};
  background: ${({ $active }) => ($active ? COLOR.VIOLET_DARK : 'transparent')};
  border: 1px solid ${({ $active }) => ($active ? COLOR.VIOLET : COLOR.BORDER)};

  &:hover {
    border-color: ${COLOR.VIOLET};
    color: ${COLOR.TEXT};
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;

  @media (max-width: 860px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 540px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled(Link)<{ $featured?: boolean }>`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 22px;
  border-radius: 16px;
  background: ${COLOR.SURFACE};
  border: 1px solid ${({ $featured }) => ($featured ? COLOR.VIOLET_DARK : COLOR.BORDER)};
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;

  ${({ $featured }) => $featured
    && `box-shadow: 0 0 0 1px ${COLOR.VIOLET_DARK}, 0 18px 40px -24px ${COLOR.VIOLET};`}

  &:hover {
    transform: translateY(-5px);
    border-color: ${COLOR.VIOLET};
  }

  &:hover .go-arrow-wrap svg {
    transform: translateX(4px);
  }
`;

export const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;

  .kind {
    font-family: ${FONT.MONO};
    font-size: 0.68rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${COLOR.TEXT_FAINT};
  }

  .star {
    font-family: ${FONT.MONO};
    font-size: 0.62rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 2px 8px;
    border-radius: 999px;
    color: ${COLOR.VIOLET_LIGHT};
    background: ${COLOR.VIOLET}22;
  }
`;

export const Name = styled.h3`
  margin: 0 0 8px;
  font-family: ${FONT.DISPLAY};
  font-size: 1.35rem;
  font-weight: 600;
  color: ${COLOR.TEXT};
`;

export const Tagline = styled.p`
  flex: 1;
  margin: 0 0 16px;
  font-size: 0.94rem;
  line-height: 1.55;
  color: ${COLOR.TEXT_MUTED};
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 18px;
`;

export const Tag = styled.span`
  padding: 3px 9px;
  border-radius: 6px;
  font-size: 0.72rem;
  color: ${COLOR.TEXT_MUTED};
  background: ${COLOR.SURFACE_2};
  border: 1px solid ${COLOR.BORDER};
`;

export const Go = styled.span.attrs({ className: 'go-arrow-wrap' })`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: ${FONT.MONO};
  font-size: 0.82rem;
  color: ${COLOR.VIOLET_LIGHT};

  svg {
    transition: transform 0.2s ease;
  }
`;
