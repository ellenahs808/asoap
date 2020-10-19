import { combineReducers } from 'redux';
import navbarReducer from './navbar_reducer';
import modalReducer from './modal_reducer';
import sideBarReducer from './sidebar_reducer';



export default combineReducers({
    navbar: navbarReducer,
    modal: modalReducer,
    sideBar: sideBarReducer
});

