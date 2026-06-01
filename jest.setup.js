import '@testing-library/jest-dom';

// Next 13's useRouter() throws "NextRouter was not mounted" outside a router
// context (Next 12 returned a stub). Provide a stub router for component tests.
jest.mock('next/router', () => ({
  useRouter: () => ({
    push: () => Promise.resolve(true),
    replace: () => Promise.resolve(true),
    prefetch: () => Promise.resolve(),
    pathname: '/',
    asPath: '/',
    query: {},
    events: { on: () => {}, off: () => {}, emit: () => {} },
  }),
}));

// jsdom does not implement matchMedia, which antd's responsive observer calls
// on render. Provide a no-op stub so antd components can mount under Jest.
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
});
