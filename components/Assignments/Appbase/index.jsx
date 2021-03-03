import React from 'react';
import DataList from './DataList';
import { ParentContainer } from './styles';
import { options } from './DataList/Helpers/dummyOptions';

const Appbase = () => (
  <ParentContainer>
    <DataList
      searchable
      showCount
      multiSelect
      selectTitle="Multi select, Search"
      data={options}
      onChange={values => {
        window.console.log(values);
      }}
    />

    <DataList
      searchable
      showCount
      selectTitle="Single select, Search"
      data={options}
      onChange={values => {
        window.console.log(values);
      }}
    />

    <DataList
      showCount={false}
      selectTitle="Without count"
      data={options}
      onChange={values => {
        window.console.log(values);
      }}
    />

    <DataList
      searchable={false}
      selectTitle="Default selected keys"
      data={options}
      defaultSelected={['blue']}
      onChange={values => {
        window.console.log(values);
      }}
    />
  </ParentContainer>
);

export default Appbase;
