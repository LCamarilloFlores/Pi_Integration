import actions from './actionCreators';
import axios from 'axios';

// export function addFav(props) {
//   return function (dispatch) {
//     dispatch({ type: actions.ADD_FAV, payload: props });
//   };
// }

export const addCharacter = (id, statistics) => {
  return async (dispatch) => {
    try {
      const { data } = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      // Comienza operacion para agregar statistics del character
      const result = [];
      Object.keys(data).forEach((key) => {
        statistics.map((stat) => {
          if (stat.hasOwnProperty(key)) {
            const propiedad = key;
            const value =
              key !== 'origin' ? data[key] : Object.values(data[key])[0];
            const total = stat[key].hasOwnProperty(value)
              ? stat[key][value] + 1
              : 1;
            // console.log(
            //   'Propiedad: ' + propiedad,
            //   'Valor: ' + value,
            //   'Total: ' + total
            // );
            result.push({ [propiedad]: { ...stat[key], [value]: total } });
          }
        });
        dispatch({ type: actions.ADD_STATISTICS, payload: result });
      });
      console.log('Statistics despues de agregar: ', statistics);
      return dispatch({ type: actions.ADD_CHARACTER, payload: data });
    } catch (error) {
      throw new Error(error.message);
    }
  };
};

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
