import React from 'react'
import './person.css'

export default function Person({ pic, name, children }) {
    return (
        <div className='person'>
            <img className='person-pic' src={pic} alt='person-pic' />
            <h4 className='person-name'>{name}</h4>
            <div className='person-bio'>
                {children}
            </div>
        </div>
    )
}
