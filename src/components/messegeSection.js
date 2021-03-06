import React, { Component } from 'react';
import '../componentStyle/messageSection.css'
//components :
import TextBoxContainer from './textBoxContainer'
import EmojiContainer from './EmojiContainer'
import MessageListView from './MessegeListView'
//simulated data
import messagesData from '../data/messagesData'
class MessageSection extends Component{
    constructor(props){
        super(props);
        this.addNewMessage = this.addNewMessage.bind(this);
        this.state={
            messages: messagesData
        }
    }
    addNewMessage(msg){
        console.log('from message section: ',msg);
        let newMessages = this.state.messages.map(x => x);
        newMessages.push(msg);
        this.setState({
            messages:newMessages
        });
    }
    render(){
        return(
            <div id="messageSectionContainer">
                <TextBoxContainer
                    addMessage={this.addNewMessage}
                />
                <MessageListView 
                messagesList = {this.state.messages}
                />
            </div>
        );
    }
}

export default MessageSection;