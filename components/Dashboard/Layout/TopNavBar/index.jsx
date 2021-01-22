import React from 'react';
import { FaPlusCircle, FaRegBell } from 'react-icons/fa';
import {
  LeftNavBarContainer, ColumnOne, ColumnTwo, Logo,
} from './styles';

const LeftNavBar = () => (
  <LeftNavBarContainer>
    <ColumnOne>
      <Logo>
        <span />
        <span />
        <span />
      </Logo>
      <div className="name">Portfolio</div>
      <input type="text" className="search" placeholder="Search" />
    </ColumnOne>

    <ColumnTwo>
      <span className="icon icon-1">
        <FaRegBell />
      </span>

      <span className="icon icon-2">
        <FaPlusCircle />
      </span>

      <span className="divider" />

      <div className="profile-picture">
        <img src="/images/girl_1.jpg" alt="Profile" />
      </div>

      <span className="profile-name">Mohan</span>
    </ColumnTwo>
  </LeftNavBarContainer>
);

export default LeftNavBar;
