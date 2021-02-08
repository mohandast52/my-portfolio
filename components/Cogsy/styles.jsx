import styled from 'styled-components';
// import { COLORS, BOX_SHADOW } from './Helpers/theme';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 5rem;

  .just-for-spacing {
    flex-basis: 50%;
    margin-bottom: 6rem;
  }

  /* re-usable styles (to be added in global styles) */
  /* -------- font size-------- */
  .f-l {
    font-size: 24px;
    line-height: 32px;
  }

  .f-m {
    font-size: 16px;
    line-height: 24px;
  }

  .f-s {
    font-size: 14px;
    line-height: 22px;
  }

  /* overriding global-styles! */
  font-family: "Helvetica Neue" !important;
  * {
    box-sizing: border-box;
  }
`;

export const KContainer = styled.div`
  margin: auto;
  width: 340px;
`;
