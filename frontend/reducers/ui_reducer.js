import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import hoverReducer from './hover_reducer';



export default combineReducers({
    modal: modalReducer,
    hover: hoverReducer
});

