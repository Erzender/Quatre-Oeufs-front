import React from 'react';
import {
  compose, createStore, applyMiddleware, combineReducers,
} from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import { reducer as formReducer } from 'redux-form';

import Router from './views/Router';
import persist from './persistDuck/reducer';
import register from './views/Login/loginReducers';

const rootReducer = combineReducers({ persist, form: formReducer, register });

const persistConfig = {
  key: 'persist',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, compose(applyMiddleware(thunkMiddleware)));
const persistor = persistStore(store);

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router />
    </PersistGate>
  </Provider>
);
export default App;
