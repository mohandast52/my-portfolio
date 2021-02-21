/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { FaSearchengin } from 'react-icons/fa';
import JobDetails from '../JobDetails';
import { Employees } from '../Helpers';
import {
  NoDataFound,
  CompanyContainer,
  CompanyInfo,
  Avatar,
  Title,
} from '../styles';

export const List = ({ pageNumber, list }) => {
  if ((list || []).length === 0) {
    return (
      <NoDataFound data-testid="no-data-found">
        <FaSearchengin />
        Sorry Aliean, we could not find a job.
      </NoDataFound>
    );
  }

  return (
    <>
      {(list || []).map(({ id, company, roles }, index) => {
        const currentView = 4 * (pageNumber - 1) + (index % 4);
        if (currentView !== index) return null;

        const {
          name, info, employees_count, logo,
        } = company;

        return (
          <CompanyContainer key={id}>
            <CompanyInfo>
              <Avatar>
                <img src={`/images/${logo}.jpg`} alt="" />
              </Avatar>

              <div>
                <Title>{name}</Title>
                <div className="info">{info}</div>
                <Employees employees={employees_count} />
              </div>
            </CompanyInfo>

            {roles.map(role => {
              const { job_id } = role;
              return <JobDetails key={job_id} roleDescription={role} />;
            })}
          </CompanyContainer>
        );
      })}
    </>
  );
};

List.propTypes = {
  pageNumber: PropTypes.number,
  // eslint-disable-next-line react/forbid-prop-types
  list: PropTypes.array,
};

List.defaultProps = {
  pageNumber: 1,
  list: [],
};

export default List;
