import React from 'react';
import 'antd/dist/antd.css';
import { Checkbox, Divider } from 'antd';
import { optionsOne } from './Helpers/dummyOptions';
import { ParentContainer, List } from './styles';

// const CheckboxGroup = Checkbox.Group;

const getInitalList = list => list.map((eachItem, index) => ({
  id: `id-${index}`,
  title: eachItem,
  checked: false,
}));

// eslint-disable-next-line react/prop-types
export const CustomCheckbox = React.memo(({ title, checked }) => {
  const [isChecked, setCheckbox] = React.useState(checked);
  const onChange = () => setCheckbox(!isChecked);

  return (
    <Checkbox onChange={onChange} checked={isChecked}>
      {title}
    </Checkbox>
  );
});

/* --------------------------------------- */
const Fynd = () => {
  const [checkedList, setCheckedList] = React.useState(
    getInitalList(optionsOne),
  );
  const [checkAll, setCheckAll] = React.useState(false);

  const onChange = list => {
    console.log(list);
  };

  return (
    <ParentContainer>
      <Divider />

      <List className="custom-scroll-bar">
        {checkedList.map(option => {
          let title = option;
          let key = option;

          if (typeof option === 'object') {
            title = option.title;
            key = option.id;
          }

          return (
            <CustomCheckbox
              key={key}
              value={key}
              title={title}
              checked={false}
              onChange={() => onChange(key)}
            />
          );
        })}
      </List>
    </ParentContainer>
  );
};

export default Fynd;
