import React from 'react';
import '../componentStyle/messageBox.css'
/*
    Message Structure:
        contex : whole text of messege
        sender : id of sender person
        receiver : id of receiver person
        sentDate : date that sender sent messege
        recDate : date that receiver see Msg.
*/
function messegeBox(prop) {
    return (
        <div id="messageBoxContainer">
            <div id="message">
                <div id="senderName">You:</div>
                <p>
                    this is messege Test paragraph for testing messege box style - from simulated data
                </p>
                <div id="recDate">29 Dec. 20:45</div>
            </div>
        </div>
    );
}

export default messegeBox;