import { connect } from 'react-redux';
import { hoverCategory, closeSidebar } from '../../actions/sidebar_actions';
import { openModal, closeModal } from '../../actions/modal_actions'
import { fetchProducts } from '../../actions/product_actions'
import SubCategorySidebar from './sub_category_sidebar'
import { filterProductsByCategory } from '../feature/filter'


// const mapSTP = state => {
//     // console.log(state)
//     return {isOpen: state.entities.navbar.isOpen, skinCategory} 
// };

const mapSTP = state => ({
    // products: Object.values(state.entities.products),
    skinCategory: filterProductsByCategory(state, "Skin"),
    hairCategory: filterProductsByCategory(state, "Hair"),
    bodyCategory: filterProductsByCategory(state, "Body & Hand"),
    // category: state.ui.hover,
    // products: filterProductsByCategory(state, state.ui.side),
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



export default connect(mapSTP, mapDTP)(SubCategorySidebar);


