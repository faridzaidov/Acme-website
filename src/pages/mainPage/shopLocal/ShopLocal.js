import React from 'react'
import './shoplocal.css'
import PicWithText from '../../../components/picWithText/picWithText'

export default function ShopLocal() {
    return (
        <div className='shop-local-section page-section custom-container'>
            <PicWithText
                img="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e83fe3910db4fde2e69f396_christiann-koepke-dQyS2pMYtok-unsplash%20(1).jpg">
                <h2>Shop Local.</h2>
                <p>We know that during COVID-19, a lot of folks around the city and state are feeling uneasy about the future - we’re not sure what the future holds either.</p>
                <p>That said: we know that we love making sure you have the gear you need for your adventures, and we’re going to keep doing that - with our team - until the city tells us we can’t.</p>
                <p>But as long as folks like yourself support small businesses around the city, then we’ll be here — every day, making sure your orders arrive on time.</p>
                <p>-------</p>
                <p>Jane & John Doe <br /> <b>Acme Outdoors</b></p>
            </PicWithText>
        </div>
    )
}
