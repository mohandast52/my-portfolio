import styled from 'styled-components';
import { COLORS, BOX_SHADOW } from '../helpers';

export const Container = styled.div`
  min-height: 15rem;
`;

export const EachFriend = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  transition: background-color 0.15s ease;
  box-shadow: ${BOX_SHADOW.OUT};
  margin-bottom: 1rem;

  h3 {
    margin: 0 0 0.25rem 0;
  }

  &.deleted {
    /* opacity: 0.5; */
    /* background-color: grey; */
  }
`;

export const Name = styled.div``;

export const Actions = styled.div`
  button {
    width: 36px;
    height: 36px;
    padding: 8px;
    font-size: 20px;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 50%;
    background-color: ${COLORS.BG_COLOR};
    transition: box-shadow 0.25s ease-in;
    box-shadow: ${BOX_SHADOW.OUT};

    &:hover {
      box-shadow: ${BOX_SHADOW.INSET};
    }

    /* favourite button */
    &:first-child {
      margin-right: 1rem;
      color: ${COLORS.YELLOW};

      &.fav {
        color: #efeeee;
        background-color: ${COLORS.YELLOW};
      }
    }

    /* delete button */
    &:last-child {
      color: ${COLORS.RED};

      &.deleted {
        color: #efeeee;
        background-color: ${COLORS.RED};
      }
    }
  }
`;
