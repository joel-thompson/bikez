import apiUrl from './apiUrl';
import axios from 'axios';

export function apiIndex(resource, dataCallback) {
  axios
    .get(apiUrl('/api/v1/' + resource), { withCredentials: true })
    .then((response) => {
      if (typeof dataCallback === 'function') {
        dataCallback(response.data);
      }
    })
    .catch((error) => {
      console.log(`api error ${resource}#index:`, error);
    });
}

export function apiShow(resource, id, dataCallback) {
  axios
    .get(apiUrl(`/api/v1/${resource}/${id}`), {
      withCredentials: true,
    })
    .then((response) => {
      if (typeof dataCallback === 'function') {
        dataCallback(response.data);
      }
    })
    .catch((error) => {
      console.log(`api error ${resource}#show:`, error);
    });
}

export function apiUpdate(resource, id, params, dataCallback) {
  axios
    .put(apiUrl(`/api/v1/${resource}/${id}`), params, {
      withCredentials: true,
    })
    .then((response) => {
      if (typeof dataCallback === 'function') {
        dataCallback(response.data);
      }
    })
    .catch((error) => {
      console.log(`api error ${resource}#update:`, error);
    });
}

export function apiDestroy(resource, id, dataCallback) {
  axios
    .delete(apiUrl(`/api/v1/${resource}/${id}`), {
      withCredentials: true,
    })
    .then((response) => {
      if (typeof dataCallback === 'function') {
        dataCallback(response.data);
      }
    })
    .catch((error) => {
      console.log(`api error ${resource}#destroy:`, error);
    });
}
