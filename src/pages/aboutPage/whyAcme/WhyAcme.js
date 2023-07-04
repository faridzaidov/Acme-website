import React from 'react'
import './whyacme.css'
import { MdOutlineVerified } from 'react-icons/md'
import { BsCart2, BsTruck } from 'react-icons/bs'
import { BiMessage } from 'react-icons/bi'

export default function WhyAcme() {

    return (
        <div className='custom-container page-section whyacme-section'>
            <div className='whyacme-section-head'>
                <p className='section-subhead'>Why acme outdoors?</p>
                <h2 className='section-mainhead'>We’re the best in the business.</h2>
                <p>From more than 30 years, we’ve been leading the way across Oklahoma — <br />
                    creating the best possible customer experience since 1989.</p>
            </div>

            <div className='whyacme-section-reasons'>
                <div className='reason-card'>
                    <div className='reason-icon'>
                        <MdOutlineVerified color='#eb5757' size='40px' />
                    </div>
                    <h4>Lifetime Warranty</h4>
                    <p>All our products —
                        whether we make them or not —
                        are backed by our lifetime warranty.</p>
                </div>
                <div className='reason-card'>
                    <BsCart2 color='#eb5757' size='40px' />
                    <h4>Shopping Experience</h4>
                    <p>All our products —
                        whether we make them or not —
                        are backed by our lifetime warranty.</p>
                </div>
                <div className='reason-card'>
                    <BsTruck color='#eb5757' size='40px' />
                    <h4>On-time Delivery</h4>
                    <p>All our products —
                        whether we make them or not —
                        are backed by our lifetime warranty.</p>
                </div>
                <div className='reason-card'>
                    <BiMessage color='#eb5757' size='40px' />
                    <h4>Best in Class Service</h4>
                    <p>All our products —
                        whether we make them or not —
                        are backed by our lifetime warranty.</p>
                </div>
            </div>
        </div>
    )
}
