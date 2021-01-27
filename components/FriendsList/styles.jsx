import styled from 'styled-components';
// import { COLORS } from './helpers';

export const ParentContainer = styled.div`
  display: flex;
  height: 100vh;
`;

export const Container = styled.div`
  margin: auto;
  width: 300px;
`;

export const SearchInput = styled.input`
  font-size: 20px;
  padding: 0.25rem 1rem;
  width: 100%;
  border-radius: 0;
  border: 1px solid #1a1b1a;
  &:focus {
    outline: none;
    border-radius: 0;
    border: 1px solid red;
  }
`;

export const List = styled.div`
  /* margin: auto; */
`;

export const EachFriend = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border: 1px solid blue;
  transition: background-color 0.15s ease;


  h3 {
    margin: 0 0 0.25rem 0;
  }

  &.deleted {
    opacity: 0.5;
    background-color: grey;
  }
`;

export const Name = styled.div``;

export const Actions = styled.div`
  button {
    padding: 0.25rem 0.5rem;
    outline: none;
    cursor: pointer;
    background-color: #fff;
    border: 1px solid red;
    transition-duration: 0.5s;
    transition-timing-function: ease;
    transition-property: background-color, border;

    &.fav {
      &:hover {
        background-color: yellow;
      }
    }

    &:first-child {
      margin-right: 1rem;
    }
  }
`;
