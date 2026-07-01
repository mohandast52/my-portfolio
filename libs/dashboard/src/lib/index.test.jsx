import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from './index';

/**
 * Smoke test: a minimal tripwire that this API-less screen still mounts.
 * Exercises the styled-components render path so the dependency-upgrade phases
 * (React 18, styled-components 6, antd 5) have something cheap to break against.
 */
describe('smoke: Dashboard mounts without crashing', () => {
  it('renders the Dashboard', () => {
    expect.hasAssertions();
    const { container } = render(<Dashboard />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
