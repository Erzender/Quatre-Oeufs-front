import React from 'react';

import T from '../../../reusableComponents/T';

const styles = {
  def: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
};

const Messages = () => (
  <div style={styles.def}>
    <T text="blabla" />
  </div>
);

export default Messages;
