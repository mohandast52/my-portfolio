import {
  describe, it, expect, jest, afterEach,
} from '@jest/globals';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import WeatherApp from './index';

/**
 * Smoke test: WeatherApp fetches the OpenWeatherMap forecast on mount and only
 * renders the amCharts graph once data arrives. jsdom provides no `fetch`, so
 * install a never-resolving stub — it stays in the loading state, with no real
 * network call and no reliance on the CDN-loaded `am4core` global.
 */
describe('smoke: WeatherApp mounts (loading state) without crashing', () => {
  afterEach(() => {
    delete (globalThis as { fetch?: typeof fetch }).fetch;
  });

  it('renders the loader while the forecast request is in flight', () => {
    expect.hasAssertions();
    (globalThis as { fetch?: typeof fetch }).fetch = jest.fn(
      () => new Promise<Response>(() => {}),
    ) as unknown as typeof fetch;
    const { container } = render(<WeatherApp />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
