import { createGlobalStyle } from 'styled-components';
import { COLOR } from 'util/theme';

// const GlobalStyles = styled.div`
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: ${COLOR.LIGHT_GREY};
  }
`;

export default GlobalStyle;
