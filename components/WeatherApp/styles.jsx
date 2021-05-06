import styled from "styled-components";

export const Container = styled.div`
  max-width: 1300px;
  padding: 2rem 0;
  margin: 0 auto;
  @media screen and (max-width: 600px) {
    max-width: 100%;
    width: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
`;

export const LoaderContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Cards = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-around;
  /* height: 500px; */
  width: calc(100% - 20rem);
  /* overflow: auto; */
  margin: 0 auto;

  > .ant-card {
    margin: 1rem;
    flex-basis: 200px;
    flex-grow: 0;
    flex-shrink: 0;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

    &.active {
      border: 0;
      box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
        rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
      transform: scale(1.25);
      transition: 0.3s ease-in;
      transition-property: box-shadow transform;
      .main,
      .speed-drop {
        text-decoration: underline;
      }
    }

    .ant-card-cover {
      width: 70px;
      height: 70px;
      margin: 0 auto;
    }

    .weather-info {
      display: flex;
      flex-direction: column;
      align-items: center;

      .main {
        color: rgba(0, 0, 0, 0.45);
      }
      .temperature {
        font-size: 32px;
        .symbol {
          font-weight: 100;
          font-size: 0.65em;
        }
      }
      .speed-drop {
        color: rgba(0, 0, 0, 0.45);
      }
    }
  }
`;

export const ChartContainer = styled.div`
  width: 100%;
  height: 500px;
  max-width: 800px;
  margin: 0 auto;
`;
