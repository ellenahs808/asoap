import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions'
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
    openModal: type => dispatch(openModal(type)),
    closeModal: () => dispatch(closeModal())
})


export default connect(mapSTP, mapDTP)(SearchProducts);