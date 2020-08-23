import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import navbarReducer from './navbar_reducer';

const entitiesReducer = combineReducers ({
    users: usersReducer,
    navbar: navbarReducer
});


export default entitiesReducer;

