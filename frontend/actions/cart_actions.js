import * as CartAPIUtil from '../util/cart_api_util';


export const RECEIVE_CART_ITEM = 'RECEIVE_CART_ITEM'
export const RECEIVE_CART_ITEMS = 'RECEIVE_CART_ITEMS'
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'
// export const CLEAR_CART_ITEM = 'CLEAR_CART_ITEM'


const receiveCartItem = cartItem => ({
    type: RECEIVE_CART_ITEM,
    cartItem
});


//payload contains all the cart items
const receiveCartItems = payload => ({
    type: RECEIVE_CART_ITEMS,
    payload
})



const removeCartItem = (cartItemId) => ({
    type: REMOVE_CART_ITEM,
    cartItemId,
});


// const clearCartItems = id => ({
//     type: CLEAR_CART_ITEM,
//     id
// })




export const fetchCartItem = id => dispatch => (
    CartAPIUtil.fetchCartItem(id)
        .then(cartItem => dispatch(receiveCartItem(cartItem)))
);


export const fetchAllCartItems = () => dispatch => (
    CartAPIUtil.fetchAllCartItems()
        .then(payload => dispatch(receiveCartItems(payload)))
)


export const createCartItem = cartItem => dispatch => (
    CartAPIUtil.createCartItem(cartItem)
        .then(cartItem => dispatch(receiveCartItem(cartItem)))
);

//can also be written as:
// export const createCartItem = cartItem => dispatch => {
//     return (
//         CartAPIUtil.createCartItem(cartItem)
//         .then(cartItem => dispatch(receiveCartItem(cartItem)))
//         .then(console.log("TEST CART BTN"))
//     )
// }





export const updateCartItem = cartItemId => dispatch => (
    CartAPIUtil.updateCartItem(cartItemId)
        .then(cartItemId => dispatch(receiveCartItem(cartItemId)))
);



export const deleteCartItem = id => dispatch => (
    CartAPIUtil.deleteCartItem(id)
        .then((cartItemId) => dispatch(removeCartItem(cartItemId)))
);


