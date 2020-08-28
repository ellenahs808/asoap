import { combineReducers } from 'redux';
import navbarReducer from './navbar_reducer';
import categoryReducer from './category_reducer';
import modalReducer from './modal_reducer';




export default combineReducers({
    navbar: navbarReducer,
    category: categoryReducer,
    modal: modalReducer
});

