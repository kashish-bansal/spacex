import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function launchReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_LAUNCHES:
      return  {...state, launches: action.launches};
    case types.ADD_FILTER:
        return {...state, filters: action.filters};
    default:
      return state;
  }
}
