import axios from "axios";
import constructFromUrl from "../utils/api";
import * as types from "../constants/ActionTypes";

const TOURNAMENTS_URL = constructFromUrl("tournaments");

export const get = () => axios.get(TOURNAMENTS_URL);

export function fetchTournaments() {
  return dispatch => {
    axios
      .get(TOURNAMENTS_URL)
      .then(tournaments => dispatch(receiveTournaments(tournaments.data.data)));
  };
}

export function receiveTournaments(tournamentsList) {
  return { type: types.REQUEST_TOURNAMENTS, tournamentsList };
}

export function saveTournament(tournament) {
  return dispatch => {
    axios.post(TOURNAMENTS_URL, tournament).then(response => {
      if (response.status === 200) {
        dispatch(receiveTeournament(response.data.data));
      }
    });
  };
}

export function receiveTeournament(tournaments) {
  return { type: types.RECEIVE_TOURNAMENT, tournament: tournaments[0] };
}
