import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/product_actions';
import AllProducts from './all_products';

const mapSTP = state => ({
    categories: Object.values(state.entities.products.category),
});


const mapDTP = dispatch => ({
    fetchProducts: () => dispatch(fetchProducts()),
});



export default connect(mapSTP, mapDTP)(AllProducts);