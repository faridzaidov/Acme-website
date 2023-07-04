import React from 'react'
import { Link } from 'react-router-dom'
import './item.css'

export default function Item({ id, img, title, currentPrice, isSale, oldPrice }) {
    return (
        <div className='item-container'>
            <Link to={`/product/${id}`}>
                <div className='item-img'>
                    <img src={img} alt='item-img' />
                </div>
                <div className='item-title'>
                    <p>{title}</p>
                </div>
                <div className='item-price'>
                    <p>$ {currentPrice} USD {oldPrice !== "0" && <span className='item-old-price'>$ {oldPrice} USD</span>}</p>
                </div>
            </Link>
            <div className='item-details-btn'>
                <Link to={`/product/${id}`}>Details</Link>
            </div>
            {isSale &&
                <span className='sale'>Sale</span>
            }
        </div>
    )
}
