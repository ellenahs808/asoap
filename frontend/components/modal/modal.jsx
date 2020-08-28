import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import LoginFormContainer from '../../components/session_form/login_form_container';
import SignupFormContainer from '../../components/session_form/signup_form_container';
// import CartContainer from '../cart/cart_container';
// import SearchContainer from '../search/searchContainer'




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
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    )
};


