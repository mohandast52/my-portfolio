import Head from 'next/head';
import PortfolioV2 from 'components/PortfolioV2';

// Thin route → the v2 lib. Overrides the app-wide <title> from _app for this
// alternate landing page.
const V2Page = () => (
  <>
    <Head>
      <title>Mohan Das — Senior Frontend Engineer</title>
    </Head>
    <PortfolioV2 />
  </>
);

export default V2Page;
