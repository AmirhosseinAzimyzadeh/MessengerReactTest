import React from 'react';
import '../componentStyle/textBoxContainer.css';
import EmojiIcon from '../pics/Emoji_icon.svg'
function Emoji(){
    return(
        <div id="emojiContainer">
            <img id="imageIcon" src={EmojiIcon}/>
        </div>
    );
}

export default Emoji;