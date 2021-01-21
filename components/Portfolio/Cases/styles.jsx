import styled from 'styled-components';
import { COLOR } from 'util/theme';

export const EC = styled.div``;

export const CasesContainer = styled.div`
  height: 50%;
  // height: calc(var(--vh, 1vh) * 50);
  background-color: ${COLOR.WHITE};

  .cases-navigation {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 6;
    padding: 32px;
    box-sizing: border-box;

    /* @include media("<=tablet") {
        display: none;
      }

      @include media("<=phone") {
      } */

    .cases-arrow {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 72px;
      width: 72px;
      border-radius: 100%;
      background-color: rgba(0, 0, 0, 0.4);

      svg {
        color: ${COLOR.WHITE};
        height: 28px;
        width: 28px;
      }

      &.disabled {
        opacity: 0.3;
      }
    }
  }

  .row {
    /* @include media("<=tablet") {
        flex-direction: column;
      } */

    .case {
      position: relative;
      background: ${COLOR.BLACK};
      cursor: pointer;

      &:hover {
        .case-image {
          opacity: 0.4;
        }
      }

      .case-details {
        z-index: 1;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 33.33vw;
        height: 50vh;
        padding: 32px;
        box-sizing: border-box;
        // height: calc(var(--vh, 1vh) * 50);

        /* @include media("<=tablet") {
            width: 100vw;
          }

          @include media("<=phone") {
            padding: 16px;
          } */

        span {
          margin-top: 156px;
          opacity: 0.8;
          font-size: 1.6rem;
          font-weight: 600;
          color: ${COLOR.WHITE};

          /* @include media("<=desktop", ">tablet") {
              font-size: 1.4rem;
            }

            @include media("<=phone") {
              font-size: 1.2rem;
              line-height: 2.2rem;
            } */
        }

        h2 {
          width: 85%;
          margin-top: 16px;
          font-size: 2rem;
          line-height: 2.4rem;
          // line-height: 3.4rem;
          color: ${COLOR.WHITE};
          opacity: 0.8;

          /* @include media("<=desktop", ">tablet") {
              font-size: 2rem;
              line-height: 2.4rem;
            }

            @include media("<=phone") {
              font-size: 1.7rem;
              line-height: 2.2rem;
              margin-top: 8px;
            } */
        }
      }

      .case-image {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: absolute;
        opacity: 0.25;
        transition: 0.4s cubic-bezier(0.6, -0.5, 0.1, 0.99);

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
`;
