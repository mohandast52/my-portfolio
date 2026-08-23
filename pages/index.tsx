import Head from 'next/head';
import MohanGPT from '@my-portfolio/mohan-gpt';

// The homepage is MohanGPT: an interactive, chat-shaped résumé. The page sets
// its own title and OG tags, overriding the app-wide defaults in _app.
const HomePage = () => (
  <>
    <Head>
      <title>MohanGPT: ask me about Mohan Das</title>
      <meta
        name="description"
        content="An interactive résumé: ask MohanGPT about Mohan Das's experience, projects, skills and contact details, or switch to the classic résumé view."
      />
      <meta property="og:title" content="MohanGPT: ask me about Mohan Das" />
      <meta
        property="og:description"
        content="An interactive résumé you can talk to. Ask about experience, projects, skills and contact details, or read the classic résumé view."
      />
      <meta property="og:type" content="profile" />
    </Head>
    <MohanGPT />
  </>
);

export default HomePage;
