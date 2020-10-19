import { connect } from 'react-redux';
import { signup, clearSessionErrors } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';
import SignupForm from './signup_form';


const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'Register',
});


const mapDispatchToProps = (dispatch, ownProps) => ({
    signup: user => dispatch(signup(user)),
    closeModal: () => dispatch(closeModal()),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
});



export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);