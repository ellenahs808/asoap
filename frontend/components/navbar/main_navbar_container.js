import { connect } from 'react-redux'
import MainNavbar from './main_navbar'
import { fetchCartItem, fetchAllCartItems } from '../../actions/cart_actions'


const mapSTP = state => {
    return {
        currentUser: state.entities.users[state.session.id],
        cartItems: Object.values(state.entities.cartItems),
    }
}


const mapDTP = dispatch => {
    return {
        fetchCartItem: (id) => dispatch(fetchCartItem(id)),
        fetchAllCartItems: () => dispatch(fetchAllCartItems())
    }
}


export default connect(mapSTP, mapDTP)(MainNavbar)