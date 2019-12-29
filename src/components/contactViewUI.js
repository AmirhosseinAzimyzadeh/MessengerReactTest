import React from 'react';
import '../componentStyle/contactView.css'
function ContactViewUI(props) {
    let name, isOnline, profilePicture, lastSeen;
    if (props.contact !== undefined) {
        name = props.contact.name;
        isOnline = props.contact.isOnline;
        profilePicture = props.contact.profilePicture;
        isOnline = props.contact.isOnline;
    } else {
        name = "loading ..."
        isOnline = false
        profilePicture = ""
    }
    if (name.length > 20) {
        name = name.substring(0, 15) + "..."
    }
    const statusStle = {
        display : !isOnline ? "none" : ""
    }

    const url=""


    return (
        <div id="pt">
            <div id="pictureHolder">
                <img src={profilePicture}/>
            </div>
            <div style={statusStle} id="statusDot"></div>
            <div id="nameHolder">{name}</div>
        </div>
    );
}

export default ContactViewUI;