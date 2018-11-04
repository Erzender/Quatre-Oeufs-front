import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import Login from './Login';
import Board from './Board/components/Board';
import RegisterForm from './Login/components/RegisterForm';
// import Game from './Game/components/Game';

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
    <Route exact path="/" render={() => <Redirect to="/login" />} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={RegisterForm} />
    <Route path="/board" component={Board} />
  </div>
);

export default Router;
