import {
  describe, it, expect, jest, afterEach,
} from '@jest/globals';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import Valory from './index';

/**
 * Smoke test: Valory fetches a bitcoin price on mount. jsdom provides no
 * `fetch`, so install a never-resolving stub — it stays in the loading state,
 * with no real network call.
 */
describe('smoke: Valory mounts (loading state) without crashing', () => {
  afterEach(() => {
    delete (globalThis as { fetch?: typeof fetch }).fetch;
  });

  it('renders while the price request is in flight', () => {
    expect.hasAssertions();
    (globalThis as { fetch?: typeof fetch }).fetch = jest.fn(
      () => new Promise<Response>(() => {}),
    ) as unknown as typeof fetch;
    const { container } = render(<Valory />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
