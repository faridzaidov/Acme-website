import React from 'react'
import Item from '../../../components/item/Item'
import './shopproducts.css'
import { Link } from 'react-router-dom'
import { itemsArray } from '../../../api/items'

export default function ShopProducts() {
    const itemsToShow = itemsArray.slice(0, 3).map(item =>
        <Item
            key={item.id}
            id={item.id}
            img={item.pic}
            title={item.name}
            currentPrice={item.currentPrice}
            isSale={item.isSale}
        />
    )

    return (
        <div className='shop-section page-section custom-container'>
            <div className='shop-section-head'>
                <p className='section-subhead'>Shop products</p>
                <h2 className='section-mainhead'>Open 24/7/365.</h2>
            </div>
            <div className='items-container'>
                {itemsToShow}
                {/* <Item
                    img='https://assets.website-files.com/5e853c3383474026e43f2c78/5e856e41c718420c18dd6751_patrick-hendry-eDgUyGu93Yw-unsplash.jpg'
                    title='White Tent'
                    currentPrice='200.00'
                    isSale={false}
                />
                <Item
                    img='https://assets.website-files.com/5e853c3383474026e43f2c78/5e8542c1248e59128e08e3e9_ryan-holloway-JyDmUaXMib4-unsplash.jpg'
                    title='White Tent'
                    currentPrice='200.00'
                    isSale={false}
                />
                <Item
                    img='https://assets.website-files.com/5e853c3383474026e43f2c78/5e85425605cae11f20d46181_denisse-leon-J7CjWufjmg4-unsplash.jpg'
                    title='White Tent'
                    currentPrice='200.00'
                    isSale={true}
                /> */}
            </div>
            <div className='view-all-products'>
                <Link to='/shop'>View All Products</Link>
            </div>
        </div>
    )
}
