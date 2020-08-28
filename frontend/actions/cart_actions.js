import * as CartAPIUtil from '../util/cart_api_util';


export const RECEIVE_CART_ITEMS = 'RECEIVE_CART_ITEMS';
export const DELETE_CART_ITEM = 'DELETE_CART_ITEM';


const receiveCartItems = cartItems => ({
    type: RECEIVE_CART_ITEMS,
    cartItems
});


const removeCartItem = cartItemId => ({
    type: DELETE_CART_ITEM,
    cartItemId
});




export const fetchCartItems = () => dispatch (
    CartAPIUtil.fetchCartItems()
        .then(cartItems => dispatch(receiveCartItems(cartItems)))
);



export const createCartItem = cartItem => dispatch (
    CartAPIUtil.createCartItem(cartItem)
        .then(cartItems => dispatch(receiveCartItems(cartItems)))
);



export const updateCartItem = cartItem => dispatch (
    CartAPIUtil.updateCartItem(cartItem)
        .then(cartItems => dispatch(receiveCartItems(cartItems)))
);



export const deleteCartItem = id => dispatch (
    CartAPIUtil.deleteCartItem(id)
        .then(cartItemId => dispatch(removeCartItem(cartItemId)))
);


