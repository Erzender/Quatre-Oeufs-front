import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import Login from './Login';
import Board from './Board/components/Board';
import Game from './Game/components/Game';

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
    <Route path="/board" component={Board} />
    <Route path="/board/game" component={Game} />
    <Route path="/board/options" component={Board} />
  </div>
);

export default Router;
