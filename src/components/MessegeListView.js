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

class MessageListView extends React.Component {
    constructor(prop) {
        super(prop)
        this.state = {
            renderList: []
        }
    }

    static getDerivedStateFromProps(prop, state) {
        let messages = prop.messagesList;
        let renderList = <p>nothing find</p>;
        if (messages !== undefined) {
            renderList = messages.map(message => <MessageBox message={message} />);
        }
        return {
            renderList: renderList
        };
    }

    render() {
        return (
            <div 
                id="messageListView">
                {this.state.renderList}
            </div>
        );
    }
}
export default MessageListView;