/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */

import React from 'react';
import 'antd/dist/antd.css';
import { Button, Tag } from 'antd';
import {
  DetailsModal, ModalContainer, SubTitle, SubInfo,
} from './styles';

const JobDetails = ({ isModalVisible, handleCancel, roleDescription }) => {
  const {
    description_html,
    locations,
    job_type,
    has_visa_sponsorship,
    has_applied,
    years_experience_min,
    skills,
  } = roleDescription;

  return (
    <DetailsModal
      title={<div>Equity</div>}
      visible={isModalVisible}
      onCancel={handleCancel}
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
        <div
          className="column-1"
          dangerouslySetInnerHTML={{ __html: description_html }}
        />
        <div className="column-2">
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
        </div>
      </ModalContainer>
    </DetailsModal>
  );
};

export default JobDetails;
