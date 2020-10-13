import React from 'react';
import { Link } from 'react-router-dom';
import Cart from '../cart/cart'


const RightNavbar = props => {
 
    const loggedIn = () => (
        <div className="right-nav">
            <div className="right-nav-greeting">
                <h1 className="login-greeting">Hi, {props.currentUser.first_name} {props.currentUser.last_name}</h1>
                <Link to="/cart" className="cart-link">Cart</Link>
                {/* <button onClick={ <Cart /> }>Cart</button> */}
                <Link to="/" className="logout-link" onClick={props.logout}>Log Out</Link>
            </div>
        </div>
    )


    const loggedOut = () => (
        <nav className="right-nav">
            <div className="logged-out">
                <ul className="login-register">
                    <li><Link className="login-link" to="/login" >Login</Link> </li>
                    <li><Link className="signup-link" to="/signup" >Register</Link></li>
                </ul>
            </div>
       </nav>
    )

    return props.currentUser ? loggedIn() : loggedOut();

};


export default RightNavbar;