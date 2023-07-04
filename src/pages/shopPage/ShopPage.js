import React from 'react'
import './shoppage.css'
import Items from './items/Items'
import FeaturedItem from './featuredItem/FeaturedItem'
import { Helmet } from 'react-helmet'

export default function ShopPage() {
    return (
        <div className='shoppage'>
            <Helmet>
                <title>Shop</title>
            </Helmet>
            <div className='shoppage-head custom-container'>
                <h1>Shop Our Products</h1>
            </div>
            <div className='shoppage-body custom-container'>
                <FeaturedItem />
                <Items />
            </div>
        </div>
    )
}
