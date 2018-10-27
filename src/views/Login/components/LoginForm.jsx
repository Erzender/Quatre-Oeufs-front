import React from 'react';

import colors from '../../../assets/colors';

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.main2,
    margin: 50,
    borderRadius: 50,
  },
};

const LoginForm = () => <div style={styles.container} />;

LoginForm.propTypes = {};

export default LoginForm;
