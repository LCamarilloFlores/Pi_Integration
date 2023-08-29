import actions, { HIDE_LOADING } from './actionCreators';
import axios from 'axios';

// export function addFav(props) {
//   return function (dispatch) {
//     dispatch({ type: actions.ADD_FAV, payload: props });
//   };
// }

export const addFav = (character) => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav';
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, character);
      return dispatch({
        type: actions.ADD_FAV,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

// export function removeFav(id) {
//   return function (dispatch) {
//     dispatch({ type: actions.REMOVE_FAV, payload: id });
//   };
// }

export const removeFav = (id) => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(endpoint);
      return dispatch({
        type: actions.REMOVE_FAV,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
