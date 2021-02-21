import styled from 'styled-components';

const COLOR = {
  GREY: '#e2e2e2',
  WHITE: '#FFF',
};

export const ParentContainer = styled.div`
  font-family: "Helvetica Neue" !important;
  height: 100vh;
  width: 100vw;
  padding: 5rem 8rem;

  /* scroll-bar */
  .custom-scroll-bar {
    /* specifically for mozilla */
    scrollbar-color: ${COLOR.GREY} ${COLOR.WHITE};
    scrollbar-width: thin;

    ::-webkit-scrollbar {
      width: 0.6rem;
      height: 0.6rem;
    }

    ::-webkit-scrollbar-track {
      overflow: hidden;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${COLOR.GREY};
    }
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  overflow: auto;

  .ant-checkbox-wrapper {
    margin: 0 !important;
    padding: 8px 0px;
    border-bottom: 1px solid #e2e2e2;
  }
`;
