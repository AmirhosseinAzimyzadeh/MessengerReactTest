import React from "react";
import '../componentStyle/emojiList.css'
function EmojiList(prop){
    const style = {
        display : prop.show ? 'inline' : 'none'
    };
    return(
        <div
            id="EmojiList"
            style={style}
        >
            Emoji List Here
        </div>
    );
}
export default EmojiList;