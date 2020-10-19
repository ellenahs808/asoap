import { RECEIVE_CART_ITEM, RECEIVE_CART_ITEMS, REMOVE_CART_ITEM, DELETE_ALL_CART_ITEMS } from '../actions/cart_actions';


const cartItemsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_CART_ITEM:
            return Object.assign({}, state, { [action.cartItem.id]: action.cartItem })
            
            //more readable
            // newState[action.cartItem.id] = action.cartItem
            // return newState
        case RECEIVE_CART_ITEMS:
            // return Object.assign({}, state, action.payload.cart_items);

            //more readable
            newState = action.payload.cart_items
            return newState
        case REMOVE_CART_ITEM:
            delete newState[action.cartItemId.id]
            return newState;
        case DELETE_ALL_CART_ITEMS:
            return {};
        default:
            return state;

    }
};


export default cartItemsReducer;