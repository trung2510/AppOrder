
import {
    FETCH_CATEGORY_SUCCESS,
    FETCH_CATEGORY,
    FETCH_CATEGORY_ERR,
    DELETE_ORDER,
    DELETE_ORDER_SUCCESS,
    DELETE_ORDER_ITEM,
    DELETE_ORDER_ITEM_SUCCESS,
    UPDATE_SERVICE_CATEGORY,
    UPDATE_SERVICE_CATEGORY_ERR,
    UPDATE_SERVICE_CATEGORY_SUCCESS,
    UPDATE_ITEM_NOTE_CATEGORY,
    UPDATE_ITEM_NOTE_CATEGORY_ERR,
    UPDATE_ITEM_NOTE_CATEGORY_SUCCESS,
    CHANGE_QUANTITY_CATEGORY,
    CHANGE_QUANTITY_CATEGORY_ERR,
    CHANGE_QUANTITY_CATEGORY_SUCCESS
} from '../actions/ActionTypes';

export const fetchCategoryAction = (user_id, page) => {
    console.log('fetch cate action');
    
    return {
        type: FETCH_CATEGORY,
        user_id,
        page
    }
}

// sent by redux-saga

export const fetchCategorySuccessAction = receivedCategory => {

    return {
        type: FETCH_CATEGORY_SUCCESS,
        receivedCategory,

    }
}

export const fetchCategoryFailedAction = (error) => {

    console.log('fetchContentFailedAction');

    return {
        type: FETCH_CATEGORY_ERR,
        error
    }
}
//------------------------------- xoa don hang


export const deleteOrderAction = (user_id, order_id) => {
    return {
        type: DELETE_ORDER,
        user_id,
        order_id
    }
}


export const deleteOrderSuccessAction = order_id => {

    return {
        type: DELETE_ORDER_SUCCESS,
        order_id,
    }
}


//-------------------------- xoa item

export const deleteOrderItemAction = (user_id, order_id) => {
    return {
        type: DELETE_ORDER_ITEM,
        user_id,
        order_id
    }
}

export const deleteOrderItemSuccessAction = order_id => {

    return {
        type: DELETE_ORDER_ITEM_SUCCESS,
        order_id,
    }
}

//-------------------------- thay doi dich vu
export const updateServiceAction = (params) => {
    return {
        type: UPDATE_SERVICE_CATEGORY,
        params
    }
}

export const updateServiceSuccessAction = data => {
    return {
        type: UPDATE_SERVICE_CATEGORY_SUCCESS,
        data
    }
}

export const updateServiceErrAction = err => {
    return {
        type: UPDATE_SERVICE_CATEGORY_ERR,
        err
    }
}

//-------------------------- ghi chu
export const updateItemNoteAction = (params) => {
    return {
        type: UPDATE_ITEM_NOTE_CATEGORY,
        params
    }
}

export const updateItemNoteSuccessAction = data => {
    return {
        type: UPDATE_ITEM_NOTE_CATEGORY_SUCCESS,
        data
    }
}

export const updateItemNoteErrAction = err => {
    return {
        type: UPDATE_ITEM_NOTE_CATEGORY_ERR,
        err
    }
}
//--------------------------- thay doi so luong hang

export const changeQuantityAction = (params) => {
    return {
        type: CHANGE_QUANTITY_CATEGORY,
        params
    }
}

export const changeQuantitySuccessAction = data => {
    return {
        type: CHANGE_QUANTITY_CATEGORY_SUCCESS,
        data
    }
}

export const changeQuantityErrAction = err => {
    return {
        type: CHANGE_QUANTITY_CATEGORY_ERR,
        err
    }
}