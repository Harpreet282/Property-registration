import { combineReducers } from "redux";
import loginState from "./login";

const allReducers = combineReducers({
  loginState,
});

export default allReducers;
