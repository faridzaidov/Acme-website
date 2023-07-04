import React from 'react'
import ContactForm from './contactForm/ContactForm'
import ContactHeader from './contactHeader/ContactHeader'
import './contactpage.css'
import { Helmet } from 'react-helmet'

export default function ContactPage() {
    return (
        <div>
            <Helmet>
                <title>Contact</title>
            </Helmet>
            <ContactHeader />
            <ContactForm />
        </div>
    )
}
