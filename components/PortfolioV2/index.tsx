import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Marquee from './Marquee';
import About from './About';
import Capabilities from './Capabilities';
import Projects from './Projects';
import { Page } from './styles';

// v2 — a bolder, animation-forward alternate landing page (template-derived,
// re-pointed at Mohan). Lives at /v2; the v1 Portfolio stays the live home.
// Lean 5 sections: Hero → Marquee → About → Capabilities → Projects.
const PortfolioV2 = () => (
  <Page>
    <Navbar />
    <Hero />
    <Marquee />
    <About />
    <Capabilities />
    <Projects />
  </Page>
);

export default PortfolioV2;
