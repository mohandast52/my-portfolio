import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from 'components/Dashboard';
import Timer from 'components/Timer';

/**
 * Smoke tests: a minimal tripwire that the API-less screens still mount.
 * These intentionally exercise the module-resolver aliases + styled-components
 * render path so the dependency-upgrade phases (React 18, styled-components 6,
 * antd 5) have something cheap to break against.
 */
describe('smoke: API-less components mount without crashing', () => {
  it('renders the Dashboard', () => {
    expect.hasAssertions();
    const { container } = render(<Dashboard />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders the Timer with its three stopwatches', () => {
    expect.hasAssertions();
    const { getAllByText } = render(<Timer />);
    expect(getAllByText('Start')).toHaveLength(3);
  });
});
