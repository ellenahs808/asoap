import { connect } from 'react-redux';
import { openSidebar, closeSidebar, hoverCategory } from '../../actions/navbar_actions';
import { openModal, closeModal } from '../../actions/modal_actions'
import CategorySidebar from './category_sidebar'



// const mapSTP = state => {
//     // console.log(state)
//     return {isOpen: state.entities.navbar.isOpen, skinCategory} 
// };

// const mapSTP = state => ({
   
// })


const mapDTP = dispatch => ({
    openSidebar: isOpen => dispatch(openSidebar(isOpen)),
    closeSidebar: isClosed => dispatch(closeSidebar(isClosed)),
    hoverCategory: category => dispatch(hoverCategory(category)),
    openModal: type => dispatch(openModal(type)),
    closeModal: () => dispatch(closeModal())
});



export default connect(null, mapDTP)(CategorySidebar);









// const mSTP = (state) => ({
//     is_open: state.entities.navBar.isOpen,
//     currentUser: state.session.id
// })

// const mDTP = (dispatch) => ({
//     closeSide: (is_closed) => dispatch(close_sidebar_action(is_closed)),
//     logout: () => dispatch(logout()),
// })