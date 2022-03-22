import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <nav className='navbar'>
            <img src={logo} alt="" />
            <div>
                <a href="/Shop">Shop</a>
                <a href="/About">About</a>
                <a href="/Order">Order</a>
                <a href="/manage">manage</a>
            </div>
        </nav>
    );
};

export default Header;