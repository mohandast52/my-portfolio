import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
// import { ReactComponent as Arrow } from 'static/Images/up-arrow-circle.svg';
import { HeaderContainer } from './styles';

const timeline = gsap.timeline();

const Header = ({ history, dimensions }) => {
  const [menuState, setMenuState] = useState({ isMenuOpened: false });

  useEffect(() => {
    // history.listen(() => {
    //   setMenuState({ isMenuOpened: false });
    // });

    if (menuState.isMenuOpened) {
      timeline
        .to('body', { duration: 0.01, css: { overflow: 'hidden' } })
        .to('.App', {
          duration: 1,
          y: dimensions.width < 654 ? '100vh' : '75vh',
          ease: 'expo.inOut',
        })
        .to('.hamburger-menu span', {
          duration: 0.6,
          delay: -1,
          scale: 0,
          transformOrigin: '50% 0%',
          ease: 'expo.inOut',
        })
        .to('#Path_1', {
          /* animation each svg path using unique ID */
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 5,
          },
        })
        .to('#Path_2', {
          /* animation each svg path using unique ID */
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 20,
          },
        })
        .to('#Line_1', {
          /* animation each svg path using unique ID */
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 40,
            strokeDasharray: 18,
          },
        })
        .to('#circle', {
          /* animation each svg path using unique ID */
          duration: 0.6,
          delay: -0.8,
          css: {
            strokeDashoffset: 0,
          },
        })
        .to('.hamburger-menu-close', {
          /* animation each svg path using unique ID */
          duration: 0.6,
          delay: -0.8,
          css: {
            display: 'block',
          },
        });
    } else {
      // gsap.to("nav", { css: { display: "none" } });
      // gsap.to("body", { css: { overflow: "unset" } });
      timeline
        .to('.App', {
          duration: 1,
          y: 0,
          ease: 'expo.inOut',
        })
        .to('circle', {
          duration: 0.6,
          delay: -0.6,
          css: {
            strokeDashoffset: -193,
            strokeDasharray: 227,
          },
        })
        .to('#Path_1', {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 10,
          },
        })
        .to('#Path_2', {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 10,
          },
        })
        .to('#Line_1', {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 40,
            strokeDasharray: 40,
          },
        })
        .to('.hamburger-menu span', {
          duration: 0.6,
          delay: -0.6,
          scale: 1,
          transformOrigin: '50% 0%',
        })
        .to('.hamburger-menu-close', { css: { display: 'none' } })
        .to('body', { css: { overflow: 'auto' } });
    }
  }, [dimensions.width, history, menuState.isMenuOpened]);

  console.log(menuState.isMenuOpened);

  return (
    <HeaderContainer>
      <div className="container">
        <div className="row v-center space-between">
          <div className="logo">
            <Link href="/">MOHAN.</Link>
          </div>

          <div className="nav-toggle">
            <div
              className="hamburger-menu"
              onClick={() => setMenuState({ isMenuOpened: true })}
            >
              <span />
              <span />
            </div>

            <div
              className="hamburger-menu-close"
              onClick={() => setMenuState({ isMenuOpened: false })}
            >
              {/* <Arrow /> */}
            </div>
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
