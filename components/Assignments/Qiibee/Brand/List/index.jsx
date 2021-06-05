/* eslint-disable camelcase */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Table, Button } from 'antd';
import {
  handleAwardPoints as handleAwardPointsFn,
} from 'store/qiibee/actions';
import { Container } from './styles';


const List = ({ isDisabled, tableData, handleAwardPoints }) => {
  const columns = [
    {
      title: 'First Name',
      dataIndex: 'firstname',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastname',
    },
    {
      title: 'Email',
      dataIndex: 'username',
    },
    {
      title: 'Action',
      id: 'operation',
      fixed: 'right',
      render: (_, row) => (
        <Button
          type="primary"
          ghost
          onClick={() => handleAwardPoints([row.id])}
          disabled={isDisabled}
        >
          Award 20 points
        </Button>
      ),
    },
  ];

  const [selectedRows, setSelectedRows] = useState([]);
  const rowSelection = {
    selectedRowKeys: selectedRows,
    onChange: selectedRowKeys => {
      setSelectedRows(selectedRowKeys);
    },
    getCheckboxProps: record => ({
      name: record.name,
    }),
    type: 'checkbox',
  };

  return (
    <Container>
      <div className="header">
        <Button
          type="primary"
          disabled={selectedRows.length === 0 || isDisabled}
          onClick={() => handleAwardPoints(selectedRows)}
        >
          Reward to Selected Customers
        </Button>
      </div>

      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={tableData}
        rowKey={record => record.id}
        bordered
        pagination={false}
      />
    </Container>
  );
};

List.propTypes = {
  isDisabled: PropTypes.bool.isRequired,
  tableData: PropTypes.arrayOf(PropTypes.shape({})),
  handleAwardPoints: PropTypes.func.isRequired,
};

List.defaultProps = {
  tableData: null,
};

const mapStateToProps = state => {
  const { currentUser, customers } = state.qiibee;
  const { total_loyalty_points, followers } = currentUser || {};
  const temp = customers.filter(customer => {
    const { username } = customer;
    // const isPresent = brands_following.some(item => {
    //   const id = item.brand_id;
    //   console.log(followers, id);
    //   return (followers || []).includes(id);
    // });
    // console.log(followers, id);
    // return isPresent;
    return (followers || []).includes(username);
  });

  return {
    isDisabled: total_loyalty_points <= 0,
    tableData: temp,
  };
};

const mapDispatchToProps = {
  handleAwardPoints: handleAwardPointsFn,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
