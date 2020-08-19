import React from "react";
import NavbarContainer from './navbar/navbar_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute } from '../util/route_util';
import { Link, Switch, Route } from 'react-router-dom';


const App = () => (
    <div>
        <header>
            <Link to="/">
                <h1>Welcome to Asoap!!!</h1>
            </Link>
            <NavbarContainer />
        </header>
        <Switch>
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
        </Switch>
    </div>
);

export default App;