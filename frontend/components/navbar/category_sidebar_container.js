import { connect } from 'react-redux';
import { openMainSidebar, closeMainSidebar, hoverCategory } from '../../actions/navbar_actions';
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
    openMainSidebar: isOpen => dispatch(openMainSidebar(isOpen)),
    closeMainSidebar: isClosed => dispatch(closeMainSidebar(isClosed)),
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