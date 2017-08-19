import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Tournament from "../components/Tournament";
import * as TournamentActions from "../actions/TournamentActions";

class TournamentContainer extends Component {
  componenDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    this.props.actions.fetchTournaments();
  };

  saveTournament = data => {
    this.props.actions.saveTournament(data);
  };

  render() {
    return (
      <Tournament
        {...this.props}
        refreshList={this.refreshList}
        saveTournament={this.saveTournament}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    userInfo: state.authed.userInfo,
    tournamentsList: state.tournaments.tournamentsList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TournamentActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  TournamentContainer
);
