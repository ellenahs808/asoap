import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Navbar from './navbar';




const mapStateToProps = ({entities, session}) => {
    return {
        currentUser: entities.users[session.id]
    }
};

// const mapStateToProps = state => ({
//     currentUser: state.entities.users[state.session.id]
// })
//same as above



const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});


export default connect(mapStateToProps, mapDispatchToProps)(Navbar);