import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions'
import { closeSidebar } from '../../actions/sidebar_actions'
import { fetchProducts } from '../../actions/product_actions'
import Modal from './modal'


const mapSTP = state => {
    return {
        modal: state.ui.modal,
        products: Object.values(state.entities.products)
    };
};

const mapDTP = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        closeSidebar: () => dispatch(closeSidebar()),
        fetchProducts: () => dispatch(fetchProducts())
    };
};

export default connect(mapSTP, mapDTP)(Modal);



