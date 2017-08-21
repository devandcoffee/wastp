import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Modal, Row } from "antd";
import WrappedTournamentsForm from "./TournamentsForm";
import { SmartTable } from "../../shared";
import { FORM, TABLE } from "../../constants";

const confirm = Modal.confirm;

const columns = [
  {
    title: "Name",
    dataIndex: "attributes.name",
    key: "name"
  },
  {
    title: "Start Date",
    dataIndex: "attributes.start_date",
    key: "start_date"
  },
  {
    title: "Amount Teams",
    dataIndex: "attributes.amount_teams",
    key: "amount_teams"
  },
  {
    title: "Description",
    dataIndex: "attributes.description",
    key: "description"
  }
];

class Tournament extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRecord: null,
      mode: FORM.MODE_LIST
    };
  }

  componentDidMount() {
    this.props.refreshList();
  }

  componentDidUpdate(prevProps, prevState) {
    const { mode } = this.state;
    if (prevState.mode !== mode) {
      this.props.refreshList();
    }
  }

  newTournament = () => {
    this.setState({ mode: FORM.MODE_ADD, activeRecord: null });
  };

  backToList = () => {
    this.setState({ mode: FORM.MODE_LIST });
  };

  saveTournament = (data, id) => {
    const { mode } = this.state;
    if (mode === FORM.MODE_ADD) {
      this.props.saveTournament(data);
    }

    if (mode === FORM.MODE_EDIT) {
      this.props.updateTournament(id, data);
    }
  };

  showConfirm = id => {
    const { deleteTournament } = this.props;
    confirm({
      title: "Do you want to delete this item?",
      content: "When clicked the OK button, the tournament will be deleted.",
      onOk() {
        deleteTournament(id);
      },
      onCancel() {}
    });
  };

  requestConfirmation = id => {
    this.showConfirm(id);
  };

  emit = (text, record, index, action) => {
    switch (action) {
      case TABLE.EDIT_RECORD:
        this.setState({
          mode: FORM.MODE_EDIT,
          activeRecord: record
        });
        break;
      case TABLE.REMOVE_RECORD:
        this.requestConfirmation(record.id);
        break;
      case TABLE.SHOW_RECORD:
        this.setState({
          mode: FORM.MODE_DETAIL,
          activeRecord: record
        });
        break;
      default:
        break;
    }
  };

  render() {
    const { activeRecord, mode } = this.state;
    const { userInfo, tournamentsList } = this.props;
    return (
      <div>
        {mode === FORM.MODE_LIST &&
          <div>
            <Row>
              <Button type="primary" icon="plus" onClick={this.newTournament}>
                {" "}New Tournament{" "}
              </Button>
            </Row>
            <Row style={{ marginTop: "25px" }}>
              <SmartTable
                dataSource={tournamentsList}
                emit={this.emit}
                columns={columns}
                rowKey="id"
              />
            </Row>
          </div>}
        {mode !== FORM.MODE_LIST &&
          <WrappedTournamentsForm
            backToList={this.backToList}
            saveTournament={this.saveTournament}
            activeRecord={activeRecord}
            viewMode={mode}
            user_id={userInfo.user_id}
          />}
      </div>
    );
  }
}

Tournament.defaultProps = {
  tournamentsList: []
};

Tournament.propTypes = {
  tournamentsList: PropTypes.array,
  refreshList: PropTypes.func.isRequired,
  saveTournament: PropTypes.func.isRequired,
  updateTournament: PropTypes.func.isRequired,
  deleteTournament: PropTypes.func.isRequired
};

export default Tournament;
