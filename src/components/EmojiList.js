import React from "react";
import '../componentStyle/emojiList.css'
function EmojiList(prop){
    const style = {
        visibility : prop.show ? 'visible' : 'hidden'
    };
    return(
        <div
            id="EmojiList"
            style={style}
        >
        </div>
    );
}
export default EmojiList;