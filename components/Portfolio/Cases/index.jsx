import React from 'react';
// import { ReactComponent as ArrowPrevious } from '../assets/arrow-left.svg';
// import ArrowNext from '../../../public/images/';
import { CasesContainer } from './styles';

const CASE_STUDIES = [
  {
    id: 'case-1',
    subtitle: 'Mohan',
    title: 'A custom formula for your brain ',
    img: 'curology-min',
  },
  {
    id: 'case-2',
    subtitle: 'Mohan',
    title: 'A custom formula for your brain ',
    img: 'yourspace-min',
  },
  {
    id: 'case-3',
    subtitle: 'Mohan',
    title: 'A custom formula for your brain ',
    img: 'lumin-min',
  },
];

const Cases = () => (
  <CasesContainer>
    <div className="container-fluid">
      <div className="cases-navigation">
        <div className="cases-arrow prev disabled">
          {/* <ArrowPrevious /> */}
        </div>

        <div className="cases-arrow next">
          {/* <ArrowNext /> */}
        </div>
      </div>

      <div className="row">
        {CASE_STUDIES.map(({ // eslint-disable-next-line no-unused-vars
          id, subtitle, title, img,
        }) => (
          <div className="case" key={id}>
            <div className="case-details">
              <span>{subtitle}</span>
              <h2>{title}</h2>
            </div>

            <div className="case-image">
              <img src={`/images/${img}.png`} alt={title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </CasesContainer>
);

export default Cases;
