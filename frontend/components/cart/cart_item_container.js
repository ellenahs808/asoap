import { connect } from 'react-redux'
import { fetchProducts } from '../../actions/product_actions'
import { fetchAllCartItems, updateCartItem, deleteCartItem } from '../../actions/cart_actions'
import { openModal } from '../../actions/modal_actions'
import Cart from './cart'



const mapSTP = state => {
    return ({
        currentUserId: state.session.id,
        products: state.entities.products,
        cartItems: Object.values(state.entities.cartItems),
        checkoutItems: state.entities.cartItems
    })
}


const mapDTP = dispatch => ({

    fetchProducts: () => dispatch(fetchProducts()),
    fetchAllCartItems: () => dispatch(fetchAllCartItems()),
    updateCartItem: (cartItem) => dispatch(updateCartItem(cartItem)),
    deleteCartItem: (id) => dispatch(deleteCartItem(id)),
    openModal: () => dispatch(openModal())
})


export default connect(mapSTP, mapDTP)(Cart)
