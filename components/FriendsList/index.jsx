import React, { useRef, useReducer, useEffect } from 'react';

import { API_TYPES, FRIENDS_DB, INITIAL_STATE } from './helpers';
import Pagination from './Pagination';
import FriendList from './List';
import {
  ParentContainer,
  Container,
  SearchInput,
  PaginationContainer,
} from './styles';

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case API_TYPES.SEARCH_CHANGE: {
      // const listCopy = [...FRIENDS_DB].filter(friend => {
      //   const { name } = friend || {};
      //   return name.toLowerCase().includes(payload.toLowerCase());
      // });

      return {
        ...state,
        pageNumber: 1,
        search: payload,
        // friends: listCopy,
      };
    }

    case API_TYPES.ADD_NEW_FRIEND: {
      const listCopy = [...state.friends];
      listCopy.unshift({
        id: `unique-id-${listCopy.length}`,
        name: payload,
        isFavourite: false,
        isDeleted: false,
      });

      return {
        ...state,
        pageNumber: 1,
        search: '',
        friends: listCopy,
      };
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

    case API_TYPES.UPDATE_PAGE_NUMBER: {
      return { ...state, pageNumber: payload };
    }

    default:
      throw new Error();
  }
};

const FriendsList = () => {
  const searchElement = useRef(null);
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { search, pageNumber, friends } = state;

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

  const updatePageNumber = pageNo => {
    dispatch({ type: API_TYPES.UPDATE_PAGE_NUMBER, payload: pageNo });
  };

  return (
    <ParentContainer>
      <Container>
        <SearchInput
          placeholder="Enter your friend's name"
          value={search}
          ref={searchElement}
          onChange={handleChange}
          onKeyPress={handleTest}
        />

        <FriendList
          friends={friends}
          handleMarkFavourite={handleMarkFavourite}
          handleDelete={handleDelete}
        />

        <PaginationContainer>
          <Pagination
            friendsCount={80}
            activePage={pageNumber}
            updatePageNumber={updatePageNumber}
          />
        </PaginationContainer>
      </Container>
    </ParentContainer>
  );
};

export default FriendsList;
