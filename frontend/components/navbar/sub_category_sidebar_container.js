import { connect } from 'react-redux';
import { openMainSidebar, closeMainSidebar } from '../../actions/navbar_actions';
import SubCategorySidebar from './sub_category_sidebar';
// import { productsByCategory, skinCategory } from '../../reducers/selectors';
// import { receiveCategories } from '../../actions/product_actions';





const mapSTP = state => ({
    isOpen: state.ui.navbar.isOpen,

});


const mapDTP = dispatch => ({
    // openMainSidebar: isOpen => dispatch(openMainSidebar(isOpen)),
    closeMainSidebar: isClosed => dispatch(closeMainSidebar(isClosed)), 
    // receiveCategories: categories => dispatch(receiveCategories(categories)),
});




export default connect(mapSTP, mapDTP)(SubCategorySidebar)