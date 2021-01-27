import React from 'react';
import PropTypes from 'prop-types';
import {
  FaHeart,
  FaRegStar,
  FaTrash,
  FaTrashAlt,
  FaTimes,
} from 'react-icons/fa';
import {
  Container, EachFriend, Name, Actions,
} from './styles';

export const List = ({ friends, handleMarkFavourite, handleDelete }) => (
  <Container>
    {(friends || []).map(({
      id, name, isFavourite, isDeleted,
    }) => (
      <EachFriend key={id} className={isDeleted ? 'deleted' : ''}>
        <Name>
          <h3>{name}</h3>
          <span>is your friend</span>
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
    ))}
  </Container>
);

List.propTypes = {
  friends: PropTypes.shape([]),
  handleMarkFavourite: PropTypes.func,
  handleDelete: PropTypes.func,
};

List.defaultProps = {
  friends: [],
  handleMarkFavourite: () => {},
  handleDelete: () => {},
};

export default List;
