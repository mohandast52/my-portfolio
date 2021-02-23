import React, { useReducer } from 'react';
import 'antd/dist/antd.css';
import { Checkbox, Button } from 'antd';
import { FaAngleDown } from 'react-icons/fa';
import Reducer, { INITIAL_STATE, API_TYPES } from './Reducer';
import {
  Container, Select, ListContainer, List, ListFooter,
} from './styles';

const Fynd = () => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
  const { isAllChecked, checkedList, selectedList } = state;

  const onAllCheck = event => {
    dispatch({
      type: API_TYPES.ON_ALL_CHECK,
      payload: { isChecked: event.target.checked },
    });
  };

  const onChange = (event, index) => {
    dispatch({
      type: API_TYPES.ON_CHECKBOX_CHANGE,
      payload: { index, isChecked: event.target.checked },
    });
  };

  return (
    <Container>
      <Select>
        <div>
          Colours
          {selectedList.length === 0 ? null : (
            <>
              <span className="hypen">-</span>
              <span>{selectedList.map(({ title }) => title).join(', ')}</span>
            </>
          )}
        </div>
        <div>
          <FaAngleDown />
        </div>
      </Select>

      <ListContainer>
        <List className="custom-scroll-bar">
          <Checkbox checked={isAllChecked} onChange={onAllCheck} />

          {checkedList.map(option => {
            const {
              id, title, checked, index,
            } = option;

            return (
              <Checkbox
                key={id}
                checked={checked}
                value={title}
                onChange={e => onChange(e, index)}
              >
                {title}
              </Checkbox>
            );
          })}
        </List>

        <ListFooter>
          <Button>Clear</Button>
          <Button>Submit</Button>
        </ListFooter>
      </ListContainer>
    </Container>
  );
};

export default Fynd;
