import { FETCH_DATA, SITE_NAME } from './types';
import axios from 'axios';

// async function fetchData() {
//   const res = await fetch('/default/VisualizatorApi');
//   if (res.ok === false) {
//     throw new Error(`${res.status} ${res.statusText}`);
//   }
//   const data = await res.json();
//   return data;
// }

export function fetchData() {
  return function (dispatch) {
    return axios
      .get('/default/VisualizatorApi')
      .then((response) => {
        dispatch(setData(response.data));
        console.log('response ', response.data);
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

// export const newSiteName = () => (dispatch, newName) => {
//   dispatch({
//     type: SITE_NAME,
//     payload: newName,
//   });
// };
