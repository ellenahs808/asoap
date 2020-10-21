import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions'
import { hoverProduct } from '../../actions/hover_actions'
import Sidebar from './sidebar'


const mapSTP = (state) => {
    return ({
        hover: state.ui.hover,
        products: Object.values(state.entities.products)
    });
};


const mapDTP = (dispatch) => {
    return ({
        fetchProducts: () => dispatch(fetchProducts()),
        closeModal: () => dispatch(closeModal()),
        hoverProduct: productId => dispatch(hoverProduct)
    });
};

export default connect(mapSTP, mapDTP)(Sidebar);