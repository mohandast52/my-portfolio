import styled, { createGlobalStyle } from 'styled-components';
import { COLOR } from './Helpers';

export const GlobalStyle = createGlobalStyle`
  body {
    /* padding: 2rem; */
    overflow: hidden;
    height: 100vh;
    background-color: ${COLOR.BG_GREY} !important;
  }
`;

export const DashboardContainer = styled.div`
  position: relative;
  top: 2rem;
  width: calc(100vw - 10rem);
  height: calc(100vh - 4rem);
  max-width: 1140px;
  margin: 0 auto;
  border-radius: 2rem;
  color: ${COLOR.BLACK};
  background-color: #f3f6fd;

  * {
    font-family: "PT Sans", sans-serif !important;
  }
`;

export const Container = styled.div``;

export const Row = styled.div`
  display: flex;
`;
