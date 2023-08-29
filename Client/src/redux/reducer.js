import creators from './actionCreators';

const initialValue = {
  characters: [],
  myFavourites: [],
  loading: false,
};

export default function rootReducer(state = initialValue, action) {
  switch (action.type) {
    // case creators.ADD_FAV:
    //   return {
    //     ...state,
    //     myFavourites: [...state.myFavourites, action.payload],
    //   };
    case creators.ADD_FAV:
      return {
        ...state,
        myFavourites: action.payload,
        characters: action.payload,
      };
    // case creators.REMOVE_FAV:
    //   return {
    //     ...state,
    //     myFavourites: state.myFavourites.filter(
    //       (favChar) => favChar.id !== Number(action.payload)
    //     ),
    //   };
    case creators.REMOVE_FAV:
      return { ...state, myFavourites: action.payload };
    case creators.SHOW_LOADING:
      return { ...state, loading: true };
    case creators.HIDE_LOADING:
      return { ...state, loading: false };
    default:
      return { ...state };
  }
}
