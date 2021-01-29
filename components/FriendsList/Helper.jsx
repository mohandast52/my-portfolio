export const API_TYPES = {
  TOGGLE_FAV_SORT: 'sort_by_favourite',
  SEARCH_CHANGE: 'search',
  NEW_FRIEND_NAME: 'add_friend',
  ADD_NEW_FRIEND: 'add',
  FAVOURTIE: 'favourite',
  DELETE: 'delete',
  UPDATE_PAGE_NUMBER: 'page_number',
};

export const FRIENDS_DB = [
  {
    id: 'unique-id-0',
    name: 'Rakesh Gupta',
    isFavourite: false,
    isDeleted: false,
  },
  {
    id: 'unique-id-1',
    name: 'Shivangi Sharma',
    isFavourite: true,
    isDeleted: true,
  },
  {
    id: 'unique-id-2',
    name: 'Akash Singh',
    isFavourite: false,
    isDeleted: false,
  },

  /*
  {
    id: 'unique-id-3',
    name: '3',
    isFavourite: true,
    isDeleted: false,
  },
  {
    id: 'unique-id-4',
    name: '4',
    isFavourite: false,
    isDeleted: true,
  },
  {
    id: 'unique-id-5',
    name: '5',
    isFavourite: false,
    isDeleted: false,
  },
  {
    id: 'unique-id-6',
    name: '6',
    isFavourite: true,
    isDeleted: false,
  },
  {
    id: 'unique-id-7',
    name: '7',
    isFavourite: false,
    isDeleted: true,
  },
  {
    id: 'unique-id-8',
    name: '8',
    isFavourite: false,
    isDeleted: false,
  },
  */
];

export const INITIAL_STATE = {
  sortByFavourite: false,
  search: '',
  newFriendName: '',
  pageNumber: 1,
  friends: [...FRIENDS_DB],
  friendsCopy: [...FRIENDS_DB], /* copy of friends to keep original friendsList! */
};

export const COLORS = {
  YELLOW: '#fdc500',
  RED: '#ef476f',
  BG_COLOR: '#EFEEEE',
  TEXT_COLOR: '#7D8597',
};

export const BOX_SHADOW = {
  INSET: 'inset 4px 4px 6px #ccc, inset -4px -4px 6px #fff',
  OUT: '4px 4px 6px #ccc, -4px -4px 6px #fff',
  // EACH_CARD: '5px 5px 17px #d0cfcf, -5px -5px 17px #ffffff;',
  EACH_CARD: '5px 5px 12px #c6c6c6,-5px -5px 12px #ffffff',
  THIN_CARD: 'inset -3px -3px 7px #ffffff8a, inset 3px 3px 5px #ceced19c',
};
