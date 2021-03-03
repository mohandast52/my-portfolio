import React from 'react';
import Dropdown from './Dropdown';
import { ParentContainer } from './styles';
import { optionsTwo } from './Dropdown/Helpers/dummyOptions';

const Appbase = () => (
  <ParentContainer>
    <Dropdown
      selectTitle="Multi select"
      data={optionsTwo}
      searchable
      multiSelect
      showCount
      onChange={values => {
        window.console.log(values);
      }}
    />

    <Dropdown
      selectTitle="Single select"
      data={optionsTwo}
      searchable
      showCount
      onChange={values => {
        window.console.log(values);
      }}
    />

    <Dropdown
      selectTitle="Without count, Default selected keys"
      data={optionsTwo}
      showCount={false}
      defaultSelected={['blue']}
      onChange={values => {
        window.console.log(values);
      }}
    />
  </ParentContainer>
);

export default Appbase;
