import React, { useState, useContext } from 'react'
import './navbartest.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';

export default function NavbarTest() {
    const [isCartShown, setIsCartShown] = useState(true)
    const { cartItems } = useContext(Context)

    function showCartIcon() {
        setIsCartShown(prevState => !prevState)
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="#eb5757" variant="dark" fixed='top' className='custom-container'>
            <Navbar.Brand>
                <Link to='/'>
                    <img src='https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57adad44d1f072965b6_logo.svg' alt='acme-logo' />
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className='ms-auto' onClick={showCartIcon} />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className='ms-auto'>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/shop">Shop</Nav.Link>
                    <Nav.Link href="/donations">Donate</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Link to='/cart' className='cart-icon' style={isCartShown ? { display: "block" } : { display: "none" }}>
                <img src='https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e86146bb854797d12a30a13_cart.svg' />
                <span className='item-count'>{cartItems.length}</span>
            </Link>
        </Navbar>

    )
}
