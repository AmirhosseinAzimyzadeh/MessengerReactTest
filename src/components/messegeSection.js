import React, { Component } from 'react';
import '../componentStyle/messageSection.css'
//components :
import TextBoxContainer from './textBoxContainer'
import EmojiContainer from './EmojiContainer'
import MessageListView from './MessegeListView'
//simulated data
import messagesData from '../data/messagesData'
class MessageSection extends Component{
    constructor(){
        super()
        this.state={
            messages: messagesData
        }
    }

    render(){
        return(
            <div id="messageSectionContainer">
                <TextBoxContainer />
                <MessageListView 
                messagesList = {this.state.messages} />
            </div>
        );
    }
}

export default MessageSection;