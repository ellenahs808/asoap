import { connect } from 'react-redux';
import { signup, clearSessionErrors } from '../../actions/session_actions';
import SignupForm from './signup_form';


const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'Register',
});


const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: user => dispatch(signup(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
});



export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);