import creators from './actionCreators';

const initialValue = {
  characters: [],
  myFavourites: [],
  filter: 'all',
  by: [],
  statistics: [{ origin: {} }, { species: {} }, { gender: {} }, { status: {} }],
  activeFilter: '',
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
      return {
        ...state,
        characters: [...state.characters, action.payload],
      };
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

    case creators.FILTRO:
      return {
        ...state,
        filter: action.payload,
        by: state.statistics.filter((item) =>
          item.hasOwnProperty(action.payload)
        )[0],
      };
    case creators.BY:
      return {
        ...state,
        activeFilter: action.payload,
      };

    default:
      return { ...state };
  }
}
