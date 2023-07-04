import React from 'react'
import './supportways.css'
import SupportCard from './supportcard/SupportCard'

export default function SupportWays() {
    return (
        <div className='sup-section page-section custom-container'>
            <div className='sup-head'>
                <div className='sup-head-left'>
                    <p className='section-subhead'>Ways to support</p>
                    <h2 className='section-mainhead'>Support Acme Outdoors.</h2>
                </div>
                <div className='sup-head-right'>
                    <p>COVID-19 has forced us to close our retail space, but we need support from patrons like yourself now more than ever. Below, we’ve listed the best ways to help us through this season.</p>
                </div>
            </div>
            <div className='sup-body'>
                <SupportCard
                    number="01"
                    title="Shop products"
                    about="Our full product line is still available online here on our site! Getting outside and hiking is still something you can do. Get your gear now!"
                    figure="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57a5836db2a07bab0e3_Circle.svg"
                />
                <SupportCard
                    number="02"
                    title="Donate"
                    about="Since we've changed the way we operate to online only, and to ensure your safety, not all our staff is working. Donate to keep them afloat."
                    figure="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57adc54453434efb9ee_Triangle.svg"
                />
                <SupportCard
                    number="03"
                    title="Buy gift cards"
                    about=" Have all the outdoor gear you need for now? Buy a gift card and use it later or share it with friends and family."
                    figure="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57afea9a31a44d66db0_Rectangle.svg"
                />
            </div>
        </div>
    )
}
