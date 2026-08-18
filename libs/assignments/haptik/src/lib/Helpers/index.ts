/* eslint-disable no-useless-escape */

/* A single friend record in the in-memory list. */
export interface Friend {
  id: string;
  name: string;
  isFavourite: boolean;
  isDeleted: boolean;
}

/* The reducer's state tree for the friends list. */
export interface State {
  sortByFavourite: boolean;
  search: string;
  newFriendName: string;
  pageNumber: number;
  friends: Friend[];
  /* copy of friends to keep original friendsList! */
  friendsCopy: Friend[];
}

export const API_TYPES = {
  TOGGLE_FAV_SORT: 'sort_by_favourite',
  SEARCH_CHANGE: 'search',
  NEW_FRIEND_NAME: 'add_friend',
  ADD_NEW_FRIEND: 'add',
  FAVOURTIE: 'favourite',
  DELETE: 'delete',
  UPDATE_PAGE_NUMBER: 'page_number',
} as const;

export const FRIENDS_DB: Friend[] = [
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
  {
    id: 'unique-id-3',
    name: 'Mohan Das',
    isFavourite: false,
    isDeleted: false,
  },
  {
    id: 'unique-id-4',
    name: 'Mohan',
    isFavourite: true,
    isDeleted: false,
  },
  {
    id: 'unique-id-5',
    name: 'Mohan Stark',
    isFavourite: true,
    isDeleted: false,
  },
  /*
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

export const INITIAL_STATE: State = {
  sortByFavourite: false,
  search: '',
  newFriendName: '',
  pageNumber: 1,
  friends: [...FRIENDS_DB],
  friendsCopy: [
    ...FRIENDS_DB,
  ] /* copy of friends to keep original friendsList! */,
};

export const isValidName = (name: string): boolean => {
  if (!name.trim()) return false;

  /* checking for special characters */
  return !/[~`!#$%\^&*+=\-\[\]\();,/{}|\\":<>\?]/g.test(name);
};
