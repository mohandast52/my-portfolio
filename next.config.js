module.exports = {
  productionBrowserSourceMaps: true,
  publicRuntimeConfig: {},
  // SWC replaces babel-plugin-styled-components (no .babelrc anymore).
  compiler: {
    styledComponents: true,
  },
};
