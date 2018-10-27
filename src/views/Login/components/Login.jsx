import React from 'react';
import { Route } from 'react-router-dom';

import colors from '../../../assets/colors';
import LoginForm from '../containers/LoginForm';

const styles = {
  container: {
    display: 'flex',
    backgroundColor: colors.main1,
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
