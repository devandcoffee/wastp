import React, { Component } from 'react';
import { Button, Row } from 'antd';
import WrappedTournamentsAdd from './TournamentsAdd';
import TournamentsList from './TournamentsList';
import * as tournamentsApi from '../../api/tournamentsApi';

const MODE_LIST = 0;
const MODE_ADD = 1;
const MODE_EDIT = 2;
const MODE_DETAIL = 3;


class Tournaments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tournamentsList: [],
      mode: MODE_LIST,
    }
  }

  componentDidMount() {
    tournamentsApi.get().then(response => this.setState({ tournamentsList: response.data }))
  }

  newTournament = () => {
    this.setState({ mode: MODE_ADD })
  }

  backToList = () => {
    this.setState({ mode: MODE_LIST })
  }

  render() {
    const { mode, tournamentsList } = this.state;
    return (
      <div>
        {
          mode === MODE_LIST && <div>
            <Row>
              <Button type="primary" icon='plus' onClick={this.newTournament}> New Tournament </Button>
            </Row>
            <Row style={{ marginTop: '25px' }}>
              <TournamentsList list={tournamentsList} />
            </Row>
          </div>
        }
        {
          mode === MODE_ADD && <WrappedTournamentsAdd backToList={this.backToList} />
        }
      </div>

    );
  }
}

export default Tournaments;
