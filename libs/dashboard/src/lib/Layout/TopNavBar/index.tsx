import React from 'react';
import Image from 'next/image';
import { FaPlusCircle, FaRegBell } from 'react-icons/fa';
import {
  LeftNavBarContainer, ColumnOne, ColumnTwo, Logo,
} from './styles';
import { HyperLink } from '../../styles';

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
        <Image src="/images/girl_1.jpg" alt="Profile" width={38} height={38} />
      </div>

      <HyperLink
        href="https://github.com/mohandast52"
        target="_blank"
        rel="noopener noreferrer"
        className="profile-name"
      >
        Mohan
      </HyperLink>
    </ColumnTwo>
  </LeftNavBarContainer>
);

export default LeftNavBar;
