import { RECEIVE_CART_ITEM, RECEIVE_CART_ITEMS, REMOVE_CART_ITEM } from '../actions/cart_actions';
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';


const cartItemsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState)

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            if (action.currentUser.carts === undefined) {
                return {}
            } else {
                return action.currentUser.carts;
            }
        case LOGOUT_CURRENT_USER:
            return {};


        case RECEIVE_CART_ITEM:

            newState[action.cartItem.id] = action.cartItem
            return newState
        case RECEIVE_CART_ITEMS:
            return Object.assign({}, action.cartItems)
        case REMOVE_CART_ITEM:

            delete newState[action.cartItemId.id]
            return newState;
        default:
            return oldState;
    }
};


export default cartItemsReducer;