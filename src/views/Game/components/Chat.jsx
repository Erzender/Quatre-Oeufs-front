import React from 'react';

import Lobby from './Lobby';
import Messages from './Messages';
import MessageInput from './MessageInput';


const Chat = () => {
    return (
        <div>
            <Lobby />
            <Messages />
            <MessageInput />
        </div>
    )
}

export default Chat;
