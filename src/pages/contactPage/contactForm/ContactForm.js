import React, { useState } from 'react'
import './contactform.css'

export default function ContactForm() {
    const [formStyle, setFormStyle] = useState({ display: "block" })
    const [success, setSuccess] = useState({ display: "none" })
    const [btnText, setBtnText] = useState("Submit")

    function submitHandler(event) {
        event.preventDefault()
        setBtnText("Please wait...")
        setTimeout(() => {
            setFormStyle({ display: "none" })
            setSuccess({ display: "block" })
        }, 2000)
    }

    return (
        <div className='contact-form-section custom-container page-section' id='contactus'>
            <div className='contact-left'>
                <h3>Contact Us</h3>
                <p className='contact-adress'>
                    Acme Outdoors <br />
                    123 Rainy Street <br />
                    Oklahoma City, OK 73129
                </p>
                <p>
                    <strong>General Inquiries:</strong> (405) 555-5555 <br />
                    <strong>Customer Support:</strong> (405) 555-5556
                </p>
            </div>
            <div className='contact-right'>
                <h3>Contact Form</h3>
                <p>Send us a message and we'll get back to
                    you as soon as we can!</p>
                <div className='contact-form' style={formStyle}>
                    <form onSubmit={submitHandler} id="email-form" name="email-form" data-name="Email Form" method="get">
                        <label for="name">Name</label>
                        <input type="text" maxlength="256" name="name" data-name="Name" placeholder="Enter your name" id="name" required />
                        <label for="email">Email Address</label>
                        <input type="email" maxlength="256" name="email" data-name="Email" placeholder="Enter your email address" id="email" required />
                        <label for="Message">Your Message</label>
                        <textarea placeholder="Enter your message" maxlength="5000" id="Message" name="Message" data-name="Message" required></textarea>
                        <input type="submit" value={btnText} className="contact-form-btn" />
                    </form>
                </div>
                <div className='form-success' style={success}>
                    <p>Thank you! Your submission has been received! We'll be in touch soon!</p>
                </div>
            </div>
        </div >
    )
}
