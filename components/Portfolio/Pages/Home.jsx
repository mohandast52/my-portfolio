import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import IntroOverlay from '../IntroOverlay';
import Banner from '../Banner';
import Cases from '../Cases';

const timeline = gsap.timeline();

const fetchAnimation = onAnimationComplete => {
  timeline
    .from('.line span', 1.8, {
      opacity: 0,
      y: 100,
      ease: 'power4.out',
      delay: 1,
      skewY: 7,
      stagger: {
        amount: 0.3,
      },
    })
    .to('.overlay-top', 1.6, {
      height: 0,
      ease: 'expo.inOut',
      stagger: 0.4,
    })
    .to('.overlay-bottom', 1.6, {
      width: 0,
      ease: 'expo.inOut',
      delay: -0.8,
      stagger: {
        amount: 0.4,
      },
    })
    /* overlay is still at top, so need to remove for making it interactive! */
    .to('.intro-overlay', 0, { css: { display: 'none' } })
    .to('.case-image img', 1.6, {
      scale: 1.4,
      ease: 'expo.inOut',
      delay: -2,
      stagger: {
        amount: 0.4,
      },
      onComplete: onAnimationComplete,
    });
};

const Home = () => {
  const [isAnimationComplete, setAnimationComplete] = useState(false);

  const animationFinished = () => {
    setAnimationComplete(true);
  };

  useEffect(() => {
    fetchAnimation(animationFinished);
  }, []);

  return (
    <>
      {/* unmounting once the animation is completed! */}
      {!isAnimationComplete && <IntroOverlay />}

      <Banner />
      <Cases />
    </>
  );
};

export default Home;
