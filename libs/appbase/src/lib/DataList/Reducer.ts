// A single derived option row rendered in the list: the unique key, how many
// source records share it, and its checked/index/id metadata.
export interface ListItem {
  id: string;
  index: number;
  checked: boolean;
  key: string;
  count: number;
}

export interface State {
  isActive: boolean;
  isMultiSelect: boolean;
  isCountVisible: boolean;
  checkedList: ListItem[];
  checkedListCopy: ListItem[];
}

// Source data is intentionally untyped: a list of plain strings OR objects with
// an `eyeColor` field (see Helpers/dummyOptions). Keep it `any` so either shape
// flows through without a fake schema.
const getInitalList = (list: any, defaultList?: string[]): ListItem[] => {
  if (!Array.isArray(list)) throw new Error('List should be array');

  /**
   * fetch unique key and count of the key in O(N)
   */
  const getUniqueList = (): Array<{ key: string; count: number }> => {
    const map = new Map<string, number>();

    list.forEach((eachItem: any) => {
      if (typeof eachItem === 'object') {
        const { eyeColor } = eachItem;
        map.set(eyeColor, map.has(eyeColor) ? map.get(eyeColor)! + 1 : 1);
      } else {
        map.set(eachItem, map.has(eachItem) ? map.get(eachItem)! + 1 : 1);
      }
    });

    const uniqueList: Array<{ key: string; count: number }> = [];
    map.forEach((value, key) => uniqueList.push({ key, count: value }));
    return uniqueList;
  };

  return getUniqueList().map((eachItem, index) => ({
    id: `id-${index}`,
    index,
    checked: (defaultList || []).some(item => item === eachItem.key),
    ...eachItem,
  }));
};

interface InitialStateArgs {
  multiSelect?: boolean;
  showCount?: boolean;
  options: any;
  defaultSelected?: string[];
}

export const INITIAL_STATE = ({
  multiSelect,
  showCount,
  options,
  defaultSelected,
}: InitialStateArgs): State => ({
  isActive: false,
  isMultiSelect: !!multiSelect,
  isCountVisible: !!showCount,
  checkedList: getInitalList(options, defaultSelected),
  checkedListCopy: getInitalList(options, defaultSelected),
});

export const API_TYPES = {
  ON_SEARCH_FILTER: 'search list',
  ON_DROPDOWN_CLICK: 'on drowdown click',
  ON_OPTION_SELECT: 'on checkbox change',
} as const;

export type Action =
  | { type: typeof API_TYPES.ON_DROPDOWN_CLICK; payload: boolean }
  | { type: typeof API_TYPES.ON_SEARCH_FILTER; payload: string }
  | {
      type: typeof API_TYPES.ON_OPTION_SELECT;
      payload: { selectedKey: string; updatedList: ListItem[] };
    };

const Reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case API_TYPES.ON_DROPDOWN_CLICK: {
      return { ...state, isActive: action.payload };
    }

    case API_TYPES.ON_SEARCH_FILTER: {
      const { payload } = action;
      const { checkedList, checkedListCopy } = state;
      if (!payload) return { ...state, checkedList: checkedListCopy };

      return {
        ...state,
        isActive: !!payload,
        checkedList: checkedList.filter(ck => {
          const { key } = ck;
          return key.toLowerCase().includes(payload.toLowerCase());
        }),
      };
    }

    case API_TYPES.ON_OPTION_SELECT: {
      const { isMultiSelect, checkedListCopy } = state;
      const { selectedKey, updatedList } = action.payload;
      let copy: ListItem[] = [];

      if (isMultiSelect) {
        copy = [...checkedListCopy].map(item => {
          const currentItem = updatedList.find(({ key }) => key === item.key);
          return {
            ...item,
            checked: currentItem ? currentItem.checked : item.checked,
          };
        });
      } else {
        copy = [...checkedListCopy].map(item => ({
          ...item,
          checked: item.key === selectedKey,
        }));
      }

      return {
        ...state,
        checkedList: updatedList,
        checkedListCopy: copy,
      };
    }

    default:
      throw new Error("API type doesn't exits");
  }
};

export default Reducer;
