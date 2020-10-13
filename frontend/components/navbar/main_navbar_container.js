import { connect } from 'react-redux'
import MainNavbar from './main_navbar'
import { fetchCartItems } from '../../actions/cart_actions'


const mapSTP = state => {
    return {
        currentUser: state.entities.users[state.session.id]
    }
}


const mapDTP = dispatch => {
    return {
        fetchCartItems: () => dispatch(fetchCartItems())
    }
}


export default connect(mapSTP, mapDTP)(MainNavbar)