import React, { Component } from 'react';
import TournamentsList from './TournamentsList';
import * as tournamentsApi from '../../api/tournamentsApi';

class Tournaments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tournamentsList: []
    }
  }

  componentDidMount() {
    tournamentsApi.get().then(response => this.setState({ tournamentsList: response.data }))
  }

  render() {
    return (
      <TournamentsList list={this.state.tournamentsList} />
    );
  }
}

export default Tournaments;
