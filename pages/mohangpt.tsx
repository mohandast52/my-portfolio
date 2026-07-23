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
    </Head>
    <MohanGPT />
  </>
);

export default MohanGPTPage;
