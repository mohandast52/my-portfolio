/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import { LISTING } from './Helpers/dummyJobs';
import JobDetails from './JobDetails';
import {
  Container,
  CompanyContainer,
  CompanyInfo,
  Avatar,
  EachJob,
  Title,
} from './styles';

const Equity = ({ equity }) => (
  <div>
    {equity.min}
    %&nbsp;-&nbsp;
    {equity.max}
    %&nbsp;
  </div>
);

const Compensation = ({ compensation }) => (
  <div>
    {compensation.min}
    k&nbsp;-&nbsp;
    {compensation.max}
    k&nbsp;
  </div>
);

const Taikai = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Container>
      {LISTING.map(({ id, company, roles }) => {
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
                <div className="employees">
                  {employees_count.min}
                  &nbsp; - &nbsp;
                  {employees_count.max}
                  &nbsp; EMPLOYEES
                </div>
              </div>
            </CompanyInfo>

            {roles.map(role => {
              const {
                job_id,
                title,
                locations,
                posted,
                compensation_in_thousands,
                equity_in_percentage,
                has_applied,
              } = role;

              return (
                <EachJob key={job_id}>
                  <div className="row-1">
                    <div>{title}</div>
                    <div>{locations.join(' • ')}</div>
                    •
                    <Compensation compensation={compensation_in_thousands} />
                    •
                    <Equity equity={equity_in_percentage} />
                  </div>

                  <div className="row-2">
                    <div className="posted">{posted}</div>
                    <Button
                      type="default"
                      disabled={has_applied}
                      onClick={showModal}
                    >
                      {has_applied ? 'Applied' : 'Apply'}
                    </Button>

                    {/* Modal to open job details! */}
                    <JobDetails
                      isModalVisible={isModalVisible}
                      roleDescription={role}
                      handleCancel={handleCancel}
                    />
                  </div>
                </EachJob>
              );
            })}
          </CompanyContainer>
        );
      })}
    </Container>
  );
};

export default Taikai;
