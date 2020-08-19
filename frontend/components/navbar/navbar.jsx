import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = props => {
    const loggedIn = (
        <div>
            <h1>Hi, {props.currentUser.first_name} {props.currentUser.last_name}</h1>
            <button onClick={props.logout}>Log Out</button>
        </div>
    )

    //&nbsp; - non-breaking space

    const loggedOut = (
        <nav>
            <Link to="/login">Login</Link> 
            {/* &nbsp;or&nbsp; */}
            <br/>
            <Link to="/signup">Sign Up</Link>
        </nav>
    )

    return props.currentUser ? loggedIn : loggedOut;

};


export default Navbar;