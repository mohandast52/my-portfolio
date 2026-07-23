import styled from 'styled-components';
import { COLOR } from '@my-portfolio/ui-theme';

export const Wrap = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: clip;
  padding: clamp(110px, 16vh, 190px) clamp(20px, 5vw, 44px)
    clamp(28px, 5vh, 44px);
`;

// A soft violet glow bleeding from the top, echoing the v1 landing atmosphere.
export const Glow = styled.div`
  position: absolute;
  top: -14%;
  left: 50%;
  width: min(1100px, 130vw);
  height: 620px;
  transform: translateX(-50%);
  background: radial-gradient(
    ellipse at center,
    ${COLOR.VIOLET}22 0%,
    transparent 68%
  );
  pointer-events: none;
  z-index: 0;
`;

export const Stack = styled.div`
  position: relative;
  z-index: 1;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: clamp(18px, 3vh, 40px);
`;

// The magnetic portrait medallion. mohan.png is a 420×420 square headshot, so
// it's framed as a rounded tile rather than a cut-out figure.
export const Portrait = styled.div`
  width: clamp(170px, 26vw, 300px);

  img {
    width: 100%;
    height: auto;
    aspect-ratio: 1;
    object-fit: cover;
    display: block;
    border-radius: 36px;
    border: 1px solid ${COLOR.BORDER};
    background: ${COLOR.SURFACE};
    box-shadow: 0 30px 70px rgba(0, 0, 0, 0.55);
  }
`;

export const Heading = styled.div`
  width: 100%;
  overflow: hidden;

  h1 {
    width: 100%;
    text-align: center;
    white-space: nowrap;
    font-size: clamp(3rem, 15vw, 17rem);
  }
`;

export const Bottom = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
  margin-top: clamp(20px, 4vh, 44px);
`;

export const Subline = styled.p`
  margin: 0;
  max-width: 260px;
  color: #d7e2ea;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  line-height: 1.35;
  font-size: clamp(0.75rem, 1.4vw, 1.5rem);
`;
