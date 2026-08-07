import React, { useEffect, useState } from 'react';
import { NAV_LINKS } from '../data';
import {
  Bar, Inner, Logo, Links, Cta,
} from './styles';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Bar $scrolled={scrolled}>
      <Inner>
        <Logo href="#top">
          mohandas
          <span>.</span>
        </Logo>

        <Links>
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </Links>

        <Cta href="#contact">Get in touch</Cta>
      </Inner>
    </Bar>
  );
};

export default Navbar;
