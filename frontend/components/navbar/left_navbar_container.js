import { connect } from 'react-redux';
import LeftNavbar from './left_navbar';
import { openSidebar } from '../../actions/navbar_actions';

// const mapSTP = state => ({
 
// });


const mapDTP = dispatch => ({
    openSidebar: isOpen => dispatch(openSidebar(isOpen)),
});



export default connect(null, mapDTP)(LeftNavbar);