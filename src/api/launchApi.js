import { handleResponse, handleError } from "./apiUtils";
const url = "https://api.spacexdata.com/v3/launches?";

export function getLaunches() {
  return fetch(url)
    .then(handleResponse)
    .catch(handleError);
}

export function getFilterLaunches(filters) {
  let filterUrl = '';
  filters.map(filter => {
    filterUrl += '&' + filter.name + '=' + filter.value;
  });
  return fetch(url+filterUrl)
    .then(handleResponse)
    .catch(handleError);
}