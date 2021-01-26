import styled, { createGlobalStyle } from 'styled-components';
import { COLOR } from './Helpers';

export const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
    height: 100vh;
    background-color: ${COLOR.BG_GREY} !important;
  }
`;

export const DashboardContainer = styled.div`
  position: relative;
  top: 2rem;
  width: calc(100vw - 10rem);
  height: calc(100vh - 4rem);
  max-width: 1140px;
  margin: 0 auto;
  border-radius: 2rem;
  color: ${COLOR.BLACK};
  background-color: #f3f6fd;

  * {
    font-family: "PT Sans", sans-serif !important;
  }
`;

export const Container = styled.div``;

export const Row = styled.div`
  display: flex;
`;

export const SectionTitle = styled.h3`
  margin: 0;
  font-size: 19px;
`;

export const Icon = styled.div`
  width: ${props => props.size || '32px'};
  height: ${props => props.size || '32px'};
  border-radius: 50%;
  background-color: transparent;
  transition: background-color 0.12s ease-in-out;

  &.active {
    background-color: ${COLOR.DARK_BLACK};
    svg {
      color: ${COLOR.WHITE};
    }
  }

  svg {
    padding: 8px;
    font-size: 16px;
  }

  &:hover {
    cursor: pointer;
    background-color: ${COLOR.DARK_BLACK};
    svg {
      color: ${COLOR.WHITE};
    }
  }
`;

export const HyperLink = styled.a`
  font-size: 18px;
  text-decoration: none;
  font-weight: bold;
  color: ${COLOR.LAVENDAR};
  &:hover {
    text-decoration: underline;
  }
`;
