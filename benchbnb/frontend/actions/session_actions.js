import { Signup, Logout, Login } from "../util/session_api_util";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";


const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors 
})


const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const createNewUser = formUser => dispatch =>
  Signup(formUser).then(user => dispatch(receiveCurrentUser(user)));

export const login = formUser => dispatch =>
  Login(formUser).then(user => dispatch(receiveCurrentUser(user)));

export const logout = () => dispatch =>
  Logout().then(() => dispatch(logoutCurrentUser()));
