import React from 'react';

import { Route } from 'react-router-dom';
import BoardHeader from './BoardHeader';
import Game from '../../Game/components/Game';

import colors from '../../../assets/colors';

const styles = {
  container: {
    display: 'flex',
    backgroundColor: colors.main1,
    flex: 1,
    flexDirection: 'column',
  },
  jeu: {
    display: 'flex',
    backgroundColor: colors.main3,
    flex: 1,
    textAlign: 'center',
  },
};

const Board = () => (
  <div style={styles.container}>
    <BoardHeader />
    <div style={styles.jeu}>
      <Route path="/board/game" component={Game} />
      {/* <Route path="/board/options" component={Settings} /> */}
    </div>
  </div>
);

export default Board;
