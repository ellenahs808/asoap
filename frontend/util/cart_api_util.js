export const fetchCartItems = () => (
    $.ajax({
        method: `GET`,
        url: `/api/carts`,
    })
);




export const createCartItem = cart_item => (
    $.ajax({
        method: `POST`,
        url: `/api/carts`,
        data: { cart_item }
    })
);




export const updateCartItem = cart_item => (
    $.ajax({
        method: `PATCH`,
        url: `/api/carts/${cart_item.id}`,
        data: { cart_item }
    })
);




export const deleteCartItem = cart_item => (
    $.ajax({
        method: `DELETE`,
        url: `/api/carts/${cart_item.id}`,
    })
);
