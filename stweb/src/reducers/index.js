import { combineReducers } from "redux";
import authed from "./authed";
import tournaments from "./tournaments";

const rootReducer = combineReducers({
  authed,
  tournaments
});

export default rootReducer;
