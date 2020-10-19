import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/product_actions'
import { closeModal } from '../../actions/modal_actions'
import SearchProducts from './search_product_index';


const mapSTP = (state) => ({
    products: Object.values(state.entities.products)
})


const mapDTP = dispatch =>({
    fetchProducts: () => (dispatch(fetchProducts())),
    closeModal: () => (dispatch(closeModal()))
})


export default connect(mapSTP, mapDTP)(SearchProducts);