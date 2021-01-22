import styled, { createGlobalStyle } from 'styled-components';
import { COLOR } from './Helpers';

export const DashboardContainer = styled.div`
  color: ${COLOR.BLACK};
  overflow: hidden;
  height: 100vh;
  background-color: #f3f6fd;
  * {
    font-family: "PT Sans", sans-serif !important;
  }
`;

export const Container = styled.div``;

export const GlobalStyle = createGlobalStyle`
  body {
    /* overflow: hidden; */
    /* height: 100vh; */
    /* background-color: #f3f6fd; */
  }
`;
