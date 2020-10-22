import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions'
import { openSidebar, closeSidebar, hoverCategory } from '../../actions/sidebar_actions'
import { fetchProducts } from '../../actions/product_actions'
import CategorySidebar from './category_sidebar'
import { filterProductsByCategory } from '../feature/filter'



// const mapSTP = state => {
//     // console.log(state)
//     return {isOpen: state.entities.navbar.isOpen, skinCategory} 
// };


const mapSTP = state => ({
    skinCategory: filterProductsByCategory(state, "Skin"),
    hairCategory: filterProductsByCategory(state, "Hair"),
    bodyCategory: filterProductsByCategory(state, "Body & Hand")
})


const mapDTP = dispatch => ({
    openModal: type => dispatch(openModal(type)),
    closeModal: () => dispatch(closeModal()),
    openSidebar: type => dispatch(openSidebar(type)),
    closeSidebar: () => dispatch(closeSidebar()),
    hoverCategory: category => dispatch(hoverCategory(category)),
    fetchProducts: () => dispatch(fetchProducts())
});



export default connect(mapSTP, mapDTP)(CategorySidebar);









// const mSTP = (state) => ({
//     is_open: state.entities.navBar.isOpen,
//     currentUser: state.session.id
// })

// const mDTP = (dispatch) => ({
//     closeSide: (is_closed) => dispatch(close_sidebar_action(is_closed)),
//     logout: () => dispatch(logout()),
// })