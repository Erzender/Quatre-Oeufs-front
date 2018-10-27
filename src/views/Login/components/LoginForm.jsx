import React from 'react';

import colors from '../../../assets/colors';
import T from '../../../reusableComponents/T';

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.main2,
    margin: 50,
    padding: 50,
    borderRadius: 50,
    color: colors.main3,
    justifyContent: 'center',
  },
  welcomeMessage: {
    fontSize: 50,
    fontWeight: 'bold',
  },
};

const LoginForm = () => (
  <div style={styles.container}>
    <T text="Welcome to Quatre Oeufs" style={styles.welcomeMessage} />
  </div>
);

LoginForm.propTypes = {};

export default LoginForm;
