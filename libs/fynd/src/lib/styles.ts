import styled from 'styled-components';

export const ParentContainer = styled.div`
  font-family: "Helvetica Neue" !important;
  display: flex;
  justify-content: space-around;
  width: 100vw;
  height: 100vh;
  padding: 5rem 8rem;

  /* scroll-bar */
  .custom-scroll-bar {
    /* specifically for mozilla */
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

export const Container = styled.div`
  width: 220px;
`;
