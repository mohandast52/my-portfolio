import Head from 'next/head';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';

import Layout from 'components/Layout';
import GlobalStyle from 'components/GlobalStyles';
import { qiibeeReducer } from '@my-portfolio/qiibee';

/*
 * App-level redux store composition. Each feature owns its slice (here, qiibee);
 * the app composes them. The legacy qiibee reducer mutates state in place, so
 * RTK's dev/test-only immutability & serializability checks are disabled to
 * preserve the pre-RTK behavior.
 */
const makeStore = () => configureStore({
  reducer: { qiibee: qiibeeReducer },
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  }),
});

const wrapper = createWrapper(makeStore);

/*
 * styled-components v6 forwards unknown props to the DOM (React warns about
 * e.g. `bgColor`, `isCelcius`, `hasError`). Filter props for host elements
 * with the standard @emotion/is-prop-valid recipe; custom components still
 * receive every prop.
 */
const shouldForwardProp = (propName: string, target: unknown) => (typeof target === 'string' ? isPropValid(propName) : true);

const MyApp = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps = {} } = props;

  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <Provider store={store}>
        <GlobalStyle />
        <Head>
          <title>Mohan Das — Software Developer</title>
          <meta
            name="description"
            content="Mohan Das — software developer with 7+ years in React & TypeScript, now going full-stack. Projects, experience, and open-source work."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:title" content="Mohan Das — Software Developer" />
          <meta
            property="og:description"
            content="Software developer with 7+ years in React & TypeScript, now going full-stack — projects, experience, and open-source work."
          />
          <meta property="og:type" content="website" />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </StyleSheetManager>
  );
};

export default MyApp;
