import React from 'react'
import Header from '../../components/header/Header'
import './aboutpage.css'
import MeetOwners from './meetowners/MeetOwners'
import Owners from './owners/Owners'
import WhyAcme from './whyAcme/WhyAcme'
import { Helmet } from 'react-helmet'

export default function AboutPage() {
    return (
        <div>
            <Helmet>
                <title>ABout</title>
            </Helmet>
            <Header
                btnType="transparent-btn"
                headerClass="about-header"
                heading="Your Adventure Awaits"
                text="Acme Outdoors has everything you need to help you get 
                started today. Check out our wonderful collection of gear that 
                will make your next adventure complete."
            />
            <WhyAcme />
            <MeetOwners />
            <Owners />
            <Header
                btnType="contact-support-btn"
                headerClass="help-header"
                heading="Need Help?"
                text="Need help or assistance? Our team is standing by to make 
                sure you get the help you need. Whether you need to adjust an 
                order or delivery details, we're ready to help!"
            />
        </div>
    )
}
