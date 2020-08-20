import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';


const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser,
});


const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});


const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors,
});


export const login = user => dispatch => (
    SessionAPIUtil.login(user)
        .then(currentUser => dispatch(receiveCurrentUser(currentUser)))
        .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);


export const logout = () => dispatch => (
    SessionAPIUtil.logout()
        .then(() => dispatch(logoutCurrentUser()))
        .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);


export const signup = user => dispatch => (
    SessionAPIUtil.signup(user)
        .then(currentUser => dispatch(receiveCurrentUser(currentUser)))
        .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);



export const loginDemo = () => dispatch => (
    SessionAPIUtil.loginDemo()
        .then(currentUser => dispatch(receiveCurrentUser(currentUser)))
);


