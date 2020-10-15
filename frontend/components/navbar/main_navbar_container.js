import { connect } from 'react-redux'
import MainNavbar from './main_navbar'
import { fetchCartItem } from '../../actions/cart_actions'


const mapSTP = state => {
    return {
        currentUser: state.entities.users[state.session.id]
    }
}


const mapDTP = dispatch => {
    return {
        fetchCartItem: () => dispatch(fetchCartItem())
    }
}


export default connect(mapSTP, mapDTP)(MainNavbar)