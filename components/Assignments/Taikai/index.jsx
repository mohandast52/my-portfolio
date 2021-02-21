/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React, { useReducer } from 'react';
import 'antd/dist/antd.css';
import {
  Input, Select, Layout, Slider,
} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Reducer from './Reducer';
import Pagination from './Pagination';
import JobList from './List';
import { API_TYPES, INITIAL_STATE } from './Helpers';
import { TECH_STACK, LOCATION } from './Helpers/dummyJobs';
import {
  Container,
  PaginationContainer,
  FilterContainer,
  FilterLabel,
} from './styles';

const { Option } = Select;
const { Content, Sider } = Layout;

const Taikai = () => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
  const { search, list, pageNumber } = state;

  const handleSearch = ({ target }) => {
    dispatch({ type: API_TYPES.SEARCH_CHANGE, payload: target.value });
  };

  const updatePageNumber = pageNo => {
    dispatch({ type: API_TYPES.UPDATE_PAGE_NUMBER, payload: pageNo });
  };

  const handleChange = selectedItems => {
    dispatch({ type: API_TYPES.ON_TECH_STACK_CHANGE, payload: selectedItems });
  };

  const handleLocation = selectedItems => {
    dispatch({ type: API_TYPES.ON_LOCATION_CHANGE, payload: selectedItems });
  };

  const onSalaryChange = values => {
    dispatch({ type: API_TYPES.ON_SALARY_CHANGE, payload: values });
  };

  return (
    <Container>
      <Layout>
        <Sider theme="light">
          <FilterContainer>
            <FilterLabel>Tech Stack</FilterLabel>
            <Select
              mode="multiple"
              allowClear
              placeholder="Select Stack"
              defaultValue={[]}
              onChange={handleChange}
            >
              {TECH_STACK.map(stack => (
                <Option key={stack}>{stack}</Option>
              ))}
            </Select>

            <FilterLabel>Location</FilterLabel>
            <Select
              mode="multiple"
              allowClear
              placeholder="Select Location"
              defaultValue={[]}
              onChange={handleLocation}
            >
              {LOCATION.map(stack => (
                <Option key={stack}>{stack}</Option>
              ))}
            </Select>

            <FilterLabel>Salary</FilterLabel>
            <Slider
              range
              tipFormatter={value => `${value}T`}
              defaultValue={[0, 100]}
              onAfterChange={onSalaryChange}
            />
          </FilterContainer>
        </Sider>

        <Layout className="site-layout">
          <Content>
            <div className="site-layout-background">
              <Input
                value={search}
                placeholder="Search by Job Title, Company Name"
                size="large"
                prefix={<SearchOutlined />}
                onChange={handleSearch}
              />

              <JobList list={list} pageNumber={pageNumber} />

              <PaginationContainer>
                <Pagination
                  listCount={list.length}
                  activePage={pageNumber}
                  updatePageNumber={updatePageNumber}
                />
              </PaginationContainer>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Container>
  );
};

export default Taikai;
