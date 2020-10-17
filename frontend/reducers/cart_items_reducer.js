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
            return Object.assign({}, oldState, { [action.cartItem.id]: action.cartItem })
            // newState[action.cartItem.id] = action.cartItem
            // return newState
        case RECEIVE_CART_ITEMS:
            // return Object.assign({}, action.cartItems)
            // return Object.assign({}, oldState, action.cart_items);

            // newState = { ...newState, ...action.cart_items }; 
            // return newState;

            return Object.assign({}, oldState, action.payload.cart_items);
        case REMOVE_CART_ITEM:

            delete newState[action.cartItemId.id]
            return newState;
        default:
            return oldState;




        // case RECEIVE_CART_ITEMS:
        //     return Object.assign({}, state, action.payload.cart_items);
        // case RECEIVE_CART_ITEM:
        //     return Object.assign({}, state, { [action.cartItem.id]: action.cartItem })
        // case DELETE_CART_ITEM:
        //     let newState = Object.assign({}, state);
        //     delete newState[action.cartItem.id];
        //     return newState;
    }
};


export default cartItemsReducer;