import styled from 'styled-components';

export const Container = styled.div`
  .ant-menu-root {
    /* height: 100vh; */
  }
  .ant-layout-sider {
    overflow: auto;
    height: 100vh;
    position: fixed;
    left: 0;
  }
  .logo {
    height: 32px;
    margin: 16px;
    background: rgba(0, 0, 0, 0.1);
  }
  .site-layout {
    min-height: 100vh;
    margin-left: 200px;
    .site-layout-background {
      display: none; // TODO: remove
    }
  }
  .ant-layout-content {
    margin: 24px 16px 0;
    overflow: initial;
  }
`;

export const NavFooter = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  row-gap: 8px;
  position: absolute;
  width: 100%;
  bottom: 60px;
  .ant-btn {
    width: 100% !important;
  }
`;

export const GraphCard = styled.div`
  background-color: #FFF;
  padding: 32px;
  border-radius: 4px;
`;
