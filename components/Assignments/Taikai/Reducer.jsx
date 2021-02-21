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

    case API_TYPES.ON_TECH_STACK_CHANGE: {
      if (!payload || payload.length === 0) {
        return { ...state, list: state.listCopy };
      }

      const listCopy = [...state.listCopy].filter(list => {
        const { roles } = list || {};
        return roles.some(role => role.skills.some(skill => payload.includes(skill)));
      });

      return { ...state, pageNumber: 1, list: listCopy };
    }

    case API_TYPES.ON_LOCATION_CHANGE: {
      if (!payload || payload.length === 0) {
        return { ...state, list: state.listCopy };
      }

      const listCopy = [...state.listCopy].filter(list => {
        const { roles } = list || {};
        return roles.some(role => role.locations.some(skill => payload.includes(skill)));
      });

      return { ...state, pageNumber: 1, list: listCopy };
    }

    case API_TYPES.ON_SALARY_CHANGE: {
      if (!payload || payload.length === 0) {
        return { ...state, list: state.listCopy };
      }

      const listCopy = [...state.listCopy].filter(list => {
        const { roles } = list || {};
        return roles.some(
          role => role.compensation_in_thousands.min >= payload[0]
            && role.compensation_in_thousands.max <= payload[1],
        );
      });

      return { ...state, pageNumber: 1, list: listCopy };
    }

    case API_TYPES.UPDATE_PAGE_NUMBER: {
      return { ...state, pageNumber: payload };
    }

    default:
      throw new Error("Api Type doesn't exits");
  }
};

export default Reducer;
