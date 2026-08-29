import React, { useReducer } from 'react';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { FaAngleDown, FaCheck } from 'react-icons/fa';
import Reducer, { INITIAL_STATE, API_TYPES } from './Reducer';
import type { ListItem } from './Reducer';
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

interface DataListProps {
  searchable?: boolean;
  multiSelect?: boolean;
  showCount?: boolean;
  selectTitle?: string | null;
  // Source records are intentionally untyped (strings or objects with `eyeColor`).
  data?: any;
  defaultSelected?: string[];
  onChange?: (values: ListItem | ListItem[] | null) => void;
}

const DataList = ({
  searchable = true,
  multiSelect = false,
  showCount = false,
  selectTitle = null,
  data = [],
  defaultSelected = [],
  onChange = () => {},
}: DataListProps) => {
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
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: API_TYPES.ON_SEARCH_FILTER,
      payload: event.target.value,
    });
  };

  /* on option select */
  const onOptionSelect = (
    event: CheckboxChangeEvent,
    index: number,
    selectedKey: string,
  ) => {
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

export default DataList;
