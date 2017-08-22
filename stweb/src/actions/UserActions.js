import * as types from "../constants/ActionTypes";

export function receiveUserInfo(userInfo) {
  return { type: types.RECEIVE_USER_INFO, userInfo };
}
