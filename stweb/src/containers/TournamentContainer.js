import React, { Component } from "react";
import { connect } from "react-redux";
import Tournament from "../components/Tournament";
import * as TournamentActions from "../actions/TournamentActions";

class TournamentContainer extends Component {
  componenDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    this.props.dispatch(TournamentActions.fetchTournaments());
  };

  render() {
    return <Tournament {...this.props} refreshList={this.refreshList} />;
  }
}

function mapStateToProps(state) {
  return {
    tournamentsList: state.tournaments.tournamentsList
  };
}

export default connect(mapStateToProps)(TournamentContainer);
