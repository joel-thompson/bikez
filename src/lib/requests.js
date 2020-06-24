import apiUrl from './apiUrl';
import axios from 'axios';

export function apiIndex(resource, dataCallback) {
  axios
    .get(apiUrl('/api/v1/' + resource), { withCredentials: true })
    .then((response) => {
      dataCallback(response.data);
    })
    .catch((error) => {
      console.log(`error indexing ${resource}`, error);
    });
}

export function apiShow(resource, id, dataCallback) {
  axios
    .get(apiUrl(`/api/v1/${resource}/${id}`), {
      withCredentials: true,
    })
    .then((response) => {
      dataCallback(response.data);
    })
    .catch((error) => {
      console.log(`error indexing ${resource}`, error);
    });
}
