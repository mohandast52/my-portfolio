/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React, { useReducer } from 'react';
import 'antd/dist/antd.css';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { FaSearchengin } from 'react-icons/fa';
import Reducer from './Reducer';
import JobDetails from './JobDetails';
import { API_TYPES, INITIAL_STATE, Employees } from './Helpers';
import {
  Container,
  NoDataFound,
  CompanyContainer,
  CompanyInfo,
  Avatar,
  Title,
} from './styles';

const Taikai = () => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
  const { search, list } = state;

  const handleSearch = ({ target }) => {
    dispatch({ type: API_TYPES.SEARCH_CHANGE, payload: target.value });
  };

  return (
    <Container>
      <Input
        value={search}
        placeholder="Search by Job Title, Company Name"
        size="large"
        prefix={<SearchOutlined />}
        onChange={handleSearch}
      />

      {list.length === 0 ? (
        <>
          <NoDataFound data-testid="no-data-found">
            <FaSearchengin />
            Sorry Aliean, we could not find a job.
          </NoDataFound>
        </>
      ) : (
        <>
          {list.map(({ id, company, roles }) => {
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
      )}
    </Container>
  );
};

export default Taikai;
