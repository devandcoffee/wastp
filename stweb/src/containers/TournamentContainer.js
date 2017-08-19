import React, { Component } from "react";
import { connect } from "react-redux";
import Tournaments from "../components/Tournaments";

class TournamentContainer extends Component {
  render() {
    return <Tournaments />;
  }
}

function mapStateToProps(state) {
  console.log(state);

  return {};
}

export default connect(mapStateToProps)(TournamentContainer);
