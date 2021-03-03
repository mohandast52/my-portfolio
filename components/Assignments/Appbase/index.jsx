import React from 'react';
import Dropdown from './Dropdown';
import { ParentContainer } from './styles';
import { optionsTwo } from './Dropdown/Helpers/dummyOptions';

const Appbase = () => (
  <ParentContainer>
    <Dropdown
      searchable
      multiSelect
      showCount
      data={optionsTwo}
      selectTitle="Multi select, Search"
      onChange={values => {
        window.console.log(values);
      }}
    />

    <Dropdown
      searchable
      showCount
      selectTitle="Single select, Search"
      data={optionsTwo}
      onChange={values => {
        window.console.log(values);
      }}
    />

    <Dropdown
      showCount={false}
      selectTitle="Without count"
      data={optionsTwo}
      onChange={values => {
        window.console.log(values);
      }}
    />

    <Dropdown
      searchable={false}
      selectTitle="Default selected keys"
      data={optionsTwo}
      defaultSelected={['blue']}
      onChange={values => {
        window.console.log(values);
      }}
    />
  </ParentContainer>
);

export default Appbase;
