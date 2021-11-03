import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

import useAuth from '../../Hooks/useAuth';



const Signup = () => {
    const {signInUsingGoogle} = useAuth();
    return (
        <div className="signup-form">
            <div>

                <h2>Signup</h2>

                <form onsubmit="">
                    <input type="email" name="email" placeholder="Email" id="" />
                    <br />
                    <input type="password" name="password" placeholder="Password" id="" />
                    <br />
                    <input type="password" name="password" placeholder="Confirm Password" id="" />
                    <br />
                    <input type="submit" value="Sign up" />
                    
                </form>
                <p>Already Signed Up? <Link to='/login'>Login</Link></p>

                <div>------- or -------</div>
                <button className="signup-btn" onClick={signInUsingGoogle}>Google SignIn</button>

            </div>
        </div>
    );
};

export default Signup;