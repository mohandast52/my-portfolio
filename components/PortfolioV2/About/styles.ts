import styled from 'styled-components';

export const Wrap = styled.section`
  position: relative;
  z-index: 1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: clamp(40px, 7vh, 72px);
  padding: clamp(80px, 12vh, 140px) clamp(20px, 5vw, 44px);
`;

export const Head = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  text-align: center;
`;

export const Foot = styled.div`
  display: flex;
  justify-content: center;
`;
