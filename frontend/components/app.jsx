import React from "react";
import { AuthRoute } from '../util/route_util';
import { Link, Switch, Route } from 'react-router-dom';

import Homepage from './homepage';
import ModalContainer from '../components/modal/modal_container'
import MainNavbarContainer from './navbar/main_navbar_container'
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import SkinIndexContainer from './products/skin/skin_index_container';
import HairIndexContainer from './products/hair/hair_index_container';
import BodyIndexContainer from './products/body/body_index_container';
import ProductShowContainer from './products/product_show_container';
import CartContainer from './cart/cart_item_container'
import Footer from './footer';


const App = () => (
    <div>
        <div><ModalContainer /></div>
        <header><MainNavbarContainer /></header>

        <Route exact path="/" component={Homepage}/>
        <AuthRoute path="/login" component={LoginFormContainer}/>
        <AuthRoute path="/signup" component={SignupFormContainer}/>
        <Route exact path="/skin" component={SkinIndexContainer}/>
        <Route exact path="/hair" component={HairIndexContainer}/>
        <Route exact path="/body" component={BodyIndexContainer}/>
        <Route exact path='/products/:productName/:productId' component={ProductShowContainer} />
        <Route exact path='/cart' component={CartContainer} />


        <footer>
            <Footer />
        </footer> 

    
    </div>
);

export default App;