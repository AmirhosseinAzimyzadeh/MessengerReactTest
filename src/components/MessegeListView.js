import React from 'react';
import MessageBox from './messageBox';
//style:
import '../componentStyle/messageListView.css'
//
/*
    Message Structure:
        contex : whole text of messege
        sender : id of sender person
        receiver : id of receiver person
        sentDate : date that sender sent messege
        recDate : date that receiver see Msg.
*/

function MessageListView(prop) {
    let messages = prop.messagesList;
    let renderList = <p>nothing find</p>;
    if(messages !== undefined){
        renderList = messages.map(message => <MessageBox message={message} />);
    }
    return (
        <div id="messageListView">
            {renderList}
        </div>
    );
}
export default MessageListView;