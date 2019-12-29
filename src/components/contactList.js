import React, { Component } from 'react'
import '../componentStyle/contactList.css'
import ContactView from './ContactView'


class ContactList extends Component {
    constructor(prop) {
        super(prop)
        let contactsFromParent = [];
        if(prop !== undefined){
            console.log("inside if")
            contactsFromParent = prop.contactList;
        }
        this.state = {
            contacts:contactsFromParent
        }
    }

    render() {
        return (
            <div id="contactListContainer">
                {
                    this.state.contacts.map(
                        (contact) => <ContactView contact={contact} />
                    )
                }
            </div>
        );
    }
}

export default ContactList;