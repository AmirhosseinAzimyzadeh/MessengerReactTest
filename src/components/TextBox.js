import React, { Component } from 'react';
import '../componentStyle/textbox.css'
class TextBox extends Component {
    constructor() {
        super()
        this.handlePressEnter = this.handlePressEnter.bind(this);
    }
    //handle message from user
    handlePressEnter(event) {
        let message;
        if(event.key === 'Enter'){
            console.log('Enter pressed')
            message = event.target.value;
            console.log(message);
            event.target.value = ""
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