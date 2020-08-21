import React from "react";
import { AuthRoute } from '../util/route_util';
import { Link, Switch, Route } from 'react-router-dom';
import NavbarContainer from './navbar/navbar_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import Splash from './splash/splash';


const App = () => (
    <div>
        <header className="main-nav">
            <nav className="left-nav">
                <div>
                    <ul className="left-nav-li">
                        <li><Link className="shop-link">Shop</Link></li>
                        <li><Link className="read-link">Read</Link></li>
                        <li><Link className="stores-link">Stores</Link></li>
                        <li><Link className="search-link">Search</Link></li>
                    </ul>
                </div>
                {/* <Link to="/">
                    <img src={window.logo} height='100%' width='100%' />
                </Link> */}
            </nav>
            <nav className="right-nav">
                <NavbarContainer />
            </nav>
        </header>

        <div>
            <Splash />
        </div>

        <Switch>
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
        </Switch>
    </div>
);

export default App;