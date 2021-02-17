import * as types from "./actionTypes";
import * as launchApi from "../../api/launchApi";

export const loadLaunchesSuccess = launches => {
  return { type: types.LOAD_LAUNCHES, launches };
}
export const addFilters = filters => {
  return { type: types.ADD_FILTER, filters };
}

export const loadLaunches = () => {
  return function(dispatch) {
    return launchApi
      .getLaunches()
      .then(launches => {
        dispatch(loadLaunchesSuccess(launches));
      })
      .catch(error => {
        throw error;
      });
  };
}

export const addFilterToLaunches = filters => {
  return function(dispatch) {
    return launchApi
      .getFilterLaunches(filters)
      .then(launches => {
        dispatch(loadLaunchesSuccess(launches));
      })
      .catch(error => {
        throw error;
      });
  };
}
