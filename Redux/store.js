import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from 'redux-saga';
import initialSagas from './Saga';
import combineReducers from './combineReducers';


const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
  process.env.NODE_ENV !== 'production'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const sagaMiddleware = createSagaMiddleware();

const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware)
);

const store = createStore(combineReducers, enhancer);
sagaMiddleware.run(initialSagas);       

export default store;
