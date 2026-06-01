import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import qiibee from './qiibee';

export const makeStore = () => configureStore({
  reducer: { qiibee },
  /*
   * The legacy qiibee reducer mutates nested state in place (e.g. FOLLOW_BRAND
   * pushes into state.currentUser.brands_following, REDEEM_POINTS reassigns a
   * shared nested object). RTK's dev/test-only immutability & serializability
   * checks would throw on those dispatches, so they are disabled here to
   * preserve the pre-RTK (plain createStore) behavior. Re-enable once the
   * reducer is refactored to be immutable (createSlice/Immer).
   */
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  }),
});

export const wrapper = createWrapper(makeStore);

export default makeStore;
