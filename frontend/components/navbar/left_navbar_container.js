import { connect } from 'react-redux';
import LeftNavbar from './left_navbar';
import { openMainSidebar } from '../../actions/navbar_actions';

// const mapSTP = state => ({
 
// });


const mapDTP = dispatch => ({
    openMainSidebar: isOpen => dispatch(openMainSidebar(isOpen)),
});



export default connect(null, mapDTP)(LeftNavbar);