// Domain types for the taikai job-board lib.

// A min/max numeric range (employees, compensation, equity).
export interface Range {
  min: number;
  max: number;
}

// Equity can be absent (null bounds) for some roles.
export interface EquityRange {
  min: number | null;
  max: number | null;
}

export interface CompensationRange extends Range {
  currency: string;
}

export interface RecruitingContact {
  user: {
    id: string;
    name: string;
  };
  role: string;
}

// A single open role within a company.
export interface Role {
  job_id: string;
  primary_role: string;
  title: string;
  locations: string[];
  compensation_in_thousands: CompensationRange;
  equity_in_percentage: EquityRange;
  posted: string;
  has_applied: boolean;
  description_html: string;
  job_type: string;
  years_experience_min: number;
  has_visa_sponsorship: boolean;
  remote: boolean;
  skills: string[];
  recruitingContact?: RecruitingContact;
}

export interface Company {
  name: string;
  info: string;
  employees_count: Range;
  logo: string;
}

// A company together with its open roles — one entry in the job listing.
export interface Job {
  id: string;
  company: Company;
  roles: Role[];
}

// useReducer state for the Taikai app.
export interface State {
  search: string;
  pageNumber: number;
  list: Job[];
  listCopy: Job[]; // untouched copy to keep the original list
}

// Discriminated-ish reducer action; payload type varies by action.
export interface Action {
  type: string;
  payload?: any;
}
