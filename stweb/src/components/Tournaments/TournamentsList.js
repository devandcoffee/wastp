import React, { Component } from 'react';
import { Button, Table } from 'antd';
import * as TABLE_ACTIONS from './constants';

class TournamentsList extends Component {
  render() {
    const { list, emit } = this.props;
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
    }, {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: (text, record, index) => (
        <span>
          <Button icon="search" onClick={() => emit(text, record, index, TABLE_ACTIONS.SHOW_RECORD)} />
          <Button icon="edit" onClick={() => emit(text, record, index, TABLE_ACTIONS.EDIT_RECORD)} />
          <Button icon="delete" onClick={() => emit(text, record, index, TABLE_ACTIONS.REMOVE_RECORD)} />
        </span>
      )
    }];
    return (
      <Table dataSource={list} columns={columns} rowKey="user_id" />
    );
  }
}

export default TournamentsList;
