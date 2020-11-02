
import {
    GET_LIST_ORDER_SUCCESS,
    GET_LIST_ORDER_FAILD,
    GET_LIST_ORDER
} from '../actions/ActionTypes';


//don hang
export const getListOrderAction = () => {
    console.log('123');

    return {
        type: GET_LIST_ORDER,
    }
}
export const getListOrderFaild = (error) => {
    return {
        type: GET_LIST_ORDER_FAILD,
        error
    }
}
export const getListOrderSuccessAction = dataOrder => {
    return {
        type: GET_LIST_ORDER_SUCCESS,
        dataOrder
    }
}