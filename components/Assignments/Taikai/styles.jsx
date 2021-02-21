import styled from 'styled-components';

export const COLORS = {
  BORDER_1: '#E4E7F0',
  GREEN: '#009C5E',
  WHITE: '#FFF',
};

export const BOX_SHADOW = {
  INSET: 'inset 4px 4px 6px #ccc, inset -4px -4px 6px #fff',
  OUT: '4px 4px 6px #ccc, -4px -4px 6px #fff',
  EACH_CARD: '5px 5px 12px #c6c6c6,-5px -5px 12px #ffffff',
  THIN_CARD: 'inset -3px -3px 7px #ffffff8a, inset 3px 3px 5px #ceced19c',
};

export const Container = styled.div`
  font-family: "Helvetica Neue" !important;
  min-height: 100vh;
  background: #f0f2f5;
  /* padding: 5rem 8rem; */

  .ant-layout-sider {
    overflow: auto;
    position: fixed;
    left: 0;
    height: 100vh;
    min-width: 340px !important;
    width: 340px !important;
  }

  .site-layout {
    margin-left: 340px;
  }

  .site-layout-background {
    padding: 1.5rem;
  }
`;

export const FilterContainer = styled.div`
  padding: 2rem 1rem;

  .ant-select {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

export const FilterLabel = styled.label`
  margin-bottom: 0.25rem;
  display: inline-block;
  color: gray;
`;

export const NoDataFound = styled.div`
  position: relative;
  top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${COLORS.TEXT_COLOR};

  svg {
    display: block;
    margin-bottom: 1rem;
    font-size: 5rem;
    opacity: 0.4;
  }
`;

export const CompanyContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 1rem;
  margin-top: 1.5rem;
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

export const Title = styled.h3`
  color: #050c26;
  line-height: 1.25;
  font-weight: 500;
  font-size: 18px;
  margin: 0;
`;

/* ------------ pagination styles -------------- */
export const PaginationContainer = styled.div`
  margin: 8px 0;
  height: 40px;
`;

export const PaginationButton = styled.button`
  width: 40px;
  height: 40px;
  padding: 0;
  border-radius: 50%;

  outline: none;
  border: none;
  box-shadow: ${BOX_SHADOW.OUT};
  transition: box-shadow 0.25s ease-in;

  &.active,
  &:active {
    box-shadow: ${BOX_SHADOW.INSET};
  }

  &:not(:first-child),
  &:not(:last-child) {
    margin: 0px 4px;
  }
`;

export const Dots = styled.span`
  letter-spacing: 4px;
  margin: 0 4px 0 8px;
`;
