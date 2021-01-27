import React, { useRef, useReducer, useEffect } from 'react';
import {
  FaSearch,
  FaStar,
  FaRegStar,
  FaTrash,
  FaTrashAlt,
} from 'react-icons/fa';
import { API_TYPES, INITIAL_STATE } from './helpers';
import {
  ParentContainer,
  Container,
  SearchInput,
  List,
  EachFriend,
  Name,
  Actions,
} from './styles';

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case API_TYPES.SEARCH_CHANGE: {
      return { ...state, search: payload };
    }

    case API_TYPES.ADD_NEW_FRIEND: {
      const listCopy = [...state.friends];
      listCopy.unshift({
        id: `unique-id-${listCopy.length}`,
        name: payload,
        isFavourite: false,
        isDeleted: false,
      });

      return { ...state, search: '', friends: listCopy };
    }

    case API_TYPES.FAVOURTIE: {
      const listCopy = [...state.friends].map(friend => {
        const { id, isFavourite } = friend || {};

        return id !== payload
          ? friend
          : { ...friend, isFavourite: !isFavourite };
      });

      return { ...state, friends: listCopy };
    }

    case API_TYPES.DELETE: {
      const listCopy = [...state.friends].map(friend => {
        const { id, isDeleted } = friend || {};

        return id !== payload ? friend : { ...friend, isDeleted: !isDeleted };
      });

      return { ...state, friends: listCopy };
    }

    default:
      throw new Error();
  }
};

const FriendsList = () => {
  const searchElement = useRef(null);
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { search, friends } = state;

  useEffect(() => {
    searchElement.current.focus();
  }, []);

  const handleChange = ({ target }) => {
    dispatch({ type: API_TYPES.SEARCH_CHANGE, payload: target.value });
  };

  const handleTest = e => {
    if (e.key === 'Enter') {
      dispatch({ type: API_TYPES.ADD_NEW_FRIEND, payload: search });
    }
  };

  const handleMarkFavourite = id => {
    dispatch({ type: API_TYPES.FAVOURTIE, payload: id });
  };

  const handleDelete = id => {
    dispatch({ type: API_TYPES.DELETE, payload: id });
  };

  return (
    <ParentContainer>
      <Container>
        <SearchInput
          value={search}
          ref={searchElement}
          onChange={handleChange}
          onKeyPress={handleTest}
        />

        <List>
          {friends.map(({
            id, name, isFavourite, isDeleted,
          }) => {
            if (isDeleted) {
              console.log('deleted!');
            }

            return (
              <EachFriend key={id} className={isDeleted ? 'deleted' : ''}>
                <Name>
                  <h3>{name}</h3>
                  <span>is your friend</span>
                </Name>

                <Actions>
                  <button
                    type="button"
                    className="fav"
                    onClick={() => handleMarkFavourite(id)}
                  >
                    {isFavourite ? <FaStar /> : <FaRegStar />}
                  </button>

                  <button
                    type="button"
                    className="fav"
                    onClick={() => handleDelete(id)}
                  >
                    {isDeleted ? <FaTrash /> : <FaTrashAlt />}
                  </button>
                </Actions>
              </EachFriend>
            );
          })}
        </List>
      </Container>
    </ParentContainer>
  );
};

export default FriendsList;
