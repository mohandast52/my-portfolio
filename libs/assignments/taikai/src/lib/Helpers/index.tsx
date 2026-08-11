import LISTING from './dummyJobs';
import type {
  State, Range, CompensationRange, EquityRange,
} from '../types';

export const API_TYPES = {
  SEARCH_CHANGE: 'search',
  ON_TECH_STACK_CHANGE: 'on tech-stack change',
  ON_LOCATION_CHANGE: 'on location change',
  ON_SALARY_CHANGE: 'on salary change',
  UPDATE_PAGE_NUMBER: 'update page number',
};

export const INITIAL_STATE: State = {
  search: '',
  pageNumber: 1,
  list: [...LISTING],
  listCopy: [...LISTING] /* copy to keep original! */,
};

/* ---------------- common components ---------------- */
interface EmployeesProps {
  employees: Range;
}

export const Employees = ({ employees }: EmployeesProps) => (
  <div className="employees">
    {employees.min}
    &nbsp; - &nbsp;
    {employees.max}
    &nbsp; EMPLOYEES
  </div>
);

interface CompensationProps {
  compensation: CompensationRange;
}

export const Compensation = ({ compensation }: CompensationProps) => (
  <div className="dot-space">
    {compensation.min}
    T&nbsp;-&nbsp;
    {compensation.max}
    T&nbsp;
  </div>
);

interface EquityProps {
  equity: EquityRange;
}

export const Equity = ({ equity }: EquityProps) => {
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
