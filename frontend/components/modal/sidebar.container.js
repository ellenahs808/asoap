import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions'
import { openSidebar, closeSidebar, hoverCategory, hoverProduct } from '../../actions/sidebar_actions'
import { fetchProducts } from '../../actions/product_actions'
import Sidebar from './sidebar'


const mapSTP = (state) => {
    return {
        side: state.ui.side,
        products: Object.values(state.entities.products)
    };
};


const mapDTP = (dispatch) => {
    return {
        fetchProducts: () => dispatch(fetchProducts()),
        closeModal: () => dispatch(closeModal()),
        openSidebar: side => dispatch(openSidebar(side)),
        closeSidebar: () => dispatch(closeSidebar()),
        hoverCategory: category => dispatch(hoverCategory(category)),
        hoverProduct: productId => dispatch(hoverProduct(productId))
    };
};

export default connect(mapSTP, mapDTP)(Sidebar);