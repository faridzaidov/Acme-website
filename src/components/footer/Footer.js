import React from 'react'
import "./footer.css"
import { Link } from 'react-router-dom'
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import { FaTwitterSquare } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className='custom-container'>
            <div className='upper-footer'>
                <div className='footer-logo'>
                    <Link to='/'>
                        <img src='https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57adad44d1f072965b6_logo.svg' alt='acme-logo' />
                    </Link>
                </div>
                <div className='footer-social-media'>
                    <a href='https://twitter.com/CatLoverCult' className='twit-icon'>
                        <FaTwitterSquare />
                    </a>
                    <a href='https://www.facebook.com/yomnas.alsunian1' className='fb-icon'>
                        <BsFacebook />
                    </a>
                    <a href='https://www.instagram.com/cats_of_instagram/' className='inst-icon'>
                        <BsInstagram />
                    </a>
                </div>
            </div>
            <div className='bottom-footer'>
                <p>Made by <a href='https://github.com/faridzaidov'>Farid Zaidov</a></p>
            </div>
        </footer>
    )
}
