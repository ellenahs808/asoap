import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import Checkout from './cart_checkout'

const mapSTP = (state) =>({
    currentUser: state.entities.users
})

const mapDTP = dispatch =>({
    closeModal: () => dispatch(closeModal())
})


export default connect(mapSTP, mapDTP)(Checkout)