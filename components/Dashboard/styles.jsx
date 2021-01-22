import styled, { createGlobalStyle } from 'styled-components';
import { COLOR } from './Helpers';

export const GlobalStyle = createGlobalStyle`
  body {
    /* padding: 2rem; */
    /* overflow: hidden; */
    height: 100vh;
    background-color: ${COLOR.BG_GREY} !important;
  }
`;

export const DashboardContainer = styled.div`
  position: relative;
  top: 2rem;
  margin: 0 auto;
  width: calc(100vw - 4rem);
  height: calc(100vh - 4rem);
  /* display: flex; */
  color: ${COLOR.BLACK};
  overflow: hidden;
  background-color: #f3f6fd;
  border-radius: 2rem;
  max-width: 1400px;

  * {
    font-family: "PT Sans", sans-serif !important;
  }
`;

export const Container = styled.div``;

export const Row = styled.div`
  display: flex;
`;
