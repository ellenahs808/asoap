import * as CartAPIUtil from '../util/cart_api_util';


export const RECEIVE_CART_ITEM = 'RECEIVE_CART_ITEM'
export const RECEIVE_CART_ITEMS = 'RECEIVE_CART_ITEMS'
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'
// export const CLEAR_CART_ITEM = 'CLEAR_CART_ITEM'


const receiveCartItem = cartItem => ({
    type: RECEIVE_CART_ITEM,
    cartItem
});



const receiveCartItems = cartItems => ({
    type: RECEIVE_CART_ITEMS,
    cartItems
})



const removeCartItem = (cartItemId) => ({
    type: REMOVE_CART_ITEM,
    cartItemId,
});


// const clearCartItems = id => ({
//     type: CLEAR_CART_ITEM,
//     id
// })




export const fetchCartItem = () => dispatch => (
    CartAPIUtil.fetchCartItem()
        .then(cartItem => dispatch(receiveCartItem(cartItem)))
);


export const fetchAllCartItems = () => dispatch => (
    CartAPIUtil.fetchAllCartItems()
        .then(cartItems => dispatch(receiveCartItems(cartItems)))
)


export const createCartItem = cartItem => dispatch => (
    CartAPIUtil.createCartItem(cartItem)
        .then(cartItem => dispatch(receiveCartItem(cartItem)))
        .then(console.log("TEST CART BTN"))
);






export const updateCartItem = cartItem => dispatch => (
    CartAPIUtil.updateCartItem(cartItem)
        .then(cartItem => dispatch(receiveCartItem(cartItem)))
);



export const deleteCartItem = id => dispatch => (
    CartAPIUtil.deleteCartItem(id)
        .then((cartItemId) => dispatch(removeCartItem(cartItemId)))
);


