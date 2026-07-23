import styled from 'styled-components';
import { COLOR, FONT } from '@my-portfolio/ui-theme';

export const Wrap = styled.section`
  position: relative;
  z-index: 1;
  background: ${COLOR.INK};
  padding: clamp(80px, 12vh, 140px) clamp(20px, 5vw, 44px);
`;

export const Head = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-bottom: clamp(48px, 8vh, 96px);
`;

export const List = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

export const Row = styled.div`
  display: flex;
  align-items: baseline;
  gap: clamp(20px, 4vw, 56px);
  padding: clamp(28px, 4vh, 48px) 0;
  border-bottom: 1px solid rgba(215, 226, 234, 0.14);

  &:first-child {
    border-top: 1px solid rgba(215, 226, 234, 0.14);
  }

  .no {
    flex-shrink: 0;
    font-family: ${FONT.DISPLAY};
    font-weight: 700;
    line-height: 0.9;
    font-size: clamp(2.4rem, 8vw, 120px);
    color: ${COLOR.TEXT_FAINT};
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .name {
    font-family: ${FONT.DISPLAY};
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: -0.01em;
    line-height: 1.05;
    font-size: clamp(1.2rem, 2.4vw, 2.1rem);
    color: ${COLOR.TEXT};
  }

  .detail {
    max-width: 640px;
    font-weight: 300;
    line-height: 1.6;
    font-size: clamp(0.9rem, 1.6vw, 1.2rem);
    color: ${COLOR.TEXT_MUTED};
  }
`;
