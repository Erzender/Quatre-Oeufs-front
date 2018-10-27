import React from 'react';

import Lobby from './Lobby';
import Messages from './Messages';
import MessageInput from './MessageInput';

const styles = {
  def: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
};

const Chat = () => (
  <div style={styles.chat}>
    <Lobby />
    <Messages />
    <MessageInput />
  </div>
);

export default Chat;
