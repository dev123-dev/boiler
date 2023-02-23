import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import dag from "./dag";
export default combineReducers({
  alert,
  auth,
  dag,
});
