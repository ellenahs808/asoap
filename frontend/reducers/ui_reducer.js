import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import sideBarReducer from './sidebar_reducer';



export default combineReducers({
    modal: modalReducer,
    sideBar: sideBarReducer
});

