import React, { useReducer } from 'react';
import { FaHeart } from 'react-icons/fa';
import { API_TYPES, INITIAL_STATE } from './Helper';
import Reducer from './Reducer';
import Pagination from './Pagination';
import FriendList from './List';
import {
  ParentContainer,
  Container,
  AddInput,
  SearchInput,
  SortContainer,
  SortButton,
  PaginationContainer,
} from './styles';

const FriendsList = () => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
  const {
    sortByFavourite, search, newFriendName, pageNumber, friends,
  } = state;

  const toggleFavSort = () => {
    dispatch({ type: API_TYPES.TOGGLE_FAV_SORT, payload: !sortByFavourite });
  };

  const handleSearch = ({ target }) => {
    dispatch({ type: API_TYPES.SEARCH_CHANGE, payload: target.value });
  };

  const handleAddNewFriend = ({ target }) => {
    dispatch({ type: API_TYPES.NEW_FRIEND_NAME, payload: target.value });
  };

  const onAddInputKeyPress = e => {
    if (e.key === 'Enter') {
      dispatch({ type: API_TYPES.ADD_NEW_FRIEND, payload: newFriendName });
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
        <SortContainer>
          <SearchInput
            placeholder="Search"
            value={search}
            onChange={handleSearch}
            data-testid="search-input" 
          />

          <SortButton
            type="button"
            className={sortByFavourite ? 'active' : ''}
            onClick={toggleFavSort}
            data-testid="sort-by-button" 
          >
            Sort by
            <FaHeart />
          </SortButton>
        </SortContainer>

        <AddInput
          placeholder="Add your friend's name"
          value={newFriendName}
          onChange={handleAddNewFriend}
          onKeyPress={onAddInputKeyPress}
        />

        <FriendList
          pageNumber={pageNumber}
          friends={friends}
          handleMarkFavourite={handleMarkFavourite}
          handleDelete={handleDelete}
        />

        <PaginationContainer>
          <Pagination
            friendsCount={friends.length}
            activePage={pageNumber}
            updatePageNumber={updatePageNumber}
          />
        </PaginationContainer>
      </Container>
    </ParentContainer>
  );
};

export default FriendsList;
