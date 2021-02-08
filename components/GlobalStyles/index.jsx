import { createGlobalStyle } from 'styled-components';
import { COLOR } from 'util/theme';

// const GlobalStyles = styled.div`
const GlobalStyle = createGlobalStyle`
  body,
  html {
    /* visibility: hidden; */
    /* user-select: none; */
    background: ${COLOR.WHITE};
    overscroll-behavior: none;
    margin: 0;
    font-family: 'Josefin Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

`;

export default GlobalStyle;
