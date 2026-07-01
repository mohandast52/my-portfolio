import { useState } from 'react';
import { connect } from 'react-redux';
import { Table, Button } from 'antd';
import {
  handleAwardPoints as handleAwardPointsFn,
} from 'store/qiibee/actions';
import { Container } from './styles';

interface ListProps {
  isDisabled: boolean;
  tableData?: any[] | null;
  handleAwardPoints: (ids: any[]) => void;
}

const List = ({ isDisabled, tableData = null, handleAwardPoints }: ListProps) => {
  const columns: any[] = [
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
      render: (_: any, row: any) => (
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

  const [selectedRows, setSelectedRows] = useState<any[]>([]);
  const rowSelection: any = {
    selectedRowKeys: selectedRows,
    onChange: (selectedRowKeys: any[]) => {
      setSelectedRows(selectedRowKeys);
    },
    getCheckboxProps: (record: any) => ({
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
        dataSource={tableData as any}
        rowKey={(record: any) => record.id}
        bordered
        pagination={false}
      />
    </Container>
  );
};

const mapStateToProps = (state: any) => {
  const { currentUser, customers } = state.qiibee;
  const { total_loyalty_points, followers } = currentUser || {};
  const temp = customers.filter((customer: any) => {
    const { username } = customer;
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
