/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import Home from './Pages/Home';
import About from './Pages/About';
import CaseStudies from './Pages/CaseStudies';
import Services from './Pages/Services';
import Approch from './Pages/Approch';
import Header from './Header';
import Navigation from './Navigation';
import { Container } from './styles';

const debounce = (fn, ms = 300) => {
  let timer;
  return () => {
    clearInterval(timer);
    timer = setTimeout(() => {
      fn();
    }, ms);
  };
};

const PATH = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/about', name: 'Home', Component: About },
  { path: '/case-studies', name: 'Case Studies', Component: CaseStudies },
  { path: '/services', name: 'Services', Component: Services },
  { path: '/approach', name: 'Approach', Component: Approch },
];

const App = () => {
  // const [dimensions, setDimensions] = useState({
  //   width: window ? window.innerWidth : 0,
  //   height: window ? window.innerHeight : 0,
  // });

  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  const onResize = debounce(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  });

  useEffect(() => {
    const vh = dimensions.height * 0.01;
    /* Then we set the value in the --vh custom property to the root of the document */
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    /* prevents flashing */
    gsap.to('body', 0, { css: { visibility: 'visible' } });

    /* resize listener */
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [dimensions.height, onResize]);

  return (
    <Container>
      <Header dimensions={dimensions} />

      <div className="App">
        {PATH.map(({ path, Component }) => (
          <Link href={path} key={path}>
            <Component />
          </Link>
        ))}
      </div>

      <Navigation />
    </Container>
  );
};

export default App;
