import React, { Component } from 'react';
import '../componentStyle/textbox.css'
class TextBox extends Component {
    constructor(prop) {
        super(prop)
        this.handlePressEnter = this.handlePressEnter.bind(this);
        this.state = {
            addMessage: prop.addMessage
        }
    }
    //handle message from user
    // callback function to send date to parent
    handlePressEnter(event) {
        let message;
        if (event.key === 'Enter') {
            let date = new Date().toDateString();
            let sender = "You";
            let context = event.target.value;
            event.target.value = "";
            message = {
                context:context,
                sender:sender,
                sentDate:date
            };
            this.state.addMessage(message);
        }

    }

    render() {
        return (
            <div id="tHolder">
                <input
                    onKeyPress={this.handlePressEnter} placeholder="Type your message ..." autoFocus id="textBox" />
            </div>
        );
    }
}
export default TextBox;