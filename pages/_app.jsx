import Head from 'next/head';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
// import * as Progress from 'util/progress';

import Layout from 'components/Layout';
import GlobalStyle from 'components/GlobalStyles';
import { wrapper } from '../store';

require('./styles.less');

const MyApp = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

  return (
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
  );
};

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({}),
};

MyApp.defaultProps = {
  pageProps: {},
};

export default MyApp;

// Router.onRouteChangeStart = () => {
//   Progress.start();
// };

// Router.onRouteChangeComplete = () => {
//   Progress.stop();
// };

// https://github.com/vercel/next.js/issues/7945
