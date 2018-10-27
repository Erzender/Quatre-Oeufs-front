import React from 'react';

import Chat from './Chat';
// import MainView from './MainView';

const styles = {
  def: {
    display: 'flex',
    flex: 1,
    // flexDirection: 'column',
  },
};

const Game = () => (
  <div style={styles.def}>
    <Chat />
  </div>
);

export default Game;
