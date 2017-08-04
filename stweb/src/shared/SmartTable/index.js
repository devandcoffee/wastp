import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { Button, Table } from "antd";
import * as TABLE_ACTIONS from "./constants";

const ACTIONS_OBJ = emit => ({
  title: "Action",
  dataIndex: "",
  key: "x",
  render: (text, record, index) =>
    <span>
      <Button
        icon="search"
        onClick={() => emit(text, record, index, TABLE_ACTIONS.SHOW_RECORD)}
      />
      <Button
        icon="edit"
        onClick={() => emit(text, record, index, TABLE_ACTIONS.EDIT_RECORD)}
      />
      <Button
        icon="delete"
        onClick={() => emit(text, record, index, TABLE_ACTIONS.REMOVE_RECORD)}
      />
    </span>
});

class SmartTable extends Component {
  constructor(props) {
    super(props);
    const { columns, dataSource, emit, rowKey } = this.props;
    this.state = {
      columns: columns.concat(ACTIONS_OBJ(emit)),
      dataSource,
      rowKey
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ dataSource: nextProps.dataSource });
  }

  render() {
    const { columns, dataSource, rowKey } = this.state;
    return <Table dataSource={dataSource} columns={columns} rowKey={rowKey} />;
  }
}

SmartTable.defaultProps = {
  rowKey: ""
};

SmartTable.propTypes = {
  dataSource: PropTypes.array.isRequired,
  emit: PropTypes.func.isRequired,
  rowKey: PropTypes.string
};

export default SmartTable;
