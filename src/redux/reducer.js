import creators from './actionCreators';

const initialValue = {
  characters: [],
  myFavourites: [],
};

export default function rootReducer(state = initialValue, action) {
  switch (action.type) {
    case creators.ADD_FAV:
      return {
        ...state,
        myFavourites: [...state.myFavourites, action.payload],
      };
    case creators.REMOVE_FAV:
      return {
        ...state,
        myFavourites: state.myFavourites.filter(
          (favChar) => favChar.id !== Number(action.payload)
        ),
      };
    default:
      return { ...state };
  }
}
