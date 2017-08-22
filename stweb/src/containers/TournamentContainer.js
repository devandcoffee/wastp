import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Tournament from "../components/Tournament";
import * as TournamentActions from "../actions/TournamentActions";

class TournamentContainer extends Component {
  refreshList = (pagination, filters, sorter) => {
    this.props.actions.fetchTournaments({ pagination, filters, sorter });
  };

  saveTournament = data => {
    this.props.actions.saveTournament(data);
  };

  updateTournament = (id, data) => {
    this.props.actions.updateTournament(id, data);
  };

  deleteTournament = id => {
    this.props.actions.deleteTournament(id);
  };

  render() {
    return (
      <Tournament
        {...this.props}
        refreshList={this.refreshList}
        saveTournament={this.saveTournament}
        updateTournament={this.updateTournament}
        deleteTournament={this.deleteTournament}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    userInfo: state.authed.userInfo,
    tournamentsList: state.tournaments.tournamentsList,
    refresh: state.tournaments.refresh,
    pagination: state.tournaments.pagination
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
