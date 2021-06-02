import { syncTypes } from './_types';

export const incrementCounter = () => ({
  type: syncTypes.INCREMENT_COUNTER,
  data: 1,
});

export const decrementCounter = () => ({
  type: syncTypes.DECREMENT_COUNTER,
  data: -1,
});

// export const isUserPresent = params => (dispatch, getState) => {
//   const { customers } = getState();
//   console.log(params);
//   console.log(customers);
// };
