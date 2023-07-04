import React, { useContext } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import './cartitem.css'
import { Context } from '../../../context/Context'

export default function CartItem({ item }) {
    const { removeFromCart } = useContext(Context)

    return (
        <div className='cart-item-container'>
            <div className='cart-item-pic'>
                <img src={item.pic} alt='cart-item-pic' />
            </div>
            <div className='cart-item-info'>
                <p className='cart-item-name'>{item.name}</p>
                <p className='cart-item-price'>$ {item.currentPrice} USD</p>
            </div>
            {/* <div className='cart-remove-btn'></div> */}
            <div
                className='cart-item-remove-btn'
                onClick={() => removeFromCart(item.id)}
            ><AiOutlineDelete /></div>
        </div>
    )
}
