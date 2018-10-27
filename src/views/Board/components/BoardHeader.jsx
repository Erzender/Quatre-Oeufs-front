import React from 'react';
// import { Route } from 'react-router-dom';

import colors from '../../../assets/colors';
import T from '../../../reusableComponents/T';

const styles = {
  container: {
    display: 'flex',
    backgroundColor: colors.main1,
    flex: 2,
  },
  jeu: {
    display: 'flex',
    backgroundColor: colors.main3,
    flex: 1,
    textAlign: 'center'
  }
};

const BoardHeader = () => (
  <div style={styles.container}>
    <T text="Personnage" style={styles.jeu} />
    <T text="Jeu" style={styles.jeu} />
    <T text="Forum" style={styles.jeu} />
    <T text="Monde" style={styles.jeu} />
    <T text="Options" style={styles.jeu} />
    <T text="Deconnexion" style={styles.jeu} />
  </div>
);

/* const LoginForm = () => (
    <div style={styles.container}>
      <T text="Welcome to Quatre Oeufs" style={styles.jeu} />
    </div>
  );
 */
BoardHeader.propTypes = {};

export default BoardHeader;
