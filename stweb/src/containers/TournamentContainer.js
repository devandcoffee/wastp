import React, { Component } from "react";
import { connect } from "react-redux";
import Tournament from "../components/Tournament";

class TournamentContainer extends Component {
  render() {
    return <Tournament />;
  }
}

function mapStateToProps(state) {
  console.log(state);

  return {};
}

export default connect(mapStateToProps)(TournamentContainer);
