import React from 'react';
import PropTypes from 'prop-types';
import { FaHeart, FaTimes, FaSearchengin } from 'react-icons/fa';
import {
  Container,
  NoDataFound,
  EachFriend,
  Name,
  Actions,
  RedText,
} from './styles';

export const List = ({
  pageNumber,
  friends,
  handleMarkFavourite,
  handleDelete,
}) => {
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

List.propTypes = {
  pageNumber: PropTypes.number,
  // eslint-disable-next-line react/forbid-prop-types
  friends: PropTypes.array,
  handleMarkFavourite: PropTypes.func,
  handleDelete: PropTypes.func,
};

List.defaultProps = {
  pageNumber: 1,
  friends: [],
  handleMarkFavourite: () => {},
  handleDelete: () => {},
};

export default List;
