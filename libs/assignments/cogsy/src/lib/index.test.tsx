import { describe, it, expect } from '@jest/globals';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import Cogsy from './index';

/** Smoke test: a minimal tripwire that this API-less screen still mounts. */
describe('smoke: Cogsy mounts without crashing', () => {
  it('renders', () => {
    expect.hasAssertions();
    const { container } = render(<Cogsy />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
