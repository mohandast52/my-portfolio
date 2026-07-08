import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Stack from './Stack';
import Work from './Work';
import OpenSource from './OpenSource';
import Contact from './Contact';
import type { Repo } from './github';
import { Page } from './styles';

interface PortfolioProps {
  /** Live GitHub repos, fetched in getStaticProps (see pages/index.tsx). */
  repos?: Repo[];
}

const Portfolio = ({ repos = [] }: PortfolioProps) => (
  <>
    <Navbar />
    <Page>
      <Hero />
      <About />
      <Experience />
      <Stack />
      <Work />
      <OpenSource repos={repos} />
      <Contact />
    </Page>
  </>
);

export default Portfolio;
