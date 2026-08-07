import styled from 'styled-components';
import { COLOR, FONT } from '@my-portfolio/ui-theme';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 820px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

export const Group = styled.div`
  height: 100%;
  padding: 22px 24px;
  background: ${COLOR.SURFACE};
  border: 1px solid ${COLOR.BORDER};
  border-radius: 14px;
  transition: border-color 0.25s ease, transform 0.25s ease;

  &:hover {
    border-color: ${COLOR.VIOLET_DARK};
    transform: translateY(-3px);
  }
`;

export const GroupHead = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;

  .label {
    font-family: ${FONT.MONO};
    font-size: 0.82rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${COLOR.VIOLET_LIGHT};
  }
`;

export const Growing = styled.span`
  padding: 2px 8px;
  border-radius: 999px;
  font-family: ${FONT.MONO};
  font-size: 0.6rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${COLOR.INK};
  background: ${COLOR.VIOLET_LIGHT};
`;

export const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Item = styled.span`
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 0.88rem;
  color: ${COLOR.TEXT};
  background: ${COLOR.SURFACE_2};
  border: 1px solid ${COLOR.BORDER};
`;
