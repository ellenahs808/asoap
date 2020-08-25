import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import productsReducer from './products_reducer';
import categoryReducer from './category_reducer';
import CategoryReducer from './category_reducer';



const entitiesReducer = combineReducers ({
    users: usersReducer,
    products: productsReducer,
    category: CategoryReducer,
});


export default entitiesReducer;

