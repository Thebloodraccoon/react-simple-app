import React from "react";
import { Link } from "react-router-dom";
import "../style/ProductLinks.css";

const categories = [
    "Smartphones",
    "Laptops",
    "Fragrances",
    "Skincare",
    "Groceries",
    "Home-decoration",
    "Furniture",
    "Tops",
    "Womens-dresses",
    "Womens-shoes",
    "Mens-shirts",
    "Mens-shoes",
    "Mens-watches",
    "Womens-watches",
    "Womens-bags",
    "Womens-jewellery",
    "Sunglasses",
    "Automotive",
    "Motorcycle",
    "Lighting"
];


const ProductLinks: React.FC = () => {
    return (
        <div className="product-links-container">

            <Link to={`/`}>
                <h1 className="title link">Products</h1>
            </Link>
            <div>
                {categories.map(category => (
                    <Link key={category} to={`/category/${category.toLowerCase()}`}>
                        <button className="category-button">{category}</button>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default ProductLinks;