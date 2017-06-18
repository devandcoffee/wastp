import React, { Component } from 'react';
import { Button, Row, notification } from 'antd';
import WrappedTournamentsAdd from './TournamentsAdd';
import TournamentsList from './TournamentsList';
import * as tournamentsApi from '../../api/tournamentsApi';
import * as TABLE_ACTIONS from './constants';

const MODE_LIST = 0;
const MODE_ADD = 1;
const MODE_EDIT = 2;
const MODE_DETAIL = 3;

const NOTIFICATION_SUCCESS = 'success';
const NOTIFICATION_INFO = 'info';
const NOTIFICATION_WARNING = 'warning';
const NOTIFICATION_ERROR = 'error';

class Tournaments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tournamentsList: [],
      activeRecord: null,
      mode: MODE_LIST,
    }
  }

  componentDidMount() {
    tournamentsApi.get().then(response => this.setState({ tournamentsList: response.data }));
  }

  componentDidUpdate(prevProps, prevState) {
    const { mode } = this.state;
    if (prevState.mode !== mode) {
      tournamentsApi.get().then(response => this.setState({ tournamentsList: response.data }));
    }
  }

  newTournament = () => {
    this.setState({ mode: MODE_ADD, activeRecord: null })
  }

  backToList = () => {
    this.setState({ mode: MODE_LIST })
  }

  showNotification = (type, title, description) => {
    notification[type]({
      message: title,
      description: description,
    });
  }

  saveTournament = (data) => {
    const { mode } = this.state;
    if (mode === MODE_ADD) {
      tournamentsApi.post(data).then(response => {
        this.showNotification(NOTIFICATION_SUCCESS, 'Tournaments', 'Tournament created.')
      }).catch((err) => {
        this.showNotification(NOTIFICATION_ERROR, 'Tournaments', 'There was an error while creating the tournament.')
      })
    }

    if (mode === MODE_EDIT) {
      tournamentsApi.patch(data.id, data).then(response => {
        this.showNotification(NOTIFICATION_SUCCESS, 'Tournaments', 'Tournament updated.')
      }).catch((err) => {
        this.showNotification(NOTIFICATION_ERROR, 'Tournaments', 'There was an error while updating the tournament.')
      })
    }

  }

  emit = (text, record, index, action) => {
    console.log(action, record)
    switch (action) {
      case TABLE_ACTIONS.EDIT_RECORD:
        this.setState({
          mode: MODE_EDIT,
          activeRecord: record
        })
        break;

      default:
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
