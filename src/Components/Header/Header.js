import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            
            <img src={logo} alt="" className="logo" />

            <nav>
                <a href="/shop">Shop</a>
                <a href="/orders">Manage Orders</a>
                <a href="/inventory">Inventory</a>
            </nav>
        </div>
    );
};

export default Header;