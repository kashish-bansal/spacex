import { combineReducers } from "redux";
import launches from "./launchReducer";

const rootReducer = combineReducers({
  launches,
  //Add multiple reducers
});

export default rootReducer;
