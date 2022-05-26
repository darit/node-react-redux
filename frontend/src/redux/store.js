import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import showsReducer from "./showsDucks";
import showReducer from "./showDucks";

const rootReducer = combineReducers({
  shows: showsReducer,
  show: showReducer,
});

const composeEnhancers =
    (typeof window !== 'undefined' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

export default function generateStore() {
  return createStore(
      rootReducer,
      composeEnhancers(applyMiddleware(thunk))
  );
}
