import { FETCH_DATA } from './types';
import axios from 'axios';

export function fetchData() {
  return function (dispatch) {
    return axios
      .get('/default/VisualizatorApi')
      .then((response) => {
        dispatch(setData(response.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

// action creator
function setData(data) {
  return {
    type: FETCH_DATA,
    payload: data,
  };
}
