import React from 'react';
import '../componentStyle/messegeBox.css'
/*
    Message Structure:
        contex : whole text of message
        sender : id of sender person
        receiver : id of receiver person
        sentDate : date that sender sent message
        recDate : date that receiver see Msg.
*/
function MessageBox(prop) {
    return (
        <div id="messageBoxContainer">
            <div id="message">
                <div id="senderName">You:</div>
                <p>
                    this is message Test paragraph for testing message box style - from simulated data
                </p>
                <div id="recDate">29 Dec. 20:45</div>
            </div>
        </div>
    );
}

export default MessageBox;