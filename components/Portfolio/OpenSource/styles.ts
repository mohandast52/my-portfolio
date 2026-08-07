import styled from 'styled-components';
import { COLOR, FONT } from '@my-portfolio/ui-theme';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 860px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 540px) {
    grid-template-columns: 1fr;
  }
`;

export const RepoCard = styled.a`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px 22px;
  border-radius: 14px;
  background: ${COLOR.SURFACE};
  border: 1px solid ${COLOR.BORDER};
  transition: transform 0.25s ease, border-color 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: ${COLOR.VIOLET};
  }
`;

export const RepoName = styled.h3`
  display: flex;
  align-items: center;
  gap: 9px;
  margin: 0 0 10px;
  font-family: ${FONT.DISPLAY};
  font-size: 1.08rem;
  font-weight: 600;
  color: ${COLOR.TEXT};
  word-break: break-word;

  svg {
    flex-shrink: 0;
    color: ${COLOR.TEXT_MUTED};
  }
`;

export const RepoDesc = styled.p`
  flex: 1;
  margin: 0 0 16px;
  font-size: 0.9rem;
  line-height: 1.55;
  color: ${COLOR.TEXT_MUTED};
`;

export const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  font-family: ${FONT.MONO};
  font-size: 0.78rem;
  color: ${COLOR.TEXT_FAINT};

  .lang,
  .stars {
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  svg {
    color: ${COLOR.VIOLET_LIGHT};
  }
`;

export const LangDot = styled.span<{ $color: string }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
`;

export const AllLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  margin-top: 32px;
  font-family: ${FONT.MONO};
  font-size: 0.88rem;
  color: ${COLOR.VIOLET_LIGHT};
  border-bottom: 1px solid ${COLOR.VIOLET_DARK};
  padding-bottom: 3px;
  transition: gap 0.2s ease;

  &:hover {
    gap: 14px;
  }
`;

export const Empty = styled.p`
  font-size: 1.02rem;
  color: ${COLOR.TEXT_MUTED};

  a {
    color: ${COLOR.VIOLET_LIGHT};
    border-bottom: 1px solid ${COLOR.VIOLET_DARK};
  }
`;
