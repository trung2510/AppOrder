import {
    GET_LIST_ORDER_SUCCESS,
    GET_LIST_ORDER_FAILD,
    GET_LIST_ORDER
  } from '../actions/ActionTypes';
  
   export const orderReducers = (state = {}, action) => {
  
    switch (action.type) {
      case GET_LIST_ORDER_SUCCESS :
        return {
          dataOrder : action.dataOrder
        };
      case GET_LIST_ORDER_FAILD :
        return {
          error : action.error
        }
      default:
        return state;
    }
  };
  