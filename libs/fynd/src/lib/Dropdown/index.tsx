import { useReducer, ChangeEvent } from 'react';
import { Checkbox, Button } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { FaAngleDown } from 'react-icons/fa';
import Reducer, { INITIAL_STATE, API_TYPES } from './Reducer';
import type { RawOption } from './Reducer';
import {
  Container,
  SelectContainer,
  Input,
  Select,
  ListContainer,
  List,
  ListFooter,
} from './styles';

interface DropdownProps {
  searchable?: boolean;
  options?: RawOption[];
}

const Dropdown = ({ searchable = true, options = [] }: DropdownProps) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE(options));
  const {
    isActive, isAllChecked, checkedList, selectedList,
  } = state;

  const toggleSelect = () => {
    if (searchable) {
      dispatch({
        type: API_TYPES.ON_DROPDOWN_CLICK,
        payload: !isActive,
      });
    }
  };

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: API_TYPES.ON_SEARCH_FILTER,
      payload: event.target.value,
    });
  };

  const onAllCheck = (event: CheckboxChangeEvent) => {
    dispatch({
      type: API_TYPES.ON_ALL_CHECK,
      payload: { isChecked: event.target.checked },
    });
  };

  const onEachSelect = (event: CheckboxChangeEvent, index: number) => {
    dispatch({
      type: API_TYPES.ON_CHECKBOX_CHANGE,
      payload: { index, isChecked: event.target.checked },
    });
  };

  return (
    <Container>
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
            <div>
              Colours
              {selectedList.length === 0 ? null : (
                <>
                  <span className="hypen">-</span>
                  <span>
                    {selectedList.map(({ title }) => title).join(', ')}
                  </span>
                </>
              )}
            </div>

            <div>
              <FaAngleDown />
            </div>
          </Select>
        )}
      </SelectContainer>

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
                onChange={e => onEachSelect(e, index)}
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

export default Dropdown;
