import React from 'react';
import MessageBox from './messegeBox';
//style:
import '../componentStyle/messegeListView.css'
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