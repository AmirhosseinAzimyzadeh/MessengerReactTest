import React, {Component} from 'react';
import '../componentStyle/textBoxContainer.css';
import EmojiList from "./EmojiList";
import EmojiIcon from '../pics/Emoji_icon.svg';
class Emoji extends Component{
    constructor(props) {
        super(props);
        //bounding methods
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.state = {
            showList : false
        }
    }
    onMouseEnter(){
        this.setState({showList : true});
    }

    render(){
        return(
            <div
                id="emojiContainer"
                onMouseEnter={this.onMouseEnter}
            >
                <img alt="Emoji" id="imageIcon" src={EmojiIcon}/>
            </div>
        );
    }
}

export default Emoji;