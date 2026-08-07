import React from 'react';
import { FaGithub, FaStar, FaArrowRightLong } from 'react-icons/fa6';
import type { Repo } from '../github';

const GITHUB_URL = 'https://github.com/mohandast52';
import {
  Section, Container, Eyebrow, SectionTitle, SectionHead,
} from '../styles';
import Reveal from '../reveal';
import {
  Grid, RepoCard, RepoName, RepoDesc, Meta, LangDot, AllLink, Empty,
} from './styles';

interface OpenSourceProps {
  repos: Repo[];
}

// A few well-known language colours; anything else uses the accent.
const LANG_COLOR: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Ruby: '#701516',
  Java: '#b07219',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Python: '#3572A5',
};

const OpenSource = ({ repos }: OpenSourceProps) => (
  <Section id="github">
    <Container>
      <SectionHead>
        <Reveal><Eyebrow>open source</Eyebrow></Reveal>
        <Reveal delay={60}>
          <SectionTitle>More on GitHub.</SectionTitle>
        </Reveal>
      </SectionHead>

      {repos.length === 0 ? (
        <Reveal>
          <Empty>
            Live repos are taking a break — browse them directly on
            {' '}
            <a href={GITHUB_URL} target="_blank" rel="noreferrer">
              github.com/mohandast52
            </a>
            .
          </Empty>
        </Reveal>
      ) : (
        <Grid>
          {repos.slice(0, 9).map((repo, i) => (
            <Reveal key={repo.id} delay={(i % 3) * 70}>
              <RepoCard href={repo.url} target="_blank" rel="noreferrer">
                <RepoName>
                  <FaGithub aria-hidden />
                  {repo.name}
                </RepoName>
                <RepoDesc>{repo.description || 'No description provided.'}</RepoDesc>
                <Meta>
                  {repo.language && (
                    <span className="lang">
                      <LangDot $color={LANG_COLOR[repo.language] || '#8B5CF6'} />
                      {repo.language}
                    </span>
                  )}
                  {repo.stars > 0 && (
                    <span className="stars">
                      <FaStar aria-hidden />
                      {repo.stars}
                    </span>
                  )}
                </Meta>
              </RepoCard>
            </Reveal>
          ))}
        </Grid>
      )}

      <Reveal delay={120}>
        <AllLink href={GITHUB_URL} target="_blank" rel="noreferrer">
          View all repositories
          <FaArrowRightLong aria-hidden />
        </AllLink>
      </Reveal>
    </Container>
  </Section>
);

export default OpenSource;
