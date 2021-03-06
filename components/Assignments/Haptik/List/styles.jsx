import styled from 'styled-components';
import { COLORS, BOX_SHADOW } from '../Helpers/theme';

export const Container = styled.div`
  min-height: 288px;
  margin-bottom: 1.5rem;
  box-shadow: ${BOX_SHADOW.OUT};
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

export const EachFriend = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  transition: background-color 0.15s ease;
  border-bottom: 1px solid #80808026;

  h3 {
    margin: 0 0 0.25rem 0;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  &.deleted {
    /* opacity: 0.5; */
    /* background-color: grey; */
  }
`;

export const Name = styled.div`
  color: ${COLORS.TEXT_COLOR};
  max-width: 12.5rem;
  .info-text {
    font-size: 14px;
  }
`;

export const RedText = styled.span`
  color: ${COLORS.RED};
`;

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
