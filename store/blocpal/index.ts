import { apiTypes, syncTypes } from './_types';

const initialState = {};

const blocpalReducer = (
  state: Record<string, unknown> = initialState,
  action: { type: string; data?: Record<string, unknown> },
) => {
  const { data } = action;

  switch (action.type) {
    case apiTypes.GET_ENQUIRIES: {
      return {
        ...state,
        data,
      };
    }

    case syncTypes.SET_STORE_STATE: {
      return { ...state, ...action.data };
    }

    default:
      return state;
  }
};

export default blocpalReducer;
