import { describe, it, expect } from '@jest/globals';
import { render } from '@testing-library/react';
import Timer from './index';

/**
 * Smoke test: a minimal tripwire that this API-less screen still mounts.
 * Exercises the styled-components render path so the dependency-upgrade phases
 * (React 18, styled-components 6, antd 5) have something cheap to break against.
 */
describe('smoke: Timer mounts without crashing', () => {
  it('renders the Timer with its three stopwatches', () => {
    expect.hasAssertions();
    const { getAllByText } = render(<Timer />);
    expect(getAllByText('Start')).toHaveLength(3);
  });
});
