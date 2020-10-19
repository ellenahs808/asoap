import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions'
import SearchProducts from './search_product_index';


// const mapSTP = (state) => ({
//     products: Object.values(state.entities.products)
// })


const mapSTP = (state) => {
    return ({
        products: Object.values(state.entities.products),
        cartItems: Object.values(state.entities.cartItems)
    })
}

const mapDTP = dispatch => ({
    closeModal: () => dispatch(closeModal())
})


export default connect(mapSTP, mapDTP)(SearchProducts);