import React from 'react'
import '../../mainpage.css'

export default function SupportCard({ number, title, figure, about }) {
    return (
        <div className='support-card-container'>
            <div className='support-card'>
                <p className='support-card-number'>{number}</p>
                <p className='support-card-title'>{title}</p>
                <img className='card-figure' src={figure} alt='figure' />
            </div>
            <div className='card-about'>
                <p>{about}</p>
            </div>
        </div>
    )
}
