import React from 'react';
// import { ReactComponent as RightArrow } from '../assets/arrow-right.svg';
import { Main } from './styles';

const Banner = () => (
  <Main>
    <div className="container">
      <div className="row">
        <h2>
          <div className="line">
            <span>Creating Unique brand is</span>
          </div>

          <div className="line">
            <span>What we do</span>
          </div>
        </h2>

        <div className="btn-row">
          <a href="/">
            More about us
            {/* <RightArrow /> */}
          </a>
        </div>
      </div>
    </div>
  </Main>
);

export default Banner;
