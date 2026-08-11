import { API_TYPES } from './Helpers';
import type { Friend, State } from './Helpers';

/* A reducer action: a known API type plus the action's payload. The payload
   shape varies per action (string / number / boolean / id), so it is `any`. */
export interface Action {
  type: (typeof API_TYPES)[keyof typeof API_TYPES];
  /* payload varies per action type (string / number / boolean / id) */
  payload: any;
}

const Reducer = (state: State, action: Action): State => {
  const { type, payload } = action;
  switch (type) {
    case API_TYPES.TOGGLE_FAV_SORT: {
      // if (!payload) {
      //   return {
      //     ...state,
      //     sortByFavourite: payload,
      //     friends: [...state.friendsCopy],
      //   };
      // }

      const sorted: Friend[] = [];
      const unsorted: Friend[] = [];

      if (payload) {
        [...state.friendsCopy].forEach(friend => {
          const { name, isFavourite } = friend;

          if (name.toLowerCase().includes(state.search.toLowerCase())) {
            if (isFavourite) sorted.push(friend);
            else unsorted.push(friend);
          }
        });
      } else {
        [...state.friendsCopy].forEach(friend => {
          const { name } = friend || {};
          if (name.toLowerCase().includes(state.search.toLowerCase())) {
            unsorted.push(friend);
          }
        });
      }

      return {
        ...state,
        // search: '',
        friends: [...sorted, ...unsorted],
        // friendsCopy: [...sorted, ...unsorted],
        sortByFavourite: payload,
      };
    }

    case API_TYPES.SEARCH_CHANGE: {
      // console.log(state.friendsCopy);
      const listCopy = [...state.friendsCopy].filter(friend => {
        const { name } = friend || {};
        return name.toLowerCase().includes(payload.toLowerCase());
      });
      // console.log(listCopy);

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
      const listCopy = [...state.friendsCopy];
      // console.log(listCopy);
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
        // friends: listCopy,
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
