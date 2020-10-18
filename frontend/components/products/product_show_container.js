import { connect } from 'react-redux';
import { fetchProducts, fetchProduct } from '../../actions/product_actions';
import { fetchCartItem, fetchAllCartItems, createCartItem, updateCartItem } from '../../actions/cart_actions'
import ProductShow from './product_show';



const mapSTP = (state, ownProps) => ({
    product: state.entities.products[ownProps.match.params.productId],
    cartItems: state.entities.cartItems,
    userCartItems: Object.values(state.entities.cartItems),
    currentUserId: state.session.id,
    // currentQty:
    // currentUser: state.session
})

const mapDTP = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
  fetchProduct: (productId) => dispatch(fetchProduct(productId)),
  fetchCartItem: (id) => dispatch(fetchCartItem(id)),
  fetchAllCartItems: () => dispatch(fetchAllCartItems()),
  createCartItem: (cartItem) => dispatch(createCartItem(cartItem)),
  updateCartItem: (cartItem) => dispatch(updateCartItem(cartItem))
});



export default connect(mapSTP, mapDTP)(ProductShow)



