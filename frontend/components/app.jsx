import React from "react";
import { AuthRoute } from '../util/route_util';
import { Link, Switch, Route } from 'react-router-dom';
import LeftNavbarContainer from './navbar/left_navbar_container';
import RightNavbarContainer from './navbar/right_navbar_container';
import Banner from './navbar/banner';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import SkinIndexContainer from './products/skin/skin_index_container';
import HairIndexContainer from './products/hair/hair_index_container';
import BodyIndexContainer from './products/body/body_index_container';
import Homepage from './homepage';
import CategorySidebarContainer from "./navbar/category_sidebar_container"
import ProductShowContainer from './products/product_show_container';
import Footer from './footer';


const App = () => (
    <div>
        <nav className="banner">
            <Banner />
        </nav>
        <header className="main-nav">
            <nav className="left-nav">
                <LeftNavbarContainer />
                <CategorySidebarContainer />
                
            </nav>
            <nav className="right-nav">
                <RightNavbarContainer />
            </nav>
        </header>

            {/* <Homepage /> */}
            <Route exact path="/" component={Homepage}/>
            <AuthRoute path="/login" component={LoginFormContainer}/>
            <AuthRoute path="/signup" component={SignupFormContainer}/>
            <Route exact path="/skin" component={SkinIndexContainer}/>
            <Route exact path="/hair" component={HairIndexContainer}/>
            <Route exact path="/body" component={BodyIndexContainer}/>
            <Route exact path='/products/:productId' component={ProductShowContainer} />

{/* 
            <footer>
                <Footer />
            </footer> */}

    
    </div>
);

export default App;