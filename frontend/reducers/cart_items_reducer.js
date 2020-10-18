import { RECEIVE_CART_ITEM, RECEIVE_CART_ITEMS, REMOVE_CART_ITEM } from '../actions/cart_actions';


const cartItemsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState)

    switch (action.type) {
        case RECEIVE_CART_ITEM:
            return Object.assign({}, oldState, { [action.cartItem.id]: action.cartItem })
            
            //more readable
            // newState[action.cartItem.id] = action.cartItem
            // return newState
        case RECEIVE_CART_ITEMS:
            // return Object.assign({}, oldState, action.payload.cart_items);

            //more readable
            newState = action.payload.cart_items
            return newState
        case REMOVE_CART_ITEM:
            delete newState[action.cartItemId.id]
            return newState;
        default:
            return oldState;

    }
};


export default cartItemsReducer;