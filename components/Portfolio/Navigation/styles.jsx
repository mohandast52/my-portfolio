import styled from 'styled-components';
import { COLOR } from 'util/theme';

export const EC = styled.div``;

export const NavContainer = styled.nav`
  z-index: 1;
  position: fixed;
  left: 0;
  top: -1px;
  width: 100%;
  height: 100%;
  background-color: ${COLOR.LIGHT_YELLOW};
  overflow: hidden;

  a {
    position: relative;

    &:after {
      content: "";
      display: block;
      position: absolute;
      right: 0;
      width: 0;
      height: 2px;
      background-color: ${COLOR.BLACK};
      margin-top: 5px;
      transition: 0.4s ease;
    }

    &:hover {
      &:after {
        left: 0;
        width: 100%;
      }
    }
  }

  .nav-columns {
    display: flex;
    padding: 0 32px;
    transform: translateY(125px);

    @include media("<=654px") {
      flex-direction: column;
    }

    @include media("<=phone") {
      padding: 0 16px;
    }

    .nav-column {
      width: 45%;

      @include media("<=654px") {
        width: 100%;
      }

      .nav-label {
        margin-bottom: 3rem;
        font-size: 1.2rem;

        @include media("<=tablet") {
          font-size: 1rem;
          margin-bottom: 1.4rem;
        }

        @include media("<=phone") {
          font-size: 0.875rem;
          margin-bottom: 1.2rem;
        }
      }

      .nav-links {
        margin: 0;
        padding: 0;

        li {
          list-style: none;
          margin-bottom: 2.8rem;

          @include media("<=phone") {
            margin-bottom: 1.6rem;
          }

          a {
            font-weight: 600;
            font-size: 2.8rem;
            text-decoration: none;
            color: ${COLOR.BLACK};

            @include media("<=phone") {
              font-size: 2rem;
            }
          }
        }
      }

      .nav-infos {
        display: flex;
        flex-wrap: wrap;

        @include media("<=654px") {
          justify-content: space-between;
        }

        .nav-info {
          padding: 0;
          width: 50%;

          &:nth-child(2),
          &:nth-child(3) {
            @include media("<=phone") {
              display: none;
            }
          }

          .nav-info-label {
            font-weight: 600;
          }

          li {
            font-weight: 300;
            list-style: none;
            font-size: 1.4rem;
            margin-bottom: 1.2rem;

            @include media("<=tablet") {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }

            @include media("<=phone") {
              font-size: 1rem;
              margin-bottom: 0.875rem;
            }

            a {
              text-decoration: none;
              color: ${COLOR.BLACK};
            }
          }
        }
      }
    }
  }
`;
