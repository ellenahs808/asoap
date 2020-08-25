import { connect } from 'react-redux';
import { fetchProducts } from '../../../actions/product_actions';
import SkinIndex from './skin_index';
// import { skinCategory, skinSubCategory } from '../../../reducers/selectors';


const mapSTP = (state, ownProps) => ({
    products: Object.values(state.entities.products),
    // skinCategory: skinCategory(state),
    // skinSubCategory: skinSubCategory(state),
    // product: state.entities.products[ownProps.match.params.productId],
    // product: state.entities.products[productId]
    // category: "Skin",
});


const mapDTP = dispatch => ({
    fetchProducts: () => dispatch(fetchProducts()),
});



export default connect(mapSTP, mapDTP)(SkinIndex);