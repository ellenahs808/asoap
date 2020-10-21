import { connect } from 'react-redux';
import LeftNavbar from './left_navbar';
import { openModal } from '../../actions/modal_actions'

// const mapSTP = state => ({
//     isItOpen: state.ui.navbar.isOpen,
// });


const mapDTP = dispatch => ({
    openModal: type => dispatch(openModal(type)),
    openModal: type => dispatch(openModal(type))
});



export default connect(null, mapDTP)(LeftNavbar);