import { describe, it, expect } from '@jest/globals';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import Appbase from './index';

/**
 * Smoke test: mount the searchable/multi-select DataList screen (the lib's
 * default export). The animated `Circles` export is a separate entry and
 * carries the only timer, so it's intentionally left out of this tripwire.
 */
describe('smoke: Appbase mounts without crashing', () => {
  it('renders', () => {
    expect.hasAssertions();
    const { container } = render(<Appbase />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
