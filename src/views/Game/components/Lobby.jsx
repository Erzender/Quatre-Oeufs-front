import React from 'react';

import colors from '../../../assets/colors';
import T from '../../../reusableComponents/T';

const styles = {
  container: {
    display: 'flex',
    backgroundColor: colors.main1,
    flex: 1,
    minHeight: 100,
    maxHeight: 100,
  },
  lobby: {
    display: 'flex',
    backgroundColor: colors.main3,
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
  },
};
const Lobby = () => (
  <div style={styles.lobby}>
    <T text="Lobby" />
  </div>
);

export default Lobby;
