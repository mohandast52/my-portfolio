import React, { useState } from 'react';
import { FaListUl, FaBorderAll } from 'react-icons/fa';
import { HeaderTwoContainer } from './styles';
import { Icon } from '../styles';

const LIST = [
  {
    id: 'details-cnt-1',
    count: 45,
    name: 'In Progress',
  },
  {
    id: 'details-cnt-2',
    count: 12,
    name: 'In Progress',
  },
  {
    id: 'details-cnt-3',
    count: 10,
    name: 'Upcoming',
  },
  {
    id: 'details-cnt-4',
    count: 67,
    name: 'Total Project',
  },
];

const SORT_TYPES = [
  {
    id: 'list',
    name: 'List',
    Component: FaListUl,
  },
  {
    id: 'grid',
    name: 'Grid',
    Component: FaBorderAll,
  },
];

const HeaderTwo = () => {
  const [sortingOrder, setSortingOrder] = useState('grid');

  return (
    <HeaderTwoContainer>
      <div className="details-count">
        {LIST.map(({ id, count, name }) => (
          <div className="detail" key={id}>
            <span>{count}</span>
            <span>{name}</span>
          </div>
        ))}
      </div>

      <div className="sorting-type">
        {SORT_TYPES.map(({ id, Component }) => (
          <Icon
            key={id}
            className={`${id} ${id === sortingOrder ? 'active' : ''}`}
            onClick={() => setSortingOrder(id)}
          >
            <Component />
          </Icon>
        ))}
      </div>
    </HeaderTwoContainer>
  );
};

export default HeaderTwo;
