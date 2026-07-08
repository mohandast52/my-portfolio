import styled from 'styled-components';
import { COLOR, FONT } from '@my-portfolio/ui-theme';

export const Timeline = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Entry = styled.article<{ $live?: boolean }>`
  position: relative;
  padding: 26px 28px;
  background: ${COLOR.SURFACE};
  border: 1px solid ${({ $live }) => ($live ? COLOR.VIOLET_DARK : COLOR.BORDER)};
  border-radius: 16px;

  @media (max-width: 620px) {
    padding: 22px 20px;
  }
`;

export const EntryHead = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 16px;
  margin-bottom: 14px;

  @media (max-width: 620px) {
    flex-direction: column;
    gap: 4px;
  }
`;

export const Role = styled.h3`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 4px;
  font-family: ${FONT.DISPLAY};
  font-size: 1.3rem;
  font-weight: 600;
  color: ${COLOR.TEXT};
`;

export const Now = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 2px 9px;
  border-radius: 999px;
  font-family: ${FONT.MONO};
  font-size: 0.62rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${COLOR.VIOLET_LIGHT};
  background: ${COLOR.VIOLET}22;
  border: 1px solid ${COLOR.VIOLET_DARK};
`;

export const Org = styled.p`
  margin: 0;
  font-size: 0.98rem;
  color: ${COLOR.TEXT_MUTED};
`;

export const Period = styled.span`
  flex-shrink: 0;
  font-family: ${FONT.MONO};
  font-size: 0.82rem;
  white-space: nowrap;
  color: ${COLOR.TEXT_FAINT};
`;

export const Detail = styled.p`
  margin: 0 0 16px;
  font-size: 1.02rem;
  line-height: 1.6;
  color: ${COLOR.TEXT};
`;

export const Points = styled.ul`
  margin: 0 0 20px;
  padding: 0;
  list-style: none;

  li {
    position: relative;
    padding-left: 22px;
    margin-bottom: 11px;
    font-size: 0.98rem;
    line-height: 1.6;
    color: ${COLOR.TEXT_MUTED};
  }

  li::before {
    content: '▹';
    position: absolute;
    left: 0;
    color: ${COLOR.VIOLET_LIGHT};
  }
`;

export const Tech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Chip = styled.span`
  padding: 5px 11px;
  border-radius: 999px;
  font-family: ${FONT.MONO};
  font-size: 0.74rem;
  color: ${COLOR.TEXT_MUTED};
  background: ${COLOR.SURFACE_2};
  border: 1px solid ${COLOR.BORDER};
`;
