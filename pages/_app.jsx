import { Container } from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import PropTypes from 'prop-types';
import * as Progress from 'util/progress';
import Layout from 'components/Layout';

const MyApp = ({ Component, pageProps }) => (
  <Container>
    <Head>
      <title>Mohan Portfolio</title>
    </Head>

    <Layout>
      <Component {...pageProps} />
    </Layout>
  </Container>
);

MyApp.propTypes = {
  Component: PropTypes.element.isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};

/* MyApp.defaultProps = {
  resetOnModalCloseFn: () => {},
}; */

export default MyApp;

Router.onRouteChangeStart = () => {
  Progress.start();
};

Router.onRouteChangeComplete = () => {
  Progress.stop();
};
