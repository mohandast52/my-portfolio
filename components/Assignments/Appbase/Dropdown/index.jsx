/* eslint-disable react/forbid-prop-types */
import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import { Checkbox } from 'antd';
import { FaAngleDown, FaCheck } from 'react-icons/fa';
import Reducer, { INITIAL_STATE, API_TYPES } from './Reducer';
import {
  Container,
  Title,
  SelectContainer,
  Input,
  ListContainer,
  List,
  Count,
  Select,
  NoDataFound,
} from './styles';

const Dropdown = ({
  searchable,
  multiSelect,
  showCount,
  selectTitle,
  data,
  defaultSelected,
  onChange,
}) => {
  const [state, dispatch] = useReducer(
    Reducer,
    INITIAL_STATE({
      multiSelect,
      showCount,
      options: data,
      defaultSelected,
    }),
  );

  const {
    isActive, isMultiSelect, isCountVisible, checkedList = [],
  } = state;

  const toggleSelect = () => {
    if (searchable) {
      dispatch({
        type: API_TYPES.ON_DROPDOWN_CLICK,
        payload: !isActive,
      });
    }
  };

  /* on search */
  const onInputChange = event => {
    dispatch({
      type: API_TYPES.ON_SEARCH_FILTER,
      payload: event.target.value,
    });
  };

  /* on option select */
  const onOptionSelect = (event, index, selectedKey) => {
    let listCopy = [...checkedList];

    if (isMultiSelect) {
      listCopy = listCopy.map(eachItem => {
        const { key, checked } = eachItem;
        const isChecked = key === selectedKey ? event.target.checked : checked;
        return { ...eachItem, checked: isChecked };
      });
    } else {
      listCopy = listCopy.map(eachItem => ({
        ...eachItem,
        checked: eachItem.index === index,
      }));
    }

    if (typeof onChange === 'function') {
      const items = listCopy.filter(({ checked }) => !!checked);
      if (isMultiSelect) {
        onChange(items);
      } else {
        const checkedItem = items.length === 0 ? null : items[0];
        onChange(checkedItem);
      }
    }

    dispatch({
      type: API_TYPES.ON_OPTION_SELECT,
      payload: { selectedKey, updatedList: listCopy },
    });
  };

  return (
    <Container>
      <Title>{selectTitle}</Title>
      <SelectContainer>
        {isActive ? (
          <Input
            autoFocus
            placeholder="Search"
            className="dropdown"
            onChange={onInputChange}
          />
        ) : (
          <Select className="dropdown" onClick={toggleSelect}>
            <div>Select</div>
            <FaAngleDown />
          </Select>
        )}
      </SelectContainer>

      <ListContainer>
        <List
          className={`custom-scroll-bar ${
            isMultiSelect ? '' : 'single-select'
          } `}
        >
          {checkedList.length === 0 ? (
            <NoDataFound>No data found.</NoDataFound>
          ) : (
            <>
              {checkedList.map(({
                id, key, checked, index, count,
              }) => (
                <Checkbox
                  key={id}
                  checked={checked}
                  value={key}
                  onChange={e => onOptionSelect(e, index, key)}
                >
                  {key}
                  {isCountVisible && <Count>{count}</Count>}
                  {!isMultiSelect && checked && <FaCheck />}
                </Checkbox>
              ))}
            </>
          )}
        </List>
      </ListContainer>
    </Container>
  );
};

Dropdown.propTypes = {
  searchable: PropTypes.bool,
  multiSelect: PropTypes.bool,
  showCount: PropTypes.bool,
  selectTitle: PropTypes.string,
  data: PropTypes.array,
  defaultSelected: PropTypes.array,
  onChange: PropTypes.func,
};

Dropdown.defaultProps = {
  searchable: true,
  multiSelect: false,
  showCount: false,
  selectTitle: null,
  data: [],
  defaultSelected: [],
  onChange: () => {},
};

export default Dropdown;

/*
(DONE) Add support for multiple selection via checkboxes, controlled by boolean prop - multiSelect.
(DONE) Expose an onChange method to get the previous and current selected values.
(DONE) Show the count of the elements. showCount - (boolean) to show/hide the count.
(DONE) Show a search field to filter the list elements.

Support the following props:
data - input data (array).
defaultSelected - Select a list-item present in the list.
*/
