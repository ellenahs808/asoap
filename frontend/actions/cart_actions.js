import * as CartAPIUtil from '../util/cart_api_util';


export const RECEIVE_CART_ITEM = 'RECEIVE_CART_ITEM';
export const DELETE_CART_ITEM = 'DELETE_CART_ITEM';


const receiveCartItem = cartItem => ({
    type: RECEIVE_CART_ITEMS,
    cartItem
});


const removeCartItem = cartItemId => ({
    type: DELETE_CART_ITEM,
    cartItemId
});




export const fetchCartItem = () => dispatch (
    CartAPIUtil.fetchCartItem()
        .then(cartItem => dispatch(receiveCartItem(cartItem)))
);



export const createCartItem = cartItem => dispatch (
    CartAPIUtil.createCartItem(cartItem)
        .then(cartItem => dispatch(receiveCartItem(cartItem)))
);



export const updateCartItem = cartItem => dispatch (
    CartAPIUtil.updateCartItem(cartItem)
        .then(cartItem => dispatch(receiveCartItem(cartItem)))
);



export const deleteCartItem = id => dispatch (
    CartAPIUtil.deleteCartItem(id)
        .then(cartItemId => dispatch(removeCartItem(cartItemId)))
);


