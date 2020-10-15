import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";
import { loginDemo } from './actions/session_actions';
// import * as cartActions from './actions/cart_actions';


document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }


    //for testing only
    // window.getState = store.getState
    // window.setState = store.setState
    // window.fetchCartItems = cartActions.fetchCartItems
    // window.createCartItem = cartActions.createCartItem
    // window.updateCartItem = cartActions.updateCartItem
    // window.deleteCartItem = cartActions.deleteCartItem

    //
    

    const root = document.getElementById('root')
    ReactDOM.render(<Root store={store} />, root);
});



//SessionAPIUtil is an object
