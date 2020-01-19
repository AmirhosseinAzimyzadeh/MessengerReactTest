import React, {Component} from 'react';
import '../componentStyle/textBoxContainer.css';
import EmojiList from "./EmojiList";
import EmojiIcon from '../pics/Emoji_icon.svg';
class Emoji extends Component{
    constructor(props) {
        super(props);
        //bounding methods
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.state = {
            showList : false
        }
    }
    onMouseEnter(){
        this.setState({showList : true});
    }
    onMouseLeave(){
        this.setState({showList:false});
    }

    render(){
        return(
            <div>
            <EmojiList
                show={this.state.showList}
            />
            <div
                id="emojiContainer"
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
            >
                <img alt="Emoji" id="imageIcon" src={EmojiIcon}/>
            </div>
            </div>
        );
    }
}

export default Emoji;