import Head from 'next/head';
import MohanGPT from '@my-portfolio/mohan-gpt';

// Thin route → the mohan-gpt lib. Overrides the app-wide <title> from _app for
// this alternate, chat-shaped landing page.
const MohanGPTPage = () => (
  <>
    <Head>
      <title>MohanGPT — ask me about Mohan Das</title>
      <meta
        name="description"
        content="An interactive résumé: ask MohanGPT about Mohan Das’s experience, projects, skills and contact details, or switch to the classic résumé view."
      />
      {/* Override the app-wide OG tags from _app for this page. */}
      <meta property="og:title" content="MohanGPT — ask me about Mohan Das" />
      <meta
        property="og:description"
        content="An interactive résumé you can talk to. Ask about experience, projects, skills and contact details — or read the classic résumé view."
      />
      <meta property="og:type" content="profile" />
    </Head>
    <MohanGPT />
  </>
);

export default MohanGPTPage;
