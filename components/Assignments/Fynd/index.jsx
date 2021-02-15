import React from 'react';
import 'antd/dist/antd.css';
import { Checkbox, Divider } from 'antd';
import { optionsOne } from './Helpers/dummyOptions';
import { ParentContainer, List } from './styles';

// const CheckboxGroup = Checkbox.Group;

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
  const [checkedList, setCheckedList] = React.useState([]);
  const [indeterminate, setIndeterminate] = React.useState(true);
  const [checkAll, setCheckAll] = React.useState(false);

  const onChange = list => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < optionsOne.length);
    setCheckAll(list.length === optionsOne.length);
  };

  const onCheckAllChange = e => {
    setCheckedList(e.target.checked ? optionsOne : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  return (
    <ParentContainer>
      <Checkbox
        indeterminate={indeterminate}
        onChange={onCheckAllChange}
        checked={checkAll}
      >
        Check all
      </Checkbox>

      <Divider />

      <List>
        {optionsOne.map(option => {
          let title = option;
          let key = option;

          if (typeof option === 'object') {
            title = option.title;
            key = option.path;
          }

          return (
            <CustomCheckbox
              key={key}
              value={key}
              title={title}
              checked={false}
            />
          );
        })}
      </List>
    </ParentContainer>
  );
};

export default Fynd;
