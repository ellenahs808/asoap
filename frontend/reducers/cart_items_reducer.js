import { RECEIVE_CART_ITEMS, DELETE_CART_ITEM } from '../actions/cart_actions';
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';


const cartItemsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState;

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            if (!action.currentUser.carts) {
                return {}
            } else {
                return action.currentUser.carts;
            }
        case RECEIVE_CART_ITEMS:
            newState = merge({}, state, action.cartItems);
            return action.cartItems;
        case LOGOUT_CURRENT_USER:
            return {};
        case DELETE_CART_ITEM:
            newState = merge({}, state)
            delete newState[action.cartItemId.id]
            return newState;
        default:
            return oldState;
    }
};

