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
function messageBox(prop) {
    const isYou = prop.message.sender === "You";
    const messageStyle = {
      float : isYou? 'right' : 'left',
      borderRadius : isYou ?'10px 10px 0px 10px' : '10px 10px 10px 0px'
    };
    return (
        <div id="messageBoxContainer">
            <div
                id="message"
                style={messageStyle}
            >
                <div id="senderName">{prop.message.sender}</div>
                <p>{prop.message.context}</p>
                <div id="recDate">{prop.message.sentDate}</div>
            </div>
        </div>
    );
}

export default messageBox;