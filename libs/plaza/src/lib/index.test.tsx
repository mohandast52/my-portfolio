import { describe, it, expect } from '@jest/globals';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import Plaza from './Assignment';

/** Smoke test: a minimal tripwire that this API-less screen still mounts. */
describe('smoke: Plaza mounts without crashing', () => {
  it('renders', () => {
    expect.hasAssertions();
    const { container } = render(<Plaza />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
