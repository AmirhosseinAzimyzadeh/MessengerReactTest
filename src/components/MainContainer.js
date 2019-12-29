import React from 'react';
import '../componentStyle/main.css'

// inner components
import ContactList from '../components/contactList'
import MessageSection from '../components/messegeSection'

// simulate data ==>
import contactList from '../data/ContactsData'
function MainContainer(prop){
    //


    //
    return(
        <div id="mainContainer">
            <ContactList contactList={contactList}  />
            <MessageSection />
        </div>
    );
}

export default MainContainer;