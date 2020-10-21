import { connect } from 'react-redux';
import { hoverCategory } from '../../actions/hover_actions';
import { openModal, closeModal } from '../../actions/modal_actions'
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
    closeModal: () => dispatch(closeModal())
});



export default connect(mapSTP, mapDTP)(SubCategorySidebar);


