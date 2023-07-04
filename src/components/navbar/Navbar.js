import React, { useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'


export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <nav className='container'>
            <div className='navlogo'>
                <Link to='/'>
                    <img src='https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57adad44d1f072965b6_logo.svg' alt='acme-logo' />
                </Link>
            </div>
            <div className='nav-menu'>
                <div className='nav-links'>
                    <Link to="/">
                        Home
                    </Link>
                    <Link to="/about">
                        About
                    </Link>
                    <Link to="/shop">
                        Shop
                    </Link>
                    <Link to="/donations">
                        Donate
                    </Link>
                    <Link to="/contact">
                        Contact
                    </Link>
                </div>
                <a href='#' className='cart-icon'>
                    <img src='https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e86146bb854797d12a30a13_cart.svg' />
                    <span className='item-count'>0</span>
                </a>
                <div className='toggle-menu'>
                    {
                        toggleMenu
                            ? <AiOutlineClose className='menu-close-btn' color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                            : <AiOutlineMenu color="#fff" size={27} onClick={() => setToggleMenu(true)} />
                    }
                </div>
            </div>
            {
                toggleMenu &&
                <div className='nav-links-collapsed'>
                    <Link to="/">
                        Home
                    </Link>
                    <Link to="/about">
                        About
                    </Link>
                    <Link to="/shop">
                        Shop
                    </Link>
                    <Link to="/donations">
                        Donate
                    </Link>
                    <Link to="/contact">
                        Contact
                    </Link>
                </div>
            }
        </nav>
    )
}
