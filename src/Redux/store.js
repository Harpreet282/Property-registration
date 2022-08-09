import { legacy_createStore } from "redux";
import allReducers from "./Reducers";

const store = legacy_createStore(
  allReducers
);
export default store;
