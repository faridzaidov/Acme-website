import React from 'react'
import './donatepage.css'
import DonateHeader from './donateHeader/DonateHeader'
import Donations from './donations/Donations'
import { Helmet } from 'react-helmet'

export default function DonatePage() {
    return (
        <div>
            <Helmet>
                <title>Donations</title>
            </Helmet>
            <DonateHeader />
            <Donations />
        </div>
    )
}
