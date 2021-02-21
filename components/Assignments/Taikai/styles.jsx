import styled from 'styled-components';

export const COLORS = {
  BORDER_1: '#E4E7F0',
  GREEN: '#009C5E',
  WHITE: '#FFF',
};

export const Container = styled.div`
  padding: 5rem 8rem;
  min-height: 100vh;
  background: #efefef;

  /* re-usable styles (to be added in global styles) */
  font-family: "Helvetica Neue" !important;
`;

export const CompanyContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 1rem;
  margin-bottom: 2rem;
  border: 1px solid #e4e7f0;
  background-color: ${COLORS.WHITE};
  border-radius: 4px;
  &:hover {
    box-shadow: 0 3px 6px rgb(0 0 0 / 2%), 0 3px 6px rgb(0 0 0 / 5%);
  }
`;

export const CompanyInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 1rem;

  .info {
    padding: 4px 0px;
  }

  .employees {
    color: #7b91b1;
    font-size: 11px;
  }
`;

export const Avatar = styled.div`
  flex: 0 0 auto;
  margin: 1rem;
  width: 50px;
  height: 50px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

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
    .posted {
      color: ${COLORS.GREEN};
      margin-right: 0.5rem;
    }
  }
`;

export const Title = styled.h3`
  color: #050c26;
  line-height: 1.25;
  font-weight: 500;
  font-size: 18px;
  margin: 0;
`;
