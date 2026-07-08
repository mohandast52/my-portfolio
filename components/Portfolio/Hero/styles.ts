import styled, { keyframes } from 'styled-components';
import { COLOR, FONT } from '@my-portfolio/ui-theme';

const riseIn = keyframes`
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(14px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0%   { box-shadow: 0 0 0 0 ${COLOR.VIOLET}88; }
  70%  { box-shadow: 0 0 0 7px ${COLOR.VIOLET}00; }
  100% { box-shadow: 0 0 0 0 ${COLOR.VIOLET}00; }
`;

export const Wrap = styled.section`
  position: relative;
  z-index: 1;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: clamp(48px, 9vh, 96px) 0 clamp(56px, 9vh, 104px);
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.12fr 0.88fr;
  gap: clamp(36px, 6vw, 72px);
  align-items: center;
  /* match the shared Container so the hero lines up with every other section */
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 clamp(20px, 5vw, 44px);

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
    gap: 44px;
  }
`;

export const Intro = styled.div`
  animation: ${fadeIn} 0.8s ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const Headline = styled.h1`
  margin: 22px 0 0;
  font-family: ${FONT.DISPLAY};
  font-weight: 600;
  font-size: clamp(2.6rem, 7vw, 4.9rem);
  line-height: 1.02;
  letter-spacing: -0.03em;
  color: ${COLOR.TEXT};

  .line {
    display: block;
    overflow: hidden;
  }

  .line span {
    display: inline-block;
    animation: ${riseIn} 0.95s cubic-bezier(0.22, 1, 0.36, 1) both;
  }

  .line:nth-child(1) span { animation-delay: 0.12s; }
  .line:nth-child(2) span { animation-delay: 0.24s; }
  .line:nth-child(3) span { animation-delay: 0.36s; }

  em {
    font-style: normal;
    color: ${COLOR.VIOLET};
  }

  @media (prefers-reduced-motion: reduce) {
    .line span { animation: none; }
  }
`;

export const Blurb = styled.p`
  max-width: 48ch;
  margin: 26px 0 0;
  font-size: clamp(1rem, 1.4vw, 1.14rem);
  line-height: 1.68;
  color: ${COLOR.TEXT_MUTED};
`;

export const Stats = styled.dl`
  display: flex;
  flex-wrap: wrap;
  gap: 14px 30px;
  margin: 34px 0 0;

  div {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }

  dt {
    font-family: ${FONT.DISPLAY};
    font-weight: 600;
    font-size: 1.5rem;
    color: ${COLOR.TEXT};
  }

  dd {
    margin: 0;
    font-family: ${FONT.MONO};
    font-size: 0.72rem;
    letter-spacing: 0.04em;
    color: ${COLOR.TEXT_MUTED};
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 14px;
  margin: 36px 0 0;
`;

export const Primary = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: ${FONT.MONO};
  font-size: 0.9rem;
  font-weight: 500;
  padding: 13px 22px;
  border-radius: 999px;
  background: ${COLOR.VIOLET};
  color: ${COLOR.WHITE};
  transition: background 0.2s ease, transform 0.2s ease;

  svg { transition: transform 0.25s ease; }

  &:hover {
    background: ${COLOR.VIOLET_DARK};
  }

  &:hover svg {
    transform: translateY(3px);
  }
`;

export const Ghost = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: ${FONT.MONO};
  font-size: 0.9rem;
  padding: 13px 20px;
  border-radius: 999px;
  border: 1px solid ${COLOR.BORDER};
  color: ${COLOR.TEXT};
  transition: border-color 0.2s ease, color 0.2s ease;

  &:hover {
    border-color: ${COLOR.VIOLET_LIGHT};
    color: ${COLOR.VIOLET_LIGHT};
  }
`;

export const SocialRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 30px 0 0;

  a {
    display: grid;
    place-items: center;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    border: 1px solid ${COLOR.BORDER};
    color: ${COLOR.TEXT_MUTED};
    font-size: 1.05rem;
    transition: color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
  }

  a:hover {
    color: ${COLOR.TEXT};
    border-color: ${COLOR.VIOLET};
    transform: translateY(-3px);
  }
`;

/* ---- right column: identity photo + a TS "spec sheet" card ---- */

export const Aside = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
  animation: ${fadeIn} 0.9s ease 0.2s both;

  @media (max-width: 920px) {
    order: -1;
    align-items: flex-start;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const Avatar = styled.div`
  position: relative;
  width: 118px;
  height: 118px;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid ${COLOR.BORDER};
    padding: 4px;
    background: ${COLOR.SURFACE};
  }

  /* the "available" ping */
  &::after {
    content: '';
    position: absolute;
    right: 8px;
    bottom: 8px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: ${COLOR.VIOLET};
    border: 3px solid ${COLOR.INK};
    animation: ${pulse} 2.4s ease-out infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    &::after { animation: none; }
  }
`;

export const Card = styled.div`
  width: 100%;
  max-width: 380px;
  margin: 0;
  background: ${COLOR.SURFACE};
  border: 1px solid ${COLOR.BORDER};
  border-radius: 14px;
  overflow: hidden;
  font-family: ${FONT.MONO};
  box-shadow: 0 24px 60px -30px #000000cc;

  .chrome {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 15px;
    border-bottom: 1px solid ${COLOR.BORDER};
    background: ${COLOR.INK_2};
  }

  .chrome i {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: ${COLOR.BORDER};
  }

  .chrome i:first-child { background: ${COLOR.VIOLET}; }

  .chrome b {
    margin-left: 8px;
    font-weight: 400;
    font-size: 0.76rem;
    color: ${COLOR.TEXT_FAINT};
  }

  .body {
    padding: 18px 20px 20px;
    font-size: 0.84rem;
    line-height: 1.85;
    white-space: pre;
    overflow-x: auto;
  }

  .k { color: ${COLOR.TEXT_MUTED}; }
  .s { color: ${COLOR.VIOLET_LIGHT}; }
  .p { color: ${COLOR.TEXT_FAINT}; }
  .t { color: ${COLOR.TEXT}; }

  .live {
    display: inline-block;
    width: 8px;
    height: 8px;
    margin-left: 8px;
    border-radius: 50%;
    background: ${COLOR.VIOLET};
    animation: ${pulse} 2.4s ease-out infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    .live { animation: none; }
  }
`;
