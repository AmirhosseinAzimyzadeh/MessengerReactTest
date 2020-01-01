import React, { Component } from 'react';

import '../componentStyle/textBoxContainer.css'
import TextBox from './TextBox';
import Emoji from './EmojiContainer'

function TextBoxContainer(prop) {
    return (
        <div id="textBoxContainer">
            <TextBox addMessage={prop.addMessage} />
            <Emoji />
        </div>
    );
}

export default TextBoxContainer;