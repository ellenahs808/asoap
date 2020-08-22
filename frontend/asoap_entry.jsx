import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import * as SessionActions from './actions/session_actions';
import * as ProductActions from './actions/product_actions';
import configureStore from "./store/store";
import { loginDemo } from './actions/session_actions';


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
    window.fetchProducts = ProductActions.fetchProducts
    window.fetchProduct = ProductActions.fetchProduct


    //
    

    const root = document.getElementById('root')
    ReactDOM.render(<Root store={store} />, root);
});



//SessionAPIUtil is an object
