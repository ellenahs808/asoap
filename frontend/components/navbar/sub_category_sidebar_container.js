import { connect } from 'react-redux';
import { hoverCategory } from '../../actions/sidebar_actions';
import { openModal, closeModal } from '../../actions/modal_actions'
import { fetchProducts } from '../../actions/product_actions'
import SubCategorySidebar from './sub_category_sidebar'



// const mapSTP = state => {
//     // console.log(state)
//     return {isOpen: state.entities.navbar.isOpen, skinCategory} 
// };

const mapSTP = state => ({
   products: Object.values(state.entities.products)
})


const mapDTP = dispatch => ({
    hoverCategory: category => dispatch(hoverCategory(category)),
    openModal: type => dispatch(openModal(type)),
    closeModal: () => dispatch(closeModal()),
    fetchProducts: () => dispatch(fetchProducts())
});



export default connect(mapSTP, mapDTP)(SubCategorySidebar);


