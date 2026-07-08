import styled from 'styled-components';
import { COLOR, FONT } from '@my-portfolio/ui-theme';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.55fr 1fr;
  gap: clamp(32px, 5vw, 64px);
  align-items: start;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

export const Prose = styled.div`
  p {
    margin: 0 0 20px;
    font-size: 1.1rem;
    line-height: 1.7;
    color: ${COLOR.TEXT_MUTED};
  }

  p:first-child {
    font-size: 1.25rem;
    color: ${COLOR.TEXT};
  }
`;

export const Aside = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InfoCard = styled.div`
  padding: 22px 24px;
  background: ${COLOR.SURFACE};
  border: 1px solid ${COLOR.BORDER};
  border-radius: 14px;

  h4 {
    margin: 0 0 14px;
    font-family: ${FONT.MONO};
    font-size: 0.72rem;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: ${COLOR.VIOLET_LIGHT};
  }

  p {
    margin: 0 0 4px;
    line-height: 1.5;
    color: ${COLOR.TEXT_MUTED};
  }

  p.strong {
    font-weight: 600;
    color: ${COLOR.TEXT};
  }

  p.muted {
    font-size: 0.88rem;
    color: ${COLOR.TEXT_FAINT};
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    position: relative;
    padding-left: 18px;
    margin-bottom: 10px;
    font-size: 0.95rem;
    line-height: 1.45;
    color: ${COLOR.TEXT_MUTED};
  }

  li:last-child {
    margin-bottom: 0;
  }

  li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 8px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${COLOR.VIOLET};
  }
`;
