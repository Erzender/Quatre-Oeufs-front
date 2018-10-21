import React from 'react';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import Router from './views/Router';

const store = createStore(compose(applyMiddleware(thunkMiddleware)));
const App = () => (
  <Provider store={store}>
    {' '}
    <Router />
    {' '}
  </Provider>
);
export default App;
