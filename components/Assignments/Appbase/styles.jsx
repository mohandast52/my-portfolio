import styled from 'styled-components';

export const ParentContainer = styled.div`
  font-family: "Helvetica Neue" !important;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100vw;
  height: 100vh;
  padding: 5rem 8rem;

  /* scroll-bar */
  .custom-scroll-bar {
    scrollbar-color: #e2e2e2 #ffffff;
    scrollbar-width: thin;

    ::-webkit-scrollbar {
      width: 0.6rem;
      height: 0.6rem;
    }

    ::-webkit-scrollbar-track {
      overflow: hidden;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #e2e2e2;
    }
  }
`;

export const ProblemContainer = styled.div`
  width: 400px;
  margin: 120px auto;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  border: 1px solid red;
  margin-bottom: 2rem;

  .circle {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 100px;
    border-radius: 50%;

    span {
      color: white;
      font-size: 18px;
      text-transform: uppercase;
    }
  }
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 20p;
  text-align: center;
`;
