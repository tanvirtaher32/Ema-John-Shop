import React from 'react';
import {Link,useLocation,useHistory} from 'react-router-dom';
import './Login.css';

import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';

    const handleSignInGoogle = () => {

        signInUsingGoogle()
        .then((result) => {
            history.push(redirect_uri);
            
          });
    }
    return (
        <div className="login-form">
            <div >
                <h2>Login</h2>

                <form onsubmit="">
                    <input type="email" name="email" placeholder="Email" id="" />
                    <br />
                    <input type="password" name="password" placeholder="Password" id="" />
                    <br />
                    <input type="submit" value="Login" />
                    
                </form>
                <p>New to Amazon? <Link to='/signup'>Create Account</Link></p>

                <div>------- or -------</div>
                <button className="login-btn" onClick={handleSignInGoogle}> Google SignIn</button>
            </div>
        </div>
    );
};

export default Login;