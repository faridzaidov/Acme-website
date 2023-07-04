import React from "react";
import { useParams } from "react-router-dom";
import "./categorypage.css";
import { Link } from "react-router-dom";
import Item from "../../components/item/Item";
import { itemsArray } from "../../api/items";
import { Helmet } from "react-helmet";

export default function CategoryPage() {
  const { itemsCategory } = useParams();
  const itemsByCategory = itemsArray.filter(
    (item) => item.category === itemsCategory
  );
  const itemElements = itemsByCategory.map((item) => (
    <Item
      key={item.id}
      id={item.id}
      img={item.pic}
      title={item.name}
      currentPrice={item.currentPrice}
      isSale={item.isSale}
    />
  ));
  return (
    <div className="shoppage">
      <Helmet>
        <title>{itemsCategory}</title>
      </Helmet>
      <div className="shoppage-head custom-container">
        <h1>Shop Our Products</h1>
      </div>
      <div className="shoppage-body custom-container page-section">
        <div className="items-section">
          <div className="categories-container">
            <p>Shop by Category</p>
            <Link
              to="/category/gift-cards"
              className={itemsCategory === "gift-cards" && "chosen-category"}
            >
              Gift Cards
            </Link>
            <Link
              to="/category/tents"
              className={itemsCategory === "tents" && "chosen-category"}
            >
              Tents
            </Link>
            <Link
              to="/category/accessories"
              className={itemsCategory === "accessories" && "chosen-category"}
            >
              Accessories
            </Link>
            <Link
              to="/category/packs"
              className={itemsCategory === "packs" && "chosen-category"}
            >
              Packs
            </Link>
          </div>
          <div className="items-container">{itemElements}</div>
        </div>
      </div>
    </div>
  );
}
