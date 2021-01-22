import styled from 'styled-components';
import { COLOR } from '../../Helpers';

export const LeftNavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
`;

export const ColumnOne = styled.div`
  display: flex;
  align-items: center;

  .name {
    padding-left: 4rem;
    padding-right: 10rem;
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 1px;
  }
  .search {
    width: 18rem;
    padding: 8px 16px;
    border: none;
    outline: none;
    border-radius: 20px;
    transition: box-shadow 0.1s ease;

    &:focus,
    &:active {
      box-shadow: 0 1px 5px 0 rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%),
        0 3px 1px -2px rgb(0 0 0 / 12%);
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    width: 2rem;
    height: 2px;
    border-radius: 4px;
    background-color: ${COLOR.BLACK};
    &:nth-child(1),
    &:nth-child(3) {
      width: 50%;
    }
    &:nth-child(2) {
      margin: 4px;
    }
  }
`;

export const ColumnTwo = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .icon {
    svg {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      color: ${COLOR.BLACK};
    }

    &.icon-1 {
      margin-right: 0.75rem;
    }
  }

  .divider {
    width: 1px;
    height: 100%;
    background-color: ${COLOR.BLACK};
    margin: 0 1rem;
  }

  .profile-picture {
    width: 38px;
    height: 38px;
    margin-right: 1rem;
    overflow: hidden;
    border-radius: 50%;

    img {
      width: 100%;
      height: 100%;
      transform: scale(1.2);
    }
  }

  .profile-name {
    font-size: 18px;
    font-weight: bold;
  }
`;
