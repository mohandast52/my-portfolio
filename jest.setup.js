import '@testing-library/jest-dom';

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
