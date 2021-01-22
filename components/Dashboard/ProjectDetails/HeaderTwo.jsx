import React from 'react';
import { HeaderTwoContainer } from './styles';

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

const HeaderTwo = () => (
  <HeaderTwoContainer>
    <div className="details-count">
      {LIST.map(({ id, count, name }) => (
        <div className="detail" key={id}>
          <span>{count}</span>
          <span>{name}</span>
        </div>
      ))}
    </div>

    <div className="listing-type">
      <div>1</div>
      <div>2</div>
    </div>
  </HeaderTwoContainer>
);

export default HeaderTwo;
