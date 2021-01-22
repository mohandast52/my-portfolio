import React, { useState } from 'react';
import {
  FaHome,
  FaRegEnvelope,
  FaRegUserCircle,
  FaRegStar,
  FaRegClock,
  FaCog,
} from 'react-icons/fa';
import { RightNavBarContainer } from './styles';
import { Icon } from '../../styles';

const LIST = [
  {
    id: 'menu-id-1',
    name: 'Profile',
    Component: FaHome,
  },
  {
    id: 'menu-id-2',
    name: 'User',
    Component: FaRegUserCircle,
  },
  {
    id: 'menu-id-3',
    name: 'Setting',
    Component: FaRegStar,
  },
  {
    id: 'menu-id-4',
    name: 'Message',
    Component: FaRegEnvelope,
  },
  {
    id: 'menu-id-5',
    name: 'Calendar',
    Component: FaRegClock,
  },

  {
    id: 'menu-id-6',
    name: 'Setting',
    Component: FaCog,
  },
];

const RightNavBar = () => {
  const [menu, setMenu] = useState('menu-id-1');

  return (
    <RightNavBarContainer>
      {LIST.map(({ id, Component }) => (
        <Icon
          key={id}
          className={`menu-icon ${id === menu ? 'active' : ''}`}
          onClick={() => setMenu(id)}
        >
          <Component />
        </Icon>
      ))}
    </RightNavBarContainer>
  );
};

export default RightNavBar;
