/* eslint-disable react/prop-types */
import { FaAngleDown } from 'react-icons/fa';
import { Select } from '../styles';

/**
 * if selection order is to be maintained ? create a new array to push and pop
 * the new elements!
 */
export const Selection = ({ toggleSelect, checkedList }) => (
  <Select className="dropdown" onClick={toggleSelect}>
    <div>Select</div>
    <FaAngleDown />
  </Select>
);

export const ABCD = null;
