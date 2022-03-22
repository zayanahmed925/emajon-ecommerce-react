import React from 'react';
import './Product.css'
const Product = (props) => {
    const { name, img, price, seller, ratings } = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />


            <div className="cart-info">
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>

                <div className="seller-ratings">
                    <p><small>Seller: {seller}</small></p>
                    <p><small>Ratings: {ratings}</small></p>
                </div>
            </div>
            <button className='cart-button'>Add To cart</button>
        </div>
    );
};

export default Product;