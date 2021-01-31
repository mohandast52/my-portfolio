import styled from 'styled-components';

export const ParentContainer = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .circle {
    width: 200px;
    height: 200px;
    border: 1px solid #000;
    border-radius: 50%;
  }

  .show-timer {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .buttons button {
    margin: 0.5rem;
  }
`;

export const Container = styled.div``;
