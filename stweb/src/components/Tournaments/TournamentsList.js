import React from 'react';
import { Table } from 'antd';

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
}, {
  title: 'Start Date',
  dataIndex: 'start_date',
  key: 'start_date',
}, {
  title: 'Amount Teams',
  dataIndex: 'amount_teams',
  key: 'amount_teams',
}, {
  title: 'Description',
  dataIndex: 'description',
  key: 'description',
}];


const TournamentsList = (props) => {
  return (
    <Table dataSource={props.list} columns={columns} rowKey="user_id" />
  )
}

export default TournamentsList;
