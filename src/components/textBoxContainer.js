import React, { Component } from 'react';

import '../componentStyle/textBoxContainer.css'
import TextBox from './TextBox';
import Emoji from './EmojiContainer'

class TextBoxContainer extends Component {
    constructor() {
        super()
    }



    render() {
        return (
            <div id="textBoxContainer">
                <TextBox />
                <Emoji />
            </div>
        );
    }
}
export default TextBoxContainer;