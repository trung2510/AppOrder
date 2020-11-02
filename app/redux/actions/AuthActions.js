import {
  LOGIN_ACTION,
  LOGIN_ACTION_SUCCESS,
  LOGIN_ACTION_ERROR,
} from '../actions/ActionTypes';

export const loginAction = (user) => {
  return {
    type: LOGIN_ACTION,
    user
  }
};
export const loginSuccessAction = data => {
  return {
    type: LOGIN_ACTION_SUCCESS,
    data,
  };
};

export const loginErrorAction = message => {
  return {
    type: LOGIN_ACTION_ERROR,
    message,
  };
};



 






  