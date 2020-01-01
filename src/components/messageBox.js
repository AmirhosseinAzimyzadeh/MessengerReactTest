import React from 'react';
import '../componentStyle/messageBox.css'
/*
    Message Structure:
        context : whole text of messege
        sender : id of sender person
        receiver : id of receiver person
        sentDate : date that sender sent messege
        recDate : date that receiver see Msg.
*/
function messegeBox(prop) {
    return (
        <div id="messageBoxContainer">
            <div id="message">
                <div id="senderName">{prop.message.sender}</div>
                <p>{prop.message.context}</p>
                <div id="recDate">{prop.message.sentDate}</div>
            </div>
        </div>
    );
}

export default messegeBox;