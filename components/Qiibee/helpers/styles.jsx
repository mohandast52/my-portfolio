import styled from 'styled-components';
import { COLORS, BOX_SHADOW } from '../styles';

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
      position: sticky;
      width: calc(100% - 40px);
      top: 0;
      right: 0;
      margin: 0 20px;
      z-index: 200;
      box-shadow: ${BOX_SHADOW.NONE};
      background: ${COLORS.WHITE};
      > div { 
        text-align: right;
        text-decoration: underline;
        font-size: 16px;
        letter-spacing: 1px;
      }
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
