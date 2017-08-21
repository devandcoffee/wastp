import * as types from "../constants/ActionTypes";

export default function tournaments(state = [], action) {
  switch (action.type) {
    case types.REQUEST_TOURNAMENTS: {
      return Object.assign({}, state, {
        tournamentsList: action.tournamentsList
      });
    }

    case types.RECEIVE_TOURNAMENT: {
      return Object.assign({}, state, {
        activeTournament: action.tournament.attributes
      });
    }

    case types.REFRESH_TOURNAMENTS: {
      return Object.assign({}, state, {
        refresh: action.refresh
      });
    }

    case types.RECEIVE_META: {
      return Object.assign({}, state, {
        pagination: action.pagination
      });
    }

    default:
      return state;
  }
}
