import { connect } from 'react-redux';
import LeftNavbar from './left_navbar';
import { openSidebar } from '../../actions/navbar_actions';
import { openModal } from '../../actions/modal_actions'

// const mapSTP = state => ({
 
// });


const mapDTP = dispatch => ({
    openSidebar: isOpen => dispatch(openSidebar(isOpen)),
    openModal: type => dispatch(openModal(type))
});



export default connect(null, mapDTP)(LeftNavbar);