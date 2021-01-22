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
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 1px solid ${COLOR.BLACK};
    visibility: hidden;

    &:not(:last-child) {
      margin-right: 0.5rem;
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
