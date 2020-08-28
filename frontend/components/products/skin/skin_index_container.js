import { connect } from 'react-redux';
import { fetchProducts } from '../../../actions/product_actions';
import SkinIndex from './skin_index';
// import { skinCategory, skinSubCategory } from '../../../reducers/selectors';


const mapSTP = (state, ownProps) => ({
    products: Object.values(state.entities.products),

});


const mapDTP = dispatch => ({
    fetchProducts: () => dispatch(fetchProducts()),
});



export default connect(mapSTP, mapDTP)(SkinIndex);