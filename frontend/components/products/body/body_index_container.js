import { connect } from 'react-redux';
import { fetchProducts } from '../../../actions/product_actions';
import BodyIndex from './body_index';



const mapSTP = (state, ownProps) => ({
    products: Object.values(state.entities.products),
});


const mapDTP = dispatch => ({
    fetchProducts: () => dispatch(fetchProducts()),
});



export default connect(mapSTP, mapDTP)(BodyIndex);