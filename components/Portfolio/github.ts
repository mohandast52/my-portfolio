// Live GitHub repos for the "open source" section. Fetched server-side in
// getStaticProps (pages/index.tsx) and revalidated periodically (ISR), so no
// token is ever shipped to the client.

const GITHUB_USER = 'mohandast52';

export interface Repo {
  id: number;
  name: string;
  description: string | null;
  url: string;
  language: string | null;
  stars: number;
  forks: number;
  pushedAt: string;
}

// Only the fields we consume from the GitHub REST API.
interface GitHubApiRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  pushed_at: string;
  fork: boolean;
  archived: boolean;
}

/**
 * Fetches the user's public repos. Returns [] on any failure so a flaky API
 * never breaks the build. Set GITHUB_TOKEN in .env.local only if the 60 req/hr
 * unauthenticated limit is hit.
 */
export const fetchRepos = async (): Promise<Repo[]> => {
  const token = process.env.GITHUB_TOKEN;
  const headers: Record<string, string> = { Accept: 'application/vnd.github+json' };
  if (token) headers.Authorization = `Bearer ${token}`;

  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=pushed`,
      { headers },
    );
    if (!res.ok) {
      console.warn(`[github] repos fetch failed: ${res.status} ${res.statusText}`);
      return [];
    }

    const data = (await res.json()) as GitHubApiRepo[];

    return data
      // drop forks, archived, and the profile-README repo (named after the user)
      .filter(r => !r.fork && !r.archived && r.name !== GITHUB_USER)
      .map(
        (r): Repo => ({
          id: r.id,
          name: r.name,
          description: r.description,
          url: r.html_url,
          language: r.language,
          stars: r.stargazers_count,
          forks: r.forks_count,
          pushedAt: r.pushed_at,
        }),
      )
      // most stars first, then most recently pushed
      .sort((a, b) => b.stars - a.stars || b.pushedAt.localeCompare(a.pushedAt));
  } catch (err) {
    console.warn('[github] repos fetch error:', err);
    return [];
  }
};
