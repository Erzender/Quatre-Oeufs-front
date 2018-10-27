import React from 'react';

const styles = {
  def: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    minHeight: 50,
    maxHeight: 50,
  },
};

const MessageInput = () => (
  <div style={styles.def}>
    <input type="text" name="name" />
    <button type="button">Submit</button>
  </div>
);

export default MessageInput;
