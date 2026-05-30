import App from 'next/app';
import Head from 'next/head';
// import Router from 'next/router';
import { createWrapper } from 'next-redux-wrapper';
import PropTypes from 'prop-types';
// import * as Progress from 'util/progress';

import Layout from 'components/Layout';
import GlobalStyle from 'components/GlobalStyles';
import initStore from '../store';

require('./styles.less');

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <GlobalStyle />
        <Head>
          <title>Mohan Portfolio</title>
          <meta name="title" content="Manage your veOLAS and buOLAS" />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    );
  }
}

MyApp.propTypes = {
  Component: PropTypes.element.isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};

/* MyApp.defaultProps = {
  resetOnModalCloseFn: () => {},
}; */


// Router.onRouteChangeStart = () => {
//   Progress.start();
// };

// Router.onRouteChangeComplete = () => {
//   Progress.stop();
// };

const wrapper = createWrapper(initStore);
export default wrapper.withRedux(MyApp);

// https://github.com/vercel/next.js/issues/7945
