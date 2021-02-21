/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */

import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Button, Tag } from 'antd';
import { Compensation, Equity } from '../Helpers';
import {
  EachJob,
  JobTitle,
  Location,
  DetailsModal,
  ModalContainer,
  DatePosted,
  ColumnDetails,
  ColumnInfoList,
  SubTitle,
  SubInfo,
} from './styles';

const JobDetails = ({ roleDescription }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const {
    title,
    description_html,
    locations,
    job_type,
    has_visa_sponsorship,
    has_applied,
    years_experience_min,
    skills,
    posted,
    compensation_in_thousands,
    equity_in_percentage,
  } = roleDescription;

  return (
    <EachJob>
      <div className="row-1">
        <JobTitle>{title}</JobTitle>
        <Location className="dot-space">{locations.join(', ')}</Location>
        <Compensation compensation={compensation_in_thousands} />
        <Equity equity={equity_in_percentage} />
      </div>

      <div className="row-2">
        <DatePosted>{posted}</DatePosted>
        <Button type="default" disabled={has_applied} onClick={showModal}>
          {has_applied ? 'Applied' : 'Apply'}
        </Button>
      </div>

      {/* Modal to open job details! */}
      {isModalVisible && (
        <DetailsModal
          title={<div>Equity</div>}
          visible={isModalVisible}
          onCancel={handleCancel}
          destroyOnClose
          width={800}
          footer={[
            <Button key="back" onClick={handleCancel}>
              Close
            </Button>,
            <Button
              key="back"
              type="primary"
              disabled={has_applied}
              onClick={handleCancel}
            >
              {has_applied ? 'Applied' : 'Confirm'}
            </Button>,
          ]}
        >
          <ModalContainer>
            <ColumnDetails
              dangerouslySetInnerHTML={{ __html: description_html }}
            />

            <ColumnInfoList>
              <SubTitle>Location</SubTitle>
              <SubInfo>{locations.join(' • ')}</SubInfo>

              <SubTitle>Job type</SubTitle>
              <SubInfo>{job_type}</SubInfo>

              <SubTitle>Visa sponsorship</SubTitle>
              <SubInfo>{has_visa_sponsorship ? 'Yes' : 'No'}</SubInfo>

              <SubTitle>Experience</SubTitle>
              <SubInfo>
                {years_experience_min}
                +
              </SubInfo>

              <SubTitle>Skills</SubTitle>
              <SubInfo>
                {skills.map(skill => (
                  <Tag color="default">{skill}</Tag>
                ))}
              </SubInfo>
            </ColumnInfoList>
          </ModalContainer>
        </DetailsModal>
      )}
    </EachJob>
  );
};

export default JobDetails;
