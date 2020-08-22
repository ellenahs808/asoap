import { connect } from 'react-redux';
import { fetchProducts } from '../../../actions/product_actions';
import SkinIndex from './skin_index';
import { skinCategory } from '../../../reducers/selectors';


const mapSTP = state => ({
    skinProducts: skinCategory(state),
    category: "Skin",
});


const mapDTP = dispatch => ({
    fetchProducts: () => dispatch(fetchProducts()),
});



export default connect(mapSTP, mapDTP)(SkinIndex);