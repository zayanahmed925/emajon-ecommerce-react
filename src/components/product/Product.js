import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
    const { product, addToCart } = props
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
            <button onClick={() => addToCart(product)} className='cart-button'>
                <p className='cart-text'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;