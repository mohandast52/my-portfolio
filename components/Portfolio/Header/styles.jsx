import styled from 'styled-components';
import { COLOR } from 'util/theme';

export const EC = styled.div``;

export const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 128px;
  z-index: 4;

  /* @include media("<=phone") {
    height: 96px;
  } */

  .container {
    .row {
      .logo {
        a {
          letter-spacing: 0.5rem;
          color: ${COLOR.BLACK};
          text-decoration: none;
          font-size: 1.2rem;
          font-weight: 700;
          text-decoration: none;
        }
      }

      .nav-toggle {
        position: relative;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;

        /* @include media("<=tablet") {
          margin-right: 24px;
        }

        @include media("<=phone") {
          margin-right: 16px;
          width: 20px;
        } */

        .hamburger-menu {
          width: 25px;

          /* @include media("<=phone") {
            width: 20px;
          } */

          span {
            display: block;
            width: 100%;
            height: 2px;
            background-color: ${COLOR.BLACK};
            margin-bottom: 0.3rem;
          }
        }

        .hamburger-menu-close {
          position: absolute;
          display: none;

          svg {
            /* @include media("<=tablet") {
              width: 56px;
            }

            @include media("<=phone") {
              width: 48px;
            } */
          }
        }
      }
    }
  }
`;
