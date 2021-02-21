import { API_TYPES } from './Helpers';

const Reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case API_TYPES.SEARCH_CHANGE: {
      const listCopy = [...state.listCopy].filter(list => {
        const { company, roles } = list || {};
        const { name } = company;

        return (
          name.toLowerCase().includes(payload.toLowerCase())
          || roles.some(role => role.title.toLowerCase().includes(payload.toLowerCase()))
        );
      });

      return {
        ...state,
        pageNumber: 1,
        search: payload,
        list: listCopy,
      };
    }

    // case API_TYPES.UPDATE_PAGE_NUMBER: {
    //   return { ...state, pageNumber: payload };
    // }

    default:
      throw new Error("Api Type doesn't exits");
  }
};

export default Reducer;
