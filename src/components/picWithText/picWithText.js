import React from 'react'
import "./picwithtext.css"

export default function PicWithText({ img, children }) {
    return (
        <div className='picwithtext'>
            <div className='picwithtext-left'>
                <img src={img} alt='shop-local-img' />
            </div>
            <div className='picwithtext-right'>
                <div className='picwithtext-content'>
                    {children}
                </div>
            </div>
        </div>
    )
}
