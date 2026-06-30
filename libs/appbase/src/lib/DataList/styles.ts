import styled from 'styled-components';

export const Container = styled.div`
  width: 220px;
  margin: 0 50px;
`;

export const Title = styled.h3`
  margin-bottom: 0.75rem;
  text-align: center;
  font-weight: 500;
  text-decoration: underline;
`;

export const SelectContainer = styled.div`
  .dropdown {
    padding: 0.35rem 1rem;
    border: 1px solid #e2e2e2;
    border-radius: 4px;
  }
`;

export const Input = styled.input`
  width: 100%;
  outline: none;

  &:active {
    outline: none;
  }
`;

export const Select = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  > div {
    &:nth-child(1) {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;

      .hypen {
        margin: 0 0.25rem;
      }
    }

    &:nth-child(2) {
      line-height: 14px;
      font-size: 16px;
      margin-left: 0.5rem;
    }
  }
`;

export const ListContainer = styled.div`
  margin-top: 0.35rem;
  border-top: 1px solid #e2e2e2;
  box-shadow: 0 2px 4px -1px rgb(0 0 0 / 16%), 0 4px 5px 0 rgb(0 0 0 / 3%),
    0 1px 10px 0 rgb(0 0 0 / 0%);
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  overflow: auto;
  border-bottom: 1px solid #e2e2e2;

  &.single-select {
    .ant-checkbox-inner {
      display: none !important;
    }
  }

  .ant-checkbox-wrapper {
    margin: 0 !important;
    padding: 0.5rem 1rem;
    text-transform: capitalize;

    &:not(:last-child) {
      border-bottom: 1px solid #e2e2e2;
    }

    &:hover {
      cursor: pointer;
      background-color: #e6f7ff;
    }

    &.ant-checkbox-wrapper-checked {
      background-color: #e6f7ff;
      color: #1890ff;
      font-weight: 500;
      svg {
        float: right;
        margin-top: 4px;
      }
    }
  }
`;

export const Count = styled.span`
  margin-left: 4px;

  &:before {
    content: "(";
  }
  &:after {
    content: ")";
  }
`;

export const NoDataFound = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-weight: 500;
`;
