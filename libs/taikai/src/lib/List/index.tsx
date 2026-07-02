import React from 'react';
import Image from 'next/image';
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
import type { Job } from '../types';

interface ListProps {
  pageNumber?: number;
  list?: Job[];
}

export const List = ({ pageNumber = 1, list = [] }: ListProps) => {
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
                <Image src={`/images/${logo}.jpg`} alt="" width={50} height={50} />
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

export default List;
