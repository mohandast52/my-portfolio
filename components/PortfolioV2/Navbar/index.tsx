import React from 'react';
import { PROFILE } from '../../Portfolio/data';
import Reveal from '../../Portfolio/reveal';
import { Bar, Inner } from './styles';

// Top nav for the v2 page. "Contact" is a mailto: (there is no dedicated
// contact section in the lean-5 layout); the rest are in-page anchors.
const Navbar = () => (
  <Bar>
    <Reveal>
      <Inner>
        <a className="brand" href="#top">
          mohandas
          <span>.</span>
        </a>
        <div className="links">
          <a href="#about">About</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#projects">Projects</a>
          <a className="contact" href={`mailto:${PROFILE.email}`}>Contact</a>
        </div>
      </Inner>
    </Reveal>
  </Bar>
);

export default Navbar;
