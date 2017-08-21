import axios from "axios";
import constructFromUrl from "../utils/api";
import * as notifications from "./NotificationActions";
import * as types from "../constants/ActionTypes";
import * as tournamentMsg from "../messages/Tournaments";

const TOURNAMENTS_URL = constructFromUrl("tournaments");

export function fetchTournaments(tableParams) {
  const params = {
    page: tableParams.pagination.current,
    perPage: tableParams.pagination.pageSize
  };
  return dispatch => {
    axios.get(TOURNAMENTS_URL, { params }).then(tournaments => {
      dispatch(receiveTournaments(tournaments.data.data));
      dispatch(receiveMeta(tournaments.data.meta));
      dispatch(refreshTournaments(false));
    });
  };
}

export function saveTournament(tournament) {
  return dispatch => {
    axios
      .post(TOURNAMENTS_URL, tournament)
      .then(response => {
        if (response.status === 200) {
          dispatch(receiveTournament(response.data.data));
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
          dispatch(receiveTournament(response.data.data));
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

export function deleteTournament(id) {
  return dispatch => {
    axios
      .delete(`${TOURNAMENTS_URL}/${id}`)
      .then(response => {
        if (response.status === 200) {
          dispatch(refreshTournaments(true));
          notifications.showNotification(
            types.NOTIFY_SUCCESS,
            tournamentMsg.TITLE,
            tournamentMsg.DELETED
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

function receiveMeta(meta) {
  const pagination = {
    current: meta.pagination.current_page,
    total: meta.pagination.total,
    pageSize: meta.pagination.per_page
  };
  return { type: types.RECEIVE_META, pagination };
}

function receiveTournament(tournaments) {
  return { type: types.RECEIVE_TOURNAMENT, tournament: tournaments[0] };
}

function receiveTournaments(tournamentsList) {
  return { type: types.REQUEST_TOURNAMENTS, tournamentsList };
}

function refreshTournaments(refresh) {
  return { type: types.REFRESH_TOURNAMENTS, refresh };
}
