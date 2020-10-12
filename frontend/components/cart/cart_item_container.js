import { connect } from 'react-redux'
import { fetchProducts, fetchProduct } from '../../actions/product_actions'
import { fetchCartItems, updateCartItem, deleteCartItem } from '../../actions/cart_actions'
import Cart from './cart'



const mapSTP = state => {
    return ({

    })
}


const mapDTP = dispatch => ({
    fetchProducts: () => dispatch(fetchProducts()),
    fetchCartItems: () => dispatch(fetchCartItems()),
    updateCartItem: (cartItem) => dispatch(updateCartItem(cartItem)),
    deleteCartItem: (id) => dispatch(deleteCartItem(id))
})


export default connect(mapSTP, mapDTP)(Cart)
