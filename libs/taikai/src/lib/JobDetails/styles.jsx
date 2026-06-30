import styled from 'styled-components';
import { Modal } from 'antd';
import { COLORS, Title } from '../styles';

export const EachJob = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0.5rem;
  border: 1px solid ${COLORS.BORDER_1};
  border-bottom: 0;

  &:last-child {
    border-bottom: 1px solid ${COLORS.BORDER_1};
  }

  .row-1 {
    display: flex;
  }

  .row-2 {
    display: flex;
    align-items: center;
  }

  .dot-space {
    &:before {
      content: "•";
      margin: 0 0.5rem;
    }
  }
`;

export const JobTitle = styled.div``;

export const Location = styled.div``;

export const DatePosted = styled.div`
  color: ${COLORS.GREEN};
  margin-right: 0.5rem;
`;

export const DetailsModal = styled(Modal)`
  top: 2rem !important;

  .ant-modal-body {
    max-height: 80vh;
    overflow: auto;
  }

  .ant-modal-footer {
    display: flex;
    justify-content: flex-end;
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.75rem 0.5rem;
`;

export const ColumnDetails = styled.div`
  width: 70%;
  padding-right: 2rem;
`;

export const ColumnInfoList = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  border: 1px solid ${COLORS.BORDER_1};
  padding: 1rem;
  .ant-tag {
    margin-bottom: 0.5rem;
  }
`;

export const SubTitle = styled(Title)`
  font-size: 15px !important;
  margin-bottom: 0.35rem;
`;

export const SubInfo = styled.div`
  margin-bottom: 1.5rem;
  text-transform: capitalize;
`;
