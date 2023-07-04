import React, { useContext, useState, useEffect } from 'react'
import './cartpage.css'
import { Context } from '../../context/Context'
import CartItem from './cartitem/CartItem'
import { Helmet } from 'react-helmet'

export default function CartPage() {
    const { cartItems } = useContext(Context)
    const cartItemElements = cartItems.map(item => <CartItem item={item} />)
    const [cartTotal, setCartTotal] = useState(0)

    useEffect(() => {
        const calculateTotal = cartItems.reduce((prevVal, currentVal) => {
            return Number(prevVal) + Number(currentVal.currentPrice)
        }, 0)
        setCartTotal(calculateTotal)
        console.log(cartTotal)
    }, [cartItems])

    return (
        <div className='cart-page'>
            <Helmet>
                <title>Your Cart</title>
            </Helmet>
            <div className='cart-page-head custom-container'>
                <h1>Your Cart</h1>
            </div>
            <div className='cart-page-body custom-container page-section'>
                <div className='cart-items-container'>
                    {cartItems.length === 0 ?
                        <p className='no-items-in-cart'>
                            There is still no items in your cart <br />
                            Go check our products ;)</p> :
                        cartItemElements
                    }
                    {cartItems.length !== 0 &&
                        <div className='cart-total'>
                            <p>Total: </p>
                            <p>$ {cartTotal} USD</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
