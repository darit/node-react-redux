// constants
const initialState = {
  show: {
    id: '',
    name: '',
    description: '',
    duration: '',
    schedule: '',
    poster: '',
    rating: '',
    language: '',
  },
  isLoading: false,
  error: null,
};

const SHOW_DUCKS_REQUEST = 'SHOW_DUCKS_REQUEST';
const SHOW_DUCKS_SUCCESS = 'SHOW_DUCKS_SUCCESS';
const SHOW_DUCKS_FAILURE = 'SHOW_DUCKS_FAILURE';

// reducer
export default function showReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_DUCKS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case SHOW_DUCKS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        show: action.payload,
      };
    case SHOW_DUCKS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

// action
export const fetchShow = (id) => async (dispatch) => {
  dispatch({ type: SHOW_DUCKS_REQUEST });
  try {
    const response = await fetch('http://localhost:3000/'+id);
    const data = await response.json();
    dispatch({ type: SHOW_DUCKS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SHOW_DUCKS_FAILURE, payload: error });
  }
};

