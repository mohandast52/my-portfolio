import {
  combineReducers, createStore, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import qiibee from './qiibee';

const rootReducer = combineReducers({ qiibee });

const enhancers = [];
const middleware = [thunk];

const composeWithDevTools = typeof window === 'object'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  && (process.env.NODE_ENV === 'development'
    || process.env.NODE_ENV === 'integration')
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const composedEnhancers = composeWithDevTools(
  applyMiddleware(...middleware),
  ...enhancers,
);

export default (initialState = {}) => createStore(rootReducer, initialState, composedEnhancers);
