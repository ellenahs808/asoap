import { connect } from 'react-redux';
import { openSidebar, closeSidebar, hoverCategory } from '../../actions/navbar_actions';
import CategorySidebar from './category_sidebar'
//might add productsByCategory selectors here


// const mapSTP = state => {
//     // console.log(state)
//     return {isOpen: state.entities.navbar.isOpen, skinCategory} 
// };

const mapSTP = state => ({
    isOpen: state.ui.navbar.isOpen,
    // skinCategory: productsByCategory(state, "Skin")  
})


const mapDTP = dispatch => ({
    openSidebar: isOpen => dispatch(openSidebar(isOpen)),
    closeSidebar: isClosed => dispatch(closeSidebar(isClosed)),
    hoverCategory: category => dispatch(hoverCategory(category)),
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