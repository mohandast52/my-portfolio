const getInitalList = list => list.map((eachItem, index) => {
  let title = eachItem;
  let value = eachItem;

  if (typeof eachItem === 'object') {
    title = eachItem.title;
    value = eachItem.path;
  }

  return {
    id: `id-${index}`,
    index,
    value,
    title,
    checked: false,
  };
});

export const INITIAL_STATE = options => ({
  isActive: false,
  isAllChecked: false,
  checkedList: getInitalList(options),
  checkedListCopy: getInitalList(options),
  selectedList: [],
});

export const API_TYPES = {
  ON_SEARCH_FILTER: 'search list',
  ON_DROPDOWN_CLICK: 'on drowdown click',
  ON_CHECKBOX_CHANGE: 'on checkbox change',
  ON_ALL_CHECK: 'on all checkbox change',
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
          const { title } = ck;
          return title.toLowerCase().includes(payload.toLowerCase());
        }),
      };
    }

    case API_TYPES.ON_CHECKBOX_CHANGE: {
      const { checkedList, selectedList } = state;
      const { index, isChecked } = payload;

      /* checklist copy */
      const copy = [...checkedList];
      checkedList[index].checked = isChecked;

      /* selected checkboxes copy */

      let selectedCopy = [...selectedList];
      if (isChecked) {
        const checkedItem = checkedList.find(
          ({ index: eachIndex }) => index === eachIndex,
        );
        selectedCopy.push(checkedItem);
      } else {
        selectedCopy = selectedCopy.filter(
          ({ index: eachIndex }) => index !== eachIndex,
        );
      }

      return {
        ...state,
        checkedList: copy,
        selectedList: selectedCopy,
      };
    }

    case API_TYPES.ON_ALL_CHECK: {
      const { checkedList } = state;
      const { isChecked } = payload;

      const checkListCopy = checkedList.map(ck => ({
        ...ck,
        checked: !!isChecked,
      }));

      return {
        ...state,
        isAllChecked: isChecked,
        checkedList: checkListCopy,
        selectedList: isChecked ? checkListCopy : [],
      };
    }

    default:
      throw new Error("API type doesn't exits");
  }
};

export default Reducer;
