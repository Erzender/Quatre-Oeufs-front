import React from 'react';

const MessageInput = () => {
    return (
        <div>
            <form>
                <label>
                    Chat:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}


export default MessageInput;
