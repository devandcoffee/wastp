import * as types from "../constants/ActionTypes";

export default function authed(state = { userInfo: { user_id: 5 } }, action) {
  switch (action.type) {
    case types.RECEIVE_USER_INFO: {
      return Object.assign({}, state, {
        userInfo: action.userInfo
      });
    }

    default:
      return state;
  }
}
