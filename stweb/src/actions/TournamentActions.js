import axios from "axios";
import constructFromUrl from "../utils/api";
import * as notifications from "./NotificationActions";
import * as types from "../constants/ActionTypes";
import * as tournamentMsg from "../messages/Tournaments";

const TOURNAMENTS_URL = constructFromUrl("tournaments");

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
    axios
      .post(TOURNAMENTS_URL, tournament)
      .then(response => {
        if (response.status === 200) {
          dispatch(receiveTeournament(response.data.data));
          notifications.showNotification(
            types.NOTIFY_SUCCESS,
            tournamentMsg.TITLE,
            tournamentMsg.CREATED
          );
        }
      })
      .catch(error => {
        notifications.showNotification(
          types.NOTIFY_ERROR,
          tournamentMsg.TITLE,
          tournamentMsg.ERROR
        );
      });
  };
}

export function updateTournament(id, tournament) {
  return dispatch => {
    axios
      .put(`${TOURNAMENTS_URL}/${id}`, tournament)
      .then(response => {
        if (response.status === 200) {
          dispatch(receiveTeournament(response.data.data));
          notifications.showNotification(
            types.NOTIFY_SUCCESS,
            tournamentMsg.TITLE,
            tournamentMsg.UPDATED
          );
        }
      })
      .catch(error => {
        notifications.showNotification(
          types.NOTIFY_ERROR,
          tournamentMsg.TITLE,
          tournamentMsg.ERROR
        );
      });
  };
}

export function receiveTeournament(tournaments) {
  return { type: types.RECEIVE_TOURNAMENT, tournament: tournaments[0] };
}
