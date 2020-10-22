// import { OPEN_SIDE, CLOSE_SIDE } from '../actions/sidebar_actions';
import { HOVER_PRODUCT, HOVER_CATEGORY } from '../actions/sidebar_actions'


const hoverReducer = (state = null, action) => {
    Object.freeze(state);

    switch (action.type) {
        case HOVER_PRODUCT:
            // return action.side;
            return action.productId;
        case HOVER_CATEGORY:
            // return null;
            return action.category;
        default:
            return null;
    }
};



export default hoverReducer;

