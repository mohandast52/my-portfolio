import { describe, it, expect } from '@jest/globals';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Qiibee from './index';
import qiibeeReducer from './state';

/**
 * Redux tripwire: renders the connect()-wrapped Qiibee sign-in through a real
 * Redux Toolkit store + react-redux <Provider>. Guards the redux wiring
 * (react-redux 9, RTK configureStore, the connected components).
 */
describe('<Qiibee /> (redux-connected)', () => {
  it('mounts the sign-in screen wired to the RTK store', () => {
    expect.hasAssertions();
    // The legacy qiibee reducer mutates in place, so disable RTK's checks —
    // mirrors the app store composed in pages/_app.tsx.
    const store = configureStore({
      reducer: { qiibee: qiibeeReducer },
      middleware: getDefaultMiddleware => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      }),
    });
    const { container } = render(
      <Provider store={store}>
        <Qiibee />
      </Provider>,
    );
    expect(container.firstChild).toBeInTheDocument();
  });
});
