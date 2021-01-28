import styled from 'styled-components';
import { COLORS, BOX_SHADOW } from './Helper';

export const ParentContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: ${COLORS.BG_COLOR};
`;

export const Container = styled.div`
  margin: auto;
  width: 340px;
`;

/* ------------ common styles -------------- */
export const Input = styled.input`
  width: 100%;
  border: none;
  padding: 1em;
  background-color: ${COLORS.BG_COLOR};
  box-shadow: ${BOX_SHADOW.OUT};
  color: #888;

  &:focus {
    outline: none;
    box-shadow: ${BOX_SHADOW.INSET};
  }
`;

export const Button = styled.button`
  outline: none;
  border: none;
  box-shadow: ${BOX_SHADOW.OUT};
  transition: box-shadow 0.25s ease-in;

  &.active,
  &:active {
    box-shadow: ${BOX_SHADOW.INSET};
  }
`;

export const SortButton = styled(Button)`
  width: 150px;
  margin-top: 4px;
  margin-left: 1rem;
  padding: 12px 0;
  border-radius: 50px;
  > svg {
    position: relative;
    bottom: -2px;
    left: 4px;
    color: ${COLORS.YELLOW};
  }
`;

export const AddInput = styled(Input)`
  margin-bottom: 1rem;
`;

export const SearchInput = styled(Input)`
  border-radius: 5000px;
`;

/* ------------ common styles -------------- */
export const SortContainer = styled.div`
  margin: 1rem 0 2rem 0;
  display: flex;
  align-items: center;
  width: 100%;
`;

/* ------------ pagination styles -------------- */
export const PaginationContainer = styled.div`
  margin: 8px 0;
  height: 40px;
`;

export const PaginationButton = styled(Button)`
  width: 40px;
  height: 40px;
  padding: 0;
  border-radius: 50%;

  &:not(:first-child),
  &:not(:last-child) {
    margin: 0px 4px;
  }
`;

export const Dots = styled.span`
  letter-spacing: 4px;
  margin: 0 4px 0 8px;
`;
