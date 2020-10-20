import React from "react";
import { AuthRoute } from '../util/route_util';
import { Link, Switch, Route } from 'react-router-dom';

import ModalContainer from '../components/modal/modal_container'
import MainNavbarContainer from './navbar/main_navbar_container'
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import CategorySidebarContainer from './navbar/category_sidebar_container'
import SkinIndexContainer from './products/skin/skin_index_container';
import HairIndexContainer from './products/hair/hair_index_container';
import BodyIndexContainer from './products/body/body_index_container';
import Homepage from './homepage';
import ProductShowContainer from './products/product_show_container';
import Footer from './footer';
import Cart from './cart/cart'


const App = () => (
    <div>
        <div><ModalContainer /></div>
        <header><MainNavbarContainer /></header>

        <Route exact path="/" component={Homepage}/>
        <AuthRoute path="/login" component={LoginFormContainer}/>
        <AuthRoute path="/signup" component={SignupFormContainer}/>
        <Route exact path="/category" component={SkinIndexContainer}/>
        <Route exact path="/skin" component={CategorySidebarContainer}/>
        <Route exact path="/hair" component={HairIndexContainer}/>
        <Route exact path="/body" component={BodyIndexContainer}/>
        <Route exact path='/products/:productName/:productId' component={ProductShowContainer} />
        <Route exact path='/cart' component={Cart} />


        <footer>
            <Footer />
        </footer> 

    
    </div>
);

export default App;