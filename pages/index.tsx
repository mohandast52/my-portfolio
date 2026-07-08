import type { GetStaticProps } from 'next';
import Portfolio from 'components/Portfolio';
import { fetchRepos, type Repo } from 'components/Portfolio/github';

interface HomePageProps {
  repos: Repo[];
}

const HomePage = ({ repos }: HomePageProps) => <Portfolio repos={repos} />;

// Fetch GitHub repos at build time and refresh them periodically (ISR). The
// fetch runs server-side only, so no token is ever shipped to the client.
export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const repos = await fetchRepos();
  return {
    props: { repos },
    revalidate: 60 * 60 * 6, // 6 hours
  };
};

export default HomePage;
