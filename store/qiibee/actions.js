import { syncTypes } from './_types';

export const incrementCounter = () => ({
  type: syncTypes.INCREMENT_COUNTER,
  data: 1,
});

export const decrementCounter = () => ({
  type: syncTypes.DECREMENT_COUNTER,
  data: -1,
});
