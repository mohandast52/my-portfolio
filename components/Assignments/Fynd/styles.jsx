import styled from 'styled-components';

export const ParentContainer = styled.div`
  font-family: "Helvetica Neue" !important;
  height: 100vh;
  width: 100vw;
  padding: 5rem 8rem;
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
    margin: 0;
    padding: 8px 0px;
    border-bottom: 1px solid #e2e2e2;
  }
`;
