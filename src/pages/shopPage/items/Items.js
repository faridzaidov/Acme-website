import React from 'react'
import './items.css'
import { itemsArray } from '../../../api/items'
import Item from '../../../components/item/Item'
import { Link } from 'react-router-dom'

export default function Items() {
    const notFeaturedItems = itemsArray.filter(item => !item.isFeatured)
    const notFeaturedItemElements = notFeaturedItems.map(item =>
        <Item
            key={item.id}
            id={item.id}
            img={item.pic}
            title={item.name}
            currentPrice={item.currentPrice}
            isSale={item.isSale}
            oldPrice={item.oldPrice}
        />
    )
    return (
        <div className='items-section'>
            <div className='categories-container'>
                <p>Shop by Category</p>
                <Link to='/category/gift-cards'>Gift Cards</Link>
                <Link to='/category/tents'>Tents</Link>
                <Link to='/category/accessories'>Accessories</Link>
                <Link to='/category/packs'>Packs</Link>
            </div>
            <div className='items-container'>
                {notFeaturedItemElements}
            </div>
        </div>
    )
}
