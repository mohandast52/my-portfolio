import { optionsOne } from '../Helpers/dummyOptions';

const getInitalList = list => list.map((eachItem, index) => ({
  id: `id-${index}`,
  index,
  title: eachItem,
  checked: false,
}));

export const INITIAL_STATE = {
  isAllChecked: false,
  checkedList: getInitalList(optionsOne),
  selectedList: [],
};

export const API_TYPES = {
  ON_CHECKBOX_CHANGE: 'on checkbox change',
  ON_ALL_CHECK: 'on all checkbox change',
};

const Reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
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
