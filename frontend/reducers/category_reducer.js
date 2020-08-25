import { HOVER_CATEGORY } from '../actions/navbar_actions';
import { RECEIVE_CATEGORIES } from '../actions/product_actions';



const CategoryReducer = (oldState = null, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case HOVER_CATEGORY:
            return action.category;
        // case RECEIVE_CATEGORIES:
        //     return action.category;
        default:
            return oldState;
    }
};



export default CategoryReducer;