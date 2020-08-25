import * as ProductAPIUtil from '../util/product_api_util';


export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
// export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';


const receiveProducts = products => ({
    type: RECEIVE_PRODUCTS,
    products,
});


const receiveProduct = product => ({
    type: RECEIVE_PRODUCT,
    product,
});


export const fetchProducts = () => dispatch => (
    ProductAPIUtil.fetchProducts()
        .then(products => dispatch(receiveProducts(products)))
);


export const fetchProduct = productId => dispatch => (
    ProductAPIUtil.fetchProduct(productId)
        .then(product => dispatch(receiveProduct(product)))
);



// export const receiveCategories = categories => ({
//     type: RECEIVE_CATEGORIES,
//     categories
// });

