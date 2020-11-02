import {
  LOGIN_ACTION,
  LOGIN_ACTION_SUCCESS,
  LOGIN_ACTION_ERROR,
  GET_LIST_ORDER_SUCCESS,
  GET_LIST_ORDER_FAILD,
  GET_LIST_ORDER
} from '../actions/ActionTypes';

 export const authReducers = (state = {}, action) => {

  switch (action.type) {
    case LOGIN_ACTION_SUCCESS:
      return {
        user: action.data,
        success: true
      };
    case LOGIN_ACTION_ERROR:
      return {
        message: action.message,
        success: false
      };
   s
    default:
      return state;
  }
};
