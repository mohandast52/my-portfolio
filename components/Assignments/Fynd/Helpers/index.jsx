
import React, { useReducer } from 'react';
import 'antd/dist/antd.css';
import { Checkbox } from 'antd';

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


// eslint-disable-next-line react/prop-types
export const HEY = null;
