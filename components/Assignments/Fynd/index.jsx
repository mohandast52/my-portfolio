import React from 'react';
import Dropdown from './Dropdown';
import { ParentContainer } from './styles';
import { optionsOne, optionsTwo } from './Helpers/dummyOptions';

const Fynd = () => (
  <ParentContainer>
    <Dropdown options={optionsOne} />
    <Dropdown options={optionsTwo} />
  </ParentContainer>
);

export default Fynd;
