import React from 'react';
import MessageBox from './messageBox';
//style:
import '../componentStyle/messageListView.css'
//
function MessageListView(prop) {
    return (
        <div id="messageListView">
            <MessageBox />
            <MessageBox />
            <MessageBox />
            <MessageBox />
            <MessageBox />
            <MessageBox />
            <MessageBox />
            <MessageBox />
            <MessageBox />
        </div>
    );
}
export default MessageListView;