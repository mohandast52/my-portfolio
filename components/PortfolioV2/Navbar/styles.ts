import styled from 'styled-components';
import { COLOR, FONT } from '@my-portfolio/ui-theme';

export const Bar = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
`;

export const Inner = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: clamp(20px, 3vw, 32px) clamp(20px, 5vw, 44px) 0;

  a {
    color: #d7e2ea;
    font-family: ${FONT.BODY};
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: clamp(0.8rem, 1.4vw, 1.4rem);
    transition: opacity 0.2s ease;
  }

  a:hover {
    opacity: 0.7;
  }

  .brand {
    font-family: ${FONT.MONO};
    letter-spacing: -0.01em;
    text-transform: none;
    color: ${COLOR.TEXT};

    span {
      color: ${COLOR.VIOLET};
    }
  }

  .links {
    display: flex;
    align-items: center;
    gap: clamp(20px, 3vw, 44px);
  }

  @media (max-width: 620px) {
    .links a:not(.contact) {
      display: none;
    }
  }
`;
