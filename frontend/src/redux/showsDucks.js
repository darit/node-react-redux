// constants
const initialState = {
  shows: [],
  isLoading: false,
  error: null,
};

const FETCH_SHOWS_START = 'FETCH_SHOWS_START';
const FETCH_SHOWS_SUCCESS = 'FETCH_SHOWS_SUCCESS';
const FETCH_SHOWS_FAILURE = 'FETCH_SHOWS_FAILURE';

// reducer
export default function showsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SHOWS_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SHOWS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        shows: action.payload,
      };
    case FETCH_SHOWS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

// actions
export const fetchShows = () => async (dispatch) => {
  dispatch({ type: FETCH_SHOWS_START });
  try {
    const response = await fetch('http://localhost:3000/');
    const data = await response.json();
    dispatch({ type: FETCH_SHOWS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_SHOWS_FAILURE, payload: error });
  }
};
