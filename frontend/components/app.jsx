import React from "react";
import { AuthRoute } from '../util/route_util';
import { Link, Switch, Route } from 'react-router-dom';
import LeftNavbarContainer from './navbar/left_navbar_container';
import RightNavbarContainer from './navbar/right_navbar_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import AllProducts from './products/all_products_container';
import SkinIndexContainer from './products/skin/skin_index_container';
import Splash from './splash/splash';
import FirstSlideDrawerContainer from "./navbar/first_slide_drawer_container"



const App = () => (
    <div>
        <header className="main-nav">
            <nav className="left-nav">
                <LeftNavbarContainer />
                <FirstSlideDrawerContainer />
                {/* <Link to="/">
                    <img src={window.images.logo} height='100%' width='100%' />
                </Link> */}
            </nav>
            <nav className="right-nav">
                <RightNavbarContainer />
            </nav>
        </header>

        <div>
            <Splash />
        </div>

        <Switch>
            <Route exact path="/products" component={ AllProducts }/>
            <Route exact path="/products/skin" component={ SkinIndexContainer }/>
            <AuthRoute path="/login" component={ LoginFormContainer }/>
            <AuthRoute path="/signup" component={ SignupFormContainer }/>
        </Switch>
    </div>
);

export default App;