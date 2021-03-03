const getInitalList = (list, defaultList) => {
  if (!Array.isArray(list)) return new Error('List should be array');

  /**
   * fetch unique key and count of the key in O(N)
   */
  const getUniqueList = () => {
    const map = new Map();

    list.forEach(eachItem => {
      if (typeof eachItem === 'object') {
        const { eyeColor } = eachItem;
        map.set(eyeColor, map.has(eyeColor) ? map.get(eyeColor) + 1 : 1);
      } else {
        map.set(eachItem, map.has(eachItem) ? map.get(eachItem) + 1 : 1);
      }
    });

    const uniqueList = [];
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

export const INITIAL_STATE = ({
  multiSelect,
  showCount,
  options,
  defaultSelected,
}) => ({
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
};

const Reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case API_TYPES.ON_DROPDOWN_CLICK: {
      return {
        ...state,
        isActive: payload,
      };
    }

    case API_TYPES.ON_SEARCH_FILTER: {
      const { checkedList, checkedListCopy } = state;
      if (!payload) return { ...state, checkedList: checkedListCopy };

      return {
        ...state,
        isActive: payload,
        checkedList: checkedList.filter(ck => {
          const { key } = ck;
          return key.toLowerCase().includes(payload.toLowerCase());
        }),
      };
    }

    case API_TYPES.ON_OPTION_SELECT: {
      const { isMultiSelect, checkedListCopy } = state;
      const { selectedKey, updatedList } = payload;
      let copy = [];

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
