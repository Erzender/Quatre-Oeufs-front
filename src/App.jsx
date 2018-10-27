import React from 'react';
import {
  compose, createStore, applyMiddleware, combineReducers,
} from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import Router from './views/Router';
import persistReducer from './persistDuck/reducer';

const rootReducer = combineReducers({ persistReducer });

const store = createStore(rootReducer, compose(applyMiddleware(thunkMiddleware)));
const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);
export default App;
