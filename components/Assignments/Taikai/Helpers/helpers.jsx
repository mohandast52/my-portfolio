/* eslint-disable react/prop-types */
export const Equity = ({ equity }) => (
  <div>
    {equity.min}
    %&nbsp;-&nbsp;
    {equity.max}
    %&nbsp;
  </div>
);

export const Compensation = ({ compensation }) => (
  <div>
    {compensation.min}
    k&nbsp;-&nbsp;
    {compensation.max}
    k&nbsp;
  </div>
);
