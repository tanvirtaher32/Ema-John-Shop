import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

import useAuth from '../../Hooks/useAuth.js';

const Header = () => {

    const {user,logOut} = useAuth();
    return (
        <div className="header">
            
            <img src={logo} alt="" className="logo" />

            <nav>
                <a href="/shop">Shop</a>
                <a href="/orders">Manage Orders</a>
                <a href="/inventory">Inventory</a>

                {
                    user.email && <span>{user.displayName}</span>
                }
                {
                    user.email ?
                    <button onClick={logOut}>Log Out</button>
                    :
                    <a href="/login">Login</a>
                }
                <a href="/signup">Signup</a>
            </nav>
        </div>
    );
};

export default Header;