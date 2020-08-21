import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = props => {
 
    const loggedIn = () => (
        <div>
            <h1>Hi, {props.currentUser.first_name} {props.currentUser.last_name}</h1>
            <button onClick={props.logout}>Log Out</button>
        </div>
    )

    //&nbsp; - non-breaking space






    const loggedOut = () => (
        <nav className="right-nav">
            <nav>
                <div className="logged-out">
                    <ul className="login-register">
                        <li><Link className="login-link" to="/login" >Login</Link> </li>
                        <li><Link className="signup-link" to="/signup" >Register</Link></li>
                    </ul>
                </div>
            </nav>
       </nav>
    )

    return props.currentUser ? loggedIn() : loggedOut();

};


export default Navbar;