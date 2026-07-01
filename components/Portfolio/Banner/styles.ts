import styled from 'styled-components';
import { COLOR } from 'util/theme';

export const EC = styled.div``;

export const Main = styled.div`
  display: block;
  height: 50vh;
  /* fallback */
  // height: calc(var(--vh, 1vh) * 50);
  background-color: ${COLOR.WHITE};

  .container {
    .row {
      flex-direction: column;
      justify-content: center;

      h2 {
        z-index: 10;
        line-height: 4.2rem;
        color: ${COLOR.WHITE};
        font-size: 2.5rem;
        font-weight: 700;
        mix-blend-mode: difference;

        @include media("<=tablet") {
          font-size: 2.4rem;
          line-height: 3rem;
        }

        @include media("<=phone") {
          margin-top: 72px;
          font-size: 1.7rem;
          line-height: 2.2rem;
        }

        .line {
          position: relative;
          overflow: hidden;
          height: 56px;
          margin-bottom: 8px;

          @include media("<=tablet") {
            height: 48px;
          }

          @include media("<=tablet") {
            height: 32px;
          }

          span {
            position: absolute;
          }
        }
      }

      .btn-row {
        z-index: 2;
        position: relative;
        width: 256px;

        a {
          display: flex;
          align-items: center;
          font-weight: 700;
          text-decoration: none;
          color: ${COLOR.BLACK};

          @include media("<=tablet") {
            font-size: 1.3rem;
          }

          @include media("<=tablet") {
            font-size: 1.1rem;
          }

          svg {
            height: 24px;
            width: 24px;
            padding: 12px;
            margin-left: 16px;
            border: 2px solid ${COLOR.BLACK};
            border-radius: 50%;
            transition: 0.4s ease-in-out;

            @include media("<=tablet") {
              padding: 6px;
              height: 20px;
              width: 20px;
            }

            @include media("<=tablet") {
              padding: 4px;
              height: 16px;
              width: 16px;
            }
          }

          &:hover {
            svg {
              background-color: ${COLOR.BLACK};
              color: ${COLOR.WHITE};
            }
          }
        }
      }
    }
  }
`;
