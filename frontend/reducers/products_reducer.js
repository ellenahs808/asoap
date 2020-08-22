import { RECEIVE_PRODUCTS, RECEIVE_PRODUCT } from '../actions/product_actions';


const productsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return action.products;
        case RECEIVE_PRODUCT:
            newState[action.product.id] = action.product
            return newState;
        default:
            return oldState;
    }
};


export default productsReducer;