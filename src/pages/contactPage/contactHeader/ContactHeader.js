import React from 'react'
import ContactCard from '../contactCard/ContactCard'
import './contactheader.css'

export default function ContactHeader() {
    return (
        <div className='contact-header'>
            <div className='custom-container'>
                <h1>Contact Acme Outdoors</h1>
                <div className='contact-header-cards'>
                    <ContactCard cardType="contact-us-card" />
                    <ContactCard cardType="get-support-card" />
                </div>
            </div>
            <div className='contact-header-img'></div>
        </div>
    )
}
