import axios from "axios";
import constructFromUrl from "../utils/api";

const TOURNAMENTS_URL = constructFromUrl("tournaments");

export const get = () => axios.get(TOURNAMENTS_URL);

export function fetchTournaments() {
  return dispatch => {
    axios
      .get(TOURNAMENTS_URL)
      .then(tournaments => dispatch(loadTournaments(tournaments.data.data)));
  };
}

export function loadTournaments(tournamentsList) {
  return { type: "FETCH_TOURNAMENTS", tournamentsList };
}
