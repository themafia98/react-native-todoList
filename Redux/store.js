import { createStore, applyMiddleware } from "redux";
import combineReducers from './combineReducers';


const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
  process.env.NODE_ENV !== 'production'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(
    applyMiddleware()
);
          
export default createStore(combineReducers, enhancer);
