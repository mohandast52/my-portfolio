import styled from 'styled-components';
import { COLOR } from 'util/theme';

export const EC = styled.div``;

export const Container = styled.div`
  .container {
    /* width: 1560px; */
    /* min-width: 1560px; */
    margin: 0 auto;
    height: 100%;

    /* @include media("<=1560px") {
      width: 1280px;
      min-width: 1280px;
    }

    @include media("<=desktop") {
      width: 1080px;
      min-width: 1080px;
    }

    @include media("<=1080px") {
      width: 100%;
      min-width: 100%;
    } */

    .row {
      display: flex;
      height: 100%;
      padding: 0 32px;

      /* @include media("<=phone") {
        padding: 0 16px;
      } */
    }

    .v-center {
      align-items: center;
    }

    .space-between {
      justify-content: space-between;
    }
  }

  .container-fluid {
    width: 100%;
    height: 100%;

    .row {
      display: flex;
      height: 100%;
    }
  }

  /* --------- overlay ----------- */
  .intro-overlay {
    .top {
      z-index: 8;
      position: absolute;
      height: 50vh;
      width: 100%;

      .overlay-top {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 33.33vw;
        height: 100%;
        background-color: ${COLOR.BLACK};

        /* @include media("<=tablet") {
          width: 100vw;
        } */

        &:nth-child(2) {
          left: 33.33%;

          /* @include media("<=tablet") {
            display: none;
          } */
        }

        &:nth-child(3) {
          left: 66.66%;

          /* @include media("<=tablet") {
            display: none;
          } */
        }
      }
    }

    .bottom {
      z-index: 8;
      position: absolute;
      height: 50vh;
      width: 100%;
      bottom: 0;

      .overlay-bottom {
        position: absolute;
        bottom: 0;
        right: 66.66%;
        width: 33.33vw;
        height: 100%;
        background-color: ${COLOR.BLACK};

        /* @include media("<=tablet") {
          right: 0;
          width: 100vw;
        } */

        &:nth-child(2) {
          right: 33.33%;

          /* @include media("<=tablet") {
            width: 100vw;
            top: 100%;
            right: 0;
          } */
        }

        &:nth-child(3) {
          right: 0;

          /* @include media("<=tablet") {
            width: 100vw;
            top: 200%;
            right: 0;
          } */
        }
      }
    }
  }

  /* --------- App ----------- */
  .App {
    z-index: 2;
    transform: translateY(0);
    position: relative;
  }

  .page {
    width: 100%;
    height: 100vh;
    background: ${COLOR.WHITE};

    .row {
      display: flex;
      align-items: center;
    }
  }
`;
