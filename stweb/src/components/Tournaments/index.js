import React, { Component } from 'react';
import { Button, Modal, Row, notification } from 'antd';
import WrappedTournamentsAdd from './TournamentsAdd';
import TournamentsList from './TournamentsList';
import * as tournamentsApi from '../../api/tournamentsApi';
import * as TABLE_ACTIONS from './constants';

const confirm = Modal.confirm;

const MODE_LIST = 0;
const MODE_ADD = 1;
const MODE_EDIT = 2;
const MODE_DETAIL = 3;

const NOTIFICATION_SUCCESS = 'success';
const NOTIFICATION_INFO = 'info';
const NOTIFICATION_WARNING = 'warning';
const NOTIFICATION_ERROR = 'error';

const showNotification = (type, title, description) => {
  notification[type]({
    message: title,
    description: description,
  });
}

class Tournaments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tournamentsList: [],
      activeRecord: null,
      mode: MODE_LIST,
    }
  }

  refreshList = () => {
    tournamentsApi.get().then(response => this.setState({ tournamentsList: response.data }));
  }

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
    this.setState({ mode: MODE_ADD, activeRecord: null })
  }

  backToList = () => {
    this.setState({ mode: MODE_LIST })
  }


  saveTournament = (data) => {
    if (mode === MODE_ADD) {
      tournamentsApi.post(data).then(response => {
        showNotification(NOTIFICATION_SUCCESS, 'Tournaments', 'Tournament created.')
      }).catch((err) => {
        showNotification(NOTIFICATION_ERROR, 'Tournaments', 'There was an error while creating the tournament.')
      })
    }

    if (mode === MODE_EDIT) {
      tournamentsApi.patch(data.id, data).then(response => {
        showNotification(NOTIFICATION_SUCCESS, 'Tournaments', 'Tournament updated.')
      }).catch((err) => {
        showNotification(NOTIFICATION_ERROR, 'Tournaments', 'There was an error while updating the tournament.')
      })
    }

  }

  showConfirm = (id) => {
    const { refreshList } = this;
    confirm({
      title: 'Do you want to delete this item?',
      content: 'When clicked the OK button, the tournament will be deleted.',
      onOk() {
        tournamentsApi.remove(id).then(response => {
          showNotification(NOTIFICATION_SUCCESS, 'Tournaments', 'Tournament deleted.')
          refreshList();
        }).catch((err) => {
          showNotification(NOTIFICATION_ERROR, 'Tournaments', 'There was an error while deleting the tournament.')
        })
      },
      onCancel() { },
    });
  }

  deleteTournament = (id) => {
    this.showConfirm(id);
  }

  emit = (text, record, index, action) => {
    switch (action) {
      case TABLE_ACTIONS.EDIT_RECORD:
        this.setState({
          mode: MODE_EDIT,
          activeRecord: record
        });
        break;
      case TABLE_ACTIONS.REMOVE_RECORD:
        this.deleteTournament(record.id);
        break;
      case TABLE_ACTIONS.SHOW_RECORD:
        this.setState({
          mode: MODE_DETAIL,
          activeRecord: record
        });
        break;
    }
  }

  render() {
    const { activeRecord, mode, tournamentsList } = this.state;
    return (
      <div>
        {
          mode === MODE_LIST && <div>
            <Row>
              <Button type="primary" icon='plus' onClick={this.newTournament}> New Tournament </Button>
            </Row>
            <Row style={{ marginTop: '25px' }}>
              <TournamentsList list={tournamentsList} emit={this.emit} />
            </Row>
          </div>
        }
        {
          (mode === MODE_ADD || mode === MODE_EDIT) &&
          <WrappedTournamentsAdd
            backToList={this.backToList}
            saveTournament={this.saveTournament}
            activeRecord={activeRecord}
          />
        }
      </div>

    );
  }
}

export default Tournaments;
