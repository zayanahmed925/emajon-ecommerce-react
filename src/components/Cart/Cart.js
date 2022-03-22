import React from 'react';
import './cart.css'
const Cart = (props) => {
    const { cart } = props;
    console.log(cart)
    return (
        <div className=''>
            <h1>This is Cart</h1>
            <p>Selected Items: {props.cart.length}</p>
        </div>
    );
};

export default Cart;