import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './Login';

const Router = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

const App = () => (
  <div>
    <Route exact path="/" component={Login} />
  </div>
);

export default Router;
