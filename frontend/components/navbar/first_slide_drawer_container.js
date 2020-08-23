import { connect } from 'react-redux';
import { skinCategory } from '../../reducers/selectors';
import { openMainSidebar, closeMainSidebar } from '../../actions/navbar_actions';
import FirstSlideDrawer from './first_slide_drawer'
//might add productsByCategory selectors here


const mapSTP = state => {
    // console.log(state)
    return {isOpen: state.entities.navbar.isOpen, skinCategory} 
};


const mapDTP = dispatch => ({
    closeMainSidebar: isClosed => dispatch(closeMainSidebar(isClosed)),
    openMainSidebar: isOpen => dispatch(openMainSidebar(isOpen)),
});



export default connect(mapSTP, mapDTP)(FirstSlideDrawer);









// const mSTP = (state) => ({
//     is_open: state.entities.navBar.isOpen,
//     currentUser: state.session.id
// })

// const mDTP = (dispatch) => ({
//     closeSide: (is_closed) => dispatch(close_sidebar_action(is_closed)),
//     logout: () => dispatch(logout()),
// })