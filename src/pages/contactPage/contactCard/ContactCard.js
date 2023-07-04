import React from 'react'
import './contactcard.css'
import { BiMessage, BiMessageError } from 'react-icons/bi'

export default function ContactCard({ cardType }) {
    return (
        <div className={`${cardType} contact-card`}>
            {cardType === "contact-us-card" &&
                <>
                    <BiMessage className='contact-card-icon' />
                    <h4>Contact Us</h4>
                    <p>Just want to say hi? We'd love to
                        hear from you. We love our customers
                        and community!</p>
                    <a href='/contact#contactus'>Send Us A Message</a>
                </>
            }
            {cardType === "get-support-card" &&
                <>
                    <BiMessageError className='contact-card-icon' />
                    <h4>Get Support</h4>
                    <p>Have an issue with an order or with a
                        product you purchased from us? Fill
                        out our support form.</p>
                    <a href='/contact'>Contact Support</a>
                </>
            }
        </div>
    )
}
