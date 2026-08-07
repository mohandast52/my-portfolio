import styled from 'styled-components';
import { COLOR, FONT } from '@my-portfolio/ui-theme';

export const Big = styled.h2`
  margin: 16px 0 0;
  font-family: ${FONT.DISPLAY};
  font-size: clamp(2.6rem, 8vw, 5rem);
  font-weight: 700;
  line-height: 1.02;
  letter-spacing: -0.03em;
  color: ${COLOR.TEXT};

  em {
    font-style: normal;
    color: ${COLOR.VIOLET_LIGHT};
  }
`;

export const Sub = styled.p`
  max-width: 40ch;
  margin: 22px 0 0;
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${COLOR.TEXT_MUTED};
`;

export const EmailButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  margin-top: 36px;
  padding: 16px 26px;
  border-radius: 999px;
  font-family: ${FONT.MONO};
  font-size: 1.02rem;
  color: ${COLOR.WHITE};
  background: ${COLOR.VIOLET_DARK};
  border: 1px solid ${COLOR.VIOLET};
  transition: transform 0.2s ease, background 0.2s ease;

  svg {
    transition: transform 0.2s ease;
  }

  &:hover {
    background: ${COLOR.VIOLET};
    transform: translateY(-2px);
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;

export const Socials = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 44px;
`;

export const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 11px 18px;
  border-radius: 12px;
  font-size: 0.92rem;
  color: ${COLOR.TEXT_MUTED};
  background: ${COLOR.SURFACE};
  border: 1px solid ${COLOR.BORDER};
  transition: color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;

  svg {
    font-size: 1.05rem;
  }

  &:hover {
    color: ${COLOR.TEXT};
    border-color: ${COLOR.VIOLET};
    transform: translateY(-2px);
  }
`;

export const Foot = styled.footer`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-top: 72px;
  padding-top: 24px;
  border-top: 1px solid ${COLOR.BORDER};
  font-family: ${FONT.MONO};
  font-size: 0.82rem;
  color: ${COLOR.TEXT_FAINT};
`;
