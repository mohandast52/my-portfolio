import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { makeStore } from 'store';
import { QiibeeAssignment as Qiibee } from '@my-portfolio/qiibee';

/**
 * Redux tripwire: renders the connect()-wrapped Qiibee sign-in through a real
 * Redux Toolkit store + react-redux <Provider>. Guards the Phase 5 migration
 * (react-redux 9, RTK configureStore, next-redux-wrapper 8) and anything that
 * later touches the redux wiring.
 */
describe('<Qiibee /> (redux-connected)', () => {
  it('mounts the sign-in screen wired to the RTK store', () => {
    expect.hasAssertions();
    const { container } = render(
      <Provider store={makeStore()}>
        <Qiibee />
      </Provider>,
    );
    expect(container.firstChild).toBeInTheDocument();
  });
});
