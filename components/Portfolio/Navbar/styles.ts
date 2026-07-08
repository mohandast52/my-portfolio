import styled from 'styled-components';
import { COLOR, FONT } from '@my-portfolio/ui-theme';

export const Bar = styled.header<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: ${props => (props.$scrolled ? `${COLOR.INK}d9` : 'transparent')};
  backdrop-filter: ${props => (props.$scrolled ? 'blur(12px)' : 'none')};
  border-bottom: 1px solid
    ${props => (props.$scrolled ? COLOR.BORDER : 'transparent')};
  transition: background 0.3s ease, border-color 0.3s ease;
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  max-width: 1120px;
  margin: 0 auto;
  padding: 16px clamp(20px, 5vw, 44px);
`;

export const Logo = styled.a`
  font-family: ${FONT.MONO};
  font-size: 1.02rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: ${COLOR.TEXT};

  span {
    color: ${COLOR.VIOLET};
  }
`;

export const Links = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;

  a {
    position: relative;
    font-family: ${FONT.MONO};
    font-size: 0.86rem;
    color: ${COLOR.TEXT_MUTED};
    transition: color 0.2s ease;
  }

  a::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 1px;
    background: ${COLOR.VIOLET};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.25s ease;
  }

  a:hover {
    color: ${COLOR.TEXT};
  }

  a:hover::after {
    transform: scaleX(1);
  }

  @media (max-width: 680px) {
    display: none;
  }
`;

export const Cta = styled.a`
  font-family: ${FONT.MONO};
  font-size: 0.84rem;
  font-weight: 500;
  padding: 9px 18px;
  border: 1px solid ${COLOR.BORDER};
  border-radius: 999px;
  color: ${COLOR.TEXT};
  transition: border-color 0.2s ease, background 0.2s ease, color 0.2s ease;

  &:hover {
    border-color: ${COLOR.VIOLET};
    background: ${COLOR.VIOLET};
    color: ${COLOR.WHITE};
  }
`;
