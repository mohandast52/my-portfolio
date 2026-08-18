import React from 'react';
import { FaHeart, FaTimes, FaSearchengin } from 'react-icons/fa';
import type { Friend } from '../Helpers';
import {
  Container,
  NoDataFound,
  EachFriend,
  Name,
  Actions,
  RedText,
} from './styles';

interface ListProps {
  pageNumber?: number;
  friends?: Friend[];
  handleMarkFavourite?: (id: string) => void;
  handleDelete?: (id: string) => void;
}

export const List = ({
  pageNumber = 1,
  friends = [],
  handleMarkFavourite = () => {},
  handleDelete = () => {},
}: ListProps) => {
  if ((friends || []).length === 0) {
    return (
      <Container>
        <NoDataFound data-testid="no-data-found">
          <FaSearchengin />
          No Data Found
        </NoDataFound>
      </Container>
    );
  }

  return (
    <Container data-testid="friend-list">
      {(friends || []).map(({
        id, name, isFavourite, isDeleted,
      }, index) => {
        const currentView = 4 * (pageNumber - 1) + (index % 4);
        if (currentView !== index) return null;

        return (
          <EachFriend key={id} className={isDeleted ? 'deleted' : ''}>
            <Name>
              <h3>{name}</h3>
              <span className="info-text">
                is
                <RedText>{isDeleted ? ' not ' : ' '}</RedText>
                your friend
              </span>
            </Name>

            <Actions>
              <button
                type="button"
                className={`${isFavourite ? 'fav' : ''}`}
                onClick={() => handleMarkFavourite(id)}
              >
                <FaHeart />
              </button>

              <button
                type="button"
                className={`${isDeleted ? 'deleted' : ''}`}
                onClick={() => handleDelete(id)}
              >
                <FaTimes />
              </button>
            </Actions>
          </EachFriend>
        );
      })}
    </Container>
  );
};

export default List;
