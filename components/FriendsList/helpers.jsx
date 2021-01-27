export const API_TYPES = {
  SEARCH_CHANGE: 'search',
  ADD_NEW_FRIEND: 'add',
  FAVOURTIE: 'favourite',
  DELETE: 'delete',
  UPDATE_PAGE_NUMBER: 'page_number',
};

export const FRIENDS_DB = [
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
];

export const INITIAL_STATE = {
  search: '',
  pageNumber: 1,
  friends: [...FRIENDS_DB],
};

export const COLORS = {
  YELLOW: '#fdc500',
  RED: '#ef476f',
  BG_COLOR: '#efeeee',
};

export const BOX_SHADOW = {
  INSET: 'inset 4px 4px 6px #ccc, inset -4px -4px 6px #fff',
  OUT: '4px 4px 6px #ccc, -4px -4px 6px #fff',
  // EACH_CARD: '5px 5px 17px #d0cfcf, -5px -5px 17px #ffffff;',
  EACH_CARD: '5px 5px 12px #c6c6c6,-5px -5px 12px #ffffff',
};
