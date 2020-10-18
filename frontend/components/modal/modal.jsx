import React from 'react';
import { connect } from 'react-redux';


import LoginFormContainer from '../../components/session_form/login_form_container';
import SignupFormContainer from '../../components/session_form/signup_form_container';
// import CartContainer from '../cart/cart_container';
// import SearchContainer from '../search/searchContainer'
import Checkout from '../cart/cart_checkout'



function Modal({ openModal, closeModal }) {
    if (!openModal) {
        return null;
    }
    let component;
    switch (openModal) {
        case 'login':
            component = <LoginFormContainer />;
            break;
        case 'signup':
            component = <SignupFormContainer />
            break;
        // case 'search':
        //     return (
        //         <SearchContainer />
        //     )
        case 'checkout':
            component = <Checkout />
            break;
        default:
            return null;
    }

    return (
        <div className="modal-background" onClick={this.props.closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    )
};


export default Modal;