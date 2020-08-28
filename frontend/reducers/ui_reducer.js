import { combineReducers } from 'redux';
import navbarReducer from './navbar_reducer';
import modalReducer from './modal_reducer';




export default combineReducers({
    navbar: navbarReducer,
    modal: modalReducer
});

