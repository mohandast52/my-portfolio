import { describe, it, expect } from '@jest/globals';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import SolidPrinciples from './index';

/** Smoke test: a minimal tripwire that this API-less screen still mounts. */
describe('smoke: SolidPrinciples mounts without crashing', () => {
  it('renders', () => {
    expect.hasAssertions();
    const { container } = render(<SolidPrinciples />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
