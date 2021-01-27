export const API_TYPES = {
  SEARCH_CHANGE: 'search',
  ADD_NEW_FRIEND: 'add',
  FAVOURTIE: 'favourite',
  DELETE: 'delete',
};

export const INITIAL_STATE = {
  search: '',
  friends: [
    {
      id: 'unique-id-0',
      name: 'Rakesh Gupta',
      isFavourite: true,
      isDeleted: false,
    },
    {
      id: 'unique-id-1',
      name: 'Shivangi Sharma',
      isFavourite: false,
      isDeleted: true,
    },
    {
      id: 'unique-id-2',
      name: 'Akash Singh',
      isFavourite: false,
      isDeleted: false,
    },
  ],
};

export const COLORS = {};
