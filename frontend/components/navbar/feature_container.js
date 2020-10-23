import { connect } from 'react-redux';
import { hoverCategory, closeSidebar } from '../../actions/sidebar_actions';
import { openModal, closeModal } from '../../actions/modal_actions'
import { fetchProducts } from '../../actions/product_actions'
import Feature from './feature'



// const mapSTP = state => {
//     // console.log(state)
//     return {isOpen: state.entities.navbar.isOpen, skinCategory} 
// };

const mapSTP = state => ({
    products: Object.values(state.entities.products),
    hover: state.ui.hover
})


const mapDTP = dispatch => {
    return {
        hoverCategory: category => dispatch(hoverCategory(category)),
        closeSidebar: () => dispatch(closeSidebar()),
        openModal: type => dispatch(openModal(type)),
        closeModal: () => dispatch(closeModal()),
        fetchProducts: () => dispatch(fetchProducts())
        
    }
};



export default connect(mapSTP, mapDTP)(Feature);


