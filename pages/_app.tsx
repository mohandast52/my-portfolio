import Head from 'next/head';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';
// import * as Progress from 'util/progress';

import Layout from 'components/Layout';
import GlobalStyle from 'components/GlobalStyles';
import { wrapper } from '../store';

/*
 * styled-components v6 forwards unknown props to the DOM (React warns about
 * e.g. `bgColor`, `isCelcius`, `hasError`). Filter props for host elements
 * with the standard @emotion/is-prop-valid recipe; custom components still
 * receive every prop.
 */
const shouldForwardProp = (propName: string, target: any) => (typeof target === 'string' ? isPropValid(propName) : true);

const MyApp = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps = {} } = props;

  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <Provider store={store}>
        <GlobalStyle />
        <Head>
          <title>Mohan Portfolio</title>
          <meta name="title" content="Manage your veOLAS and buOLAS" />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </StyleSheetManager>
  );
};

export default MyApp;

// Router.onRouteChangeStart = () => {
//   Progress.start();
// };

// Router.onRouteChangeComplete = () => {
//   Progress.stop();
// };

// https://github.com/vercel/next.js/issues/7945
