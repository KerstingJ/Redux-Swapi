import { 
  FETCHING_CHARACTERS_PENDING,
  FETCHING_CHARACTERS_SUCCESS,
  FETCHING_CHARACTERS_FAILURE
} from "../actions/index";

const initialState = {
  characters: [],
  // Array characters, Boolean fetching, null error.
  isFetching: false,
  error: null,

};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING_CHARACTERS_PENDING:
      return {
        ...state,
        isFetching: true
      }
    case FETCHING_CHARACTERS_SUCCESS:
      return {
        ...state,
        characters: action.payload.results,
        error: null,
        isFetching: false
      }
    case FETCHING_CHARACTERS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      }
    default:
      return state;
  }
};
