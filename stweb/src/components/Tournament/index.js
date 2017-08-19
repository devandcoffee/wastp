import React, { Component } from "react";
import { Button, Modal, Row, notification } from "antd";
import WrappedTournamentsForm from "./TournamentsForm";
import { SmartTable } from "../../shared";
import { FORM, TABLE } from "../../constants";
import { NOTIFICATIONS } from "../../messages";
import * as tournamentsApi from "../../api/tournamentsApi";

const confirm = Modal.confirm;

const columns = [
  {
    title: "Name",
    dataIndex: "attributes.name",
    key: "name"
  },
  {
    title: "Start Date",
    dataIndex: "attributes.tart_date",
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

const showNotification = (type, title, description) => {
  notification[type]({
    message: title,
    description: description
  });
};

class Tournament extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tournamentsList: [],
      activeRecord: null,
      mode: FORM.MODE_LIST
    };
  }

  refreshList = () => {
    tournamentsApi.get().then(response => {
      this.setState({ tournamentsList: response.data.data });
    });
  };

  componentDidMount() {
    this.refreshList();
  }

  componentDidUpdate(prevProps, prevState) {
    const { mode } = this.state;
    if (prevState.mode !== mode) {
      this.refreshList();
    }
  }

  newTournament = () => {
    this.setState({ mode: FORM.MODE_ADD, activeRecord: null });
  };

  backToList = () => {
    this.setState({ mode: FORM.MODE_LIST });
  };

  saveTournament = data => {
    const { mode } = this.state;
    if (mode === FORM.MODE_ADD) {
      tournamentsApi
        .post(data)
        .then(response => {
          showNotification(
            NOTIFICATIONS.NOTIFICATION_SUCCESS,
            "Tournaments",
            "Tournament created."
          );
        })
        .catch(err => {
          showNotification(
            NOTIFICATIONS.NOTIFICATION_ERROR,
            "Tournaments",
            "There was an error while creating the tournament."
          );
        });
    }

    if (mode === FORM.MODE_EDIT) {
      tournamentsApi
        .patch(data.id, data)
        .then(response => {
          showNotification(
            NOTIFICATIONS.NOTIFICATION_SUCCESS,
            "Tournaments",
            "Tournament updated."
          );
        })
        .catch(err => {
          showNotification(
            NOTIFICATIONS.NOTIFICATION_ERROR,
            "Tournaments",
            "There was an error while updating the tournament."
          );
        });
    }
  };

  showConfirm = id => {
    const { refreshList } = this;
    confirm({
      title: "Do you want to delete this item?",
      content: "When clicked the OK button, the tournament will be deleted.",
      onOk() {
        tournamentsApi
          .remove(id)
          .then(response => {
            showNotification(
              NOTIFICATIONS.NOTIFICATION_SUCCESS,
              "Tournaments",
              "Tournament deleted."
            );
            refreshList();
          })
          .catch(err => {
            showNotification(
              NOTIFICATIONS.NOTIFICATION_ERROR,
              "Tournaments",
              "There was an error while deleting the tournament."
            );
          });
      },
      onCancel() {}
    });
  };

  deleteTournament = id => {
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
        this.deleteTournament(record.id);
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
    const { activeRecord, mode, tournamentsList } = this.state;
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
          />}
      </div>
    );
  }
}

export default Tournament;
