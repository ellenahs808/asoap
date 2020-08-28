import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import productsReducer from './products_reducer';
import categoryReducer from './category_reducer';
import cartItemsReducer from './cart_items_reducer';



const entitiesReducer = combineReducers ({
    users: usersReducer,
    products: productsReducer,
    category: categoryReducer,
    cartItems: cartItemsReducer,
});


export default entitiesReducer;

