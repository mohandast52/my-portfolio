import styled from 'styled-components';
// import { COLORS } from './helpers';

export const ParentContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #efeeee;
`;

export const Container = styled.div`
  margin: auto;
  width: 340px;
`;

export const SearchInput = styled.input`
  /* font-size: 16px; */
  /* padding: 0.5rem 1rem; */
  /* width: 100%; */
  /* border-radius: 0; */
  /* border: 1px solid #1a1b1a; */
  &:focus {
    outline: none;
    /* border-radius: 0; */
    /* border: 1px solid red; */
  }

  width: 100%;
  border: none;
  border-radius: 5000px;
  padding: 1em;
  background: #efeeee;
  box-shadow: inset 4px 4px 6px #ccc, inset -4px -4px 6px #fff;
  margin-bottom: 2em;
  color: #888;
`;

/* ------------ pagination styles -------------- */
export const PaginationContainer = styled.div`
  margin: 8px 0;
`;

export const PaginationButton = styled.button`
  width: 40px;
  height: 40px;
  padding: 0;
  outline: none;
  border: none;
  border-radius: 50%;
  /* background: #d1d1d1; */
  box-shadow: 4px 4px 6px #ccc, -4px -4px 6px #fff;
  transition: box-shadow 0.25s ease-in;

  &.active,
  &:active {
    box-shadow: inset 4px 4px 6px #ccc, inset -4px -4px 6px #fff;
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
