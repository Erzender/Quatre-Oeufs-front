import React from 'react';
import { Route } from 'react-router-dom';

import LoginForm from './LoginForm'

const styles = {
  container: {
    backgroundColor: '#333333',
    flex: 1,
  },
};

const Login = () => (
  <div style={styles.container}>
    <Route path="/login" component={LoginForm} />
  </div>
);

Login.propTypes = {};

export default Login;
