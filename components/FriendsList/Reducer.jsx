
import { API_TYPES } from './Helper';

const Reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case API_TYPES.TOGGLE_FAV_SORT: {
      if (!payload) {
        return { ...state, sortByFavourite: payload };
      }

      const sorted = [];
      const unsorted = [];

      [...state.friendsCopy].forEach(friend => {
        const { isFavourite } = friend;

        if (isFavourite) sorted.push(friend);
        else unsorted.push(friend);
      });

      return {
        ...state,
        search: '',
        friends: [...sorted, ...unsorted],
        friendsCopy: [...sorted, ...unsorted],
        sortByFavourite: payload,
      };
    }

    case API_TYPES.SEARCH_CHANGE: {
      const listCopy = [...state.friendsCopy].filter(friend => {
        const { name } = friend || {};
        return name.toLowerCase().includes(payload.toLowerCase());
      });

      return {
        ...state,
        pageNumber: 1,
        search: payload,
        friends: listCopy,
      };
    }

    case API_TYPES.NEW_FRIEND_NAME: {
      return {
        ...state,
        pageNumber: 1,
        newFriendName: payload,
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
        newFriendName: '',
        friends: listCopy,
        friendsCopy: listCopy,
      };
    }

    case API_TYPES.FAVOURTIE: {
      const listCopy = [...state.friends].map(friend => {
        const { id, isFavourite } = friend || {};

        return id !== payload
          ? friend
          : { ...friend, isFavourite: !isFavourite };
      });

      return { ...state, friends: listCopy, friendsCopy: listCopy };
    }

    case API_TYPES.DELETE: {
      const listCopy = [...state.friends].map(friend => {
        const { id, isDeleted } = friend || {};

        return id !== payload ? friend : { ...friend, isDeleted: !isDeleted };
      });

      return { ...state, friends: listCopy, friendsCopy: listCopy };
    }

    case API_TYPES.UPDATE_PAGE_NUMBER: {
      return { ...state, pageNumber: payload };
    }

    default:
      throw new Error();
  }
};

export default Reducer;
