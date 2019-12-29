import React, { Component } from 'react';
import '../componentStyle/messageSection.css'
//components :
import TextBoxContainer from './textBoxContainer'
import EmojiContainer from './EmojiContainer'
import MessageListView from './MessegeListView'

class MessageSection extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div id="messageSectionContainer">
                <TextBoxContainer />
                <MessageListView />
            </div>
        );
    }
}

export default MessageSection;