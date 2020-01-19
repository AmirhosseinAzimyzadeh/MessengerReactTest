import React, { Component } from 'react';
import '../componentStyle/contactView.css'
import ContactViewUI from './contactViewUI'

class ContactView extends Component {
    constructor(props) {
        super(props);
        ///
        this.state = {
            contact: props.contact
        }
    }



    render() {
        return (
            <div id="contactView">
                <ContactViewUI contact={this.state.contact} />
            </div>
        );
    }
}

export default ContactView;