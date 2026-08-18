import { describe, it, expect } from '@jest/globals';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import Taikai from './index';

/** Smoke test: a minimal tripwire that this API-less screen still mounts. */
describe('smoke: Taikai mounts without crashing', () => {
  it('renders', () => {
    expect.hasAssertions();
    const { container } = render(<Taikai />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
