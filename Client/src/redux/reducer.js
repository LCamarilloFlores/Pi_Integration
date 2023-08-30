import creators from './actionCreators';

const initialValue = {
  characters: [],
  myFavourites: [],
  filter: 'all',
  by: [],
  statistics: [{ origin: 0 }, { species: 0 }, { gender: 0 }, { status: 0 }],
  result: [],
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
    case creators.APPLY_FILTER:
      return { ...state, filter: action.payload };
    case creators.ADD_CHARACTER: {
      return { ...state, characters: [...state.characters, action.payload] };
    }
    case creators.REMOVE_CHARACTER:
      return {
        ...state,
        characters: [...action.payload],
      };

    case creators.ADD_STATISTICS:
      return {
        ...state,
        statistics: [...action.payload],
      };

    default:
      return { ...state };
  }
}
