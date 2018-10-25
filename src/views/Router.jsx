import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './Login';

const styles = {
  container: {
    display: 'flex',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
};

const Router = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

const App = () => (
  <div style={styles.container}>
    <Route exact path="/" component={Login} />
  </div>
);

export default Router;
