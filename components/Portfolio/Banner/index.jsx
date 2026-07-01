import React from 'react';
import Link from 'next/link';
// import { ReactComponent as RightArrow } from '../assets/arrow-right.svg';
import { Main } from './styles';

const Banner = () => (
  <Main>
    <div className="container">
      <div className="row">
        <h2>
          <div className="line">
            <span>Hi, I&apos;m Mohan from Mumbai, India</span>
          </div>

          <div className="line">
            <span>Glad you are here!</span>
          </div>
        </h2>

        <div className="btn-row">
          <Link href="/">
            More about me
            {/* <RightArrow /> */}
          </Link>
        </div>
      </div>
    </div>
  </Main>
);

export default Banner;
