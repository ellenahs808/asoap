import { connect } from 'react-redux';
import { login, loginDemo } from '../../actions/session_actions';
import LoginForm from './login_form';


const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'Login',
});


const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: user => dispatch(login(user)),
    loginDemo: () => dispatch(loginDemo())
});


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);