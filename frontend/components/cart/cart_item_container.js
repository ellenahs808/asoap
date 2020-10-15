import { connect } from 'react-redux'
import { fetchProducts, fetchProduct } from '../../actions/product_actions'
import { fetchCartItem, updateCartItem, deleteCartItem } from '../../actions/cart_actions'
import { openModal } from '../../actions/modal_actions'
import Cart from './cart'



const mapSTP = state => {
    return ({
        products: state.entities.products,
        currentUserId: state.session.id,
        cartItem: Object.values(state.entities.cartItems),
        checkoutItems: state.entities.cartItems
    })
}


const mapDTP = dispatch => ({

    fetchProducts: () => dispatch(fetchProducts()),
    fetchCartItem: () => dispatch(fetchCartItem()),
    updateCartItem: (cartItem) => dispatch(updateCartItem(cartItem)),
    deleteCartItem: (id) => dispatch(deleteCartItem(id)),
    openModal: () => dispatch(openModal())
})


export default connect(mapSTP, mapDTP)(Cart)
