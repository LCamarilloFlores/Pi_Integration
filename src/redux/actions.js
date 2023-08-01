import actions from './actionCreators';

export function addFav(props) {
  return function (dispatch) {
    dispatch({ type: actions.ADD_FAV, payload: props });
  };
}

export function removeFav(id) {
  return function (dispatch) {
    dispatch({ type: actions.REMOVE_FAV, payload: id });
  };
}
