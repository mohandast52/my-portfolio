import { syncTypes } from './_types';

const INIT_STATE = {
  value: 0,
};

const counterReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case syncTypes.INCREMENT_COUNTER:
      return { ...state, value: state.value + 1 };
    case syncTypes.DECREMENT_COUNTER:
      return { ...state, value: state.value - 1 };
    default:
      return { ...state };
  }
};

export default counterReducer;
