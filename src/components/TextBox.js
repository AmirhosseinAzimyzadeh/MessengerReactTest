import React, { Component } from 'react';
import '../componentStyle/textbox.css'
class TextBox extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div id="tHolder">
                <input placeholder="Type your message ..." autoFocus id="textBox" />
            </div>
        );
    }
}
export default TextBox;