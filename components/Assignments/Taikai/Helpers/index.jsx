/* eslint-disable react/prop-types */
import LISTING from './dummyJobs';

export const API_TYPES = {
  SEARCH_CHANGE: 'search',
  ON_TECH_STACK_CHANGE: 'on tech-stack change',
  ON_LOCATION_CHANGE: 'on location change',
  ON_SALARY_CHANGE: 'on salary change',
  UPDATE_PAGE_NUMBER: 'update page number',
};

export const INITIAL_STATE = {
  search: '',
  pageNumber: 1,
  list: [...LISTING],
  listCopy: [...LISTING] /* copy to keep original! */,
};

/* ---------------- common components ---------------- */
export const Employees = ({ employees }) => (
  <div className="employees">
    {employees.min}
    &nbsp; - &nbsp;
    {employees.max}
    &nbsp; EMPLOYEES
  </div>
);

export const Compensation = ({ compensation }) => (
  <div className="dot-space">
    {compensation.min}
    T&nbsp;-&nbsp;
    {compensation.max}
    T&nbsp;
  </div>
);

export const Equity = ({ equity }) => {
  /* if no equity, return null */
  if (!equity.min) return null;

  return (
    <div className="dot-space">
      {equity.min}
      %&nbsp;-&nbsp;
      {equity.max}
      %&nbsp;
    </div>
  );
};
