
import { put, takeLatest } from 'redux-saga/effects';

import axiosService from '../../config/AxiosServive';

import qs from 'qs';

import * as actionType from '../actions/ActionTypes'
import { Alert } from 'react-native';

import {
    fetchCategorySuccessAction,
    fetchCategoryFailedAction,
    deleteOrderSuccessAction,
    deleteOrderItemSuccessAction,
    updateServiceErrAction,
    updateServiceSuccessAction,
    changeQuantitySuccessAction,
    changeQuantityErrAction,
    updateItemNoteSuccessAction,
    updateItemNoteErrAction
} from '../actions/CategoryActions';



export function* watchCategoryAction() {
    yield takeLatest(actionType.FETCH_CATEGORY, contentCategory);
}

function* contentCategory(action) {
    console.log('Open Saga');

    const param = {
        user_id: action.user_id,
        page: action.page
    };
    try {
        const response = yield axiosService.post(
            'order_init/get_orders',
            qs.stringify(param),
        );
        console.log('sagas ..', response.data.message);

        if (response.data.type === 1) {
            yield put(fetchCategorySuccessAction(response.data))
        } else {
            Alert.alert(response.data.message);
            yield put(fetchCategoryFailedAction(response.data.message))

        }
    } catch (error) { }
}

export function* watchDeleteOrderAction() {
    yield takeLatest(actionType.DELETE_ORDER, deleteOrder);
}

function* deleteOrder(action) {
    console.log('Open Saga');

    const param = {
        user_id: action.user_id,
        order_id: action.order_id
    };
    try {
        const response = yield axiosService.post(
            'order/delete',
            qs.stringify(param),
        );
        console.log('sagas ..', response.data);

        if (response.data.type === 1) {
            yield put(deleteOrderSuccessAction(response.data))
        } else {
            Alert.alert(response.data.message);
            // yield put(fetchCategoryFailedAction(response.data.message))

        }
    } catch (error) { }
}

//mdev.orderqc.com/app/order_init/delete_order_item


export function* watchDeleteOrderItemAction() {
    yield takeLatest(actionType.DELETE_ORDER_ITEM, deleteOrderItem);
}

function* deleteOrderItem(action) {
    console.log('Open Saga');

    const param = {
        user_id: action.user_id,
        order_id: action.order_id
    };
    try {
        const response = yield axiosService.post(
            'order_init/delete_order_item',
            qs.stringify(param),
        );
        console.log('sagas ..', response.data);

        if (response.data.type === 1) {
            yield put(deleteOrderItemSuccessAction(response.data))
        } else {
            Alert.alert(response.data.message);
            // yield put(fetchCategoryFailedAction(response.data.message))

        }
    } catch (error) { }
}

// update Service

export function* watchUpdateServiceAction() {
    yield takeLatest(actionType.UPDATE_SERVICE_CATEGORY, updateCategory);
}

function* updateCategory(action) {
    console.log('Open Saga');

    const param = {
        user_id: action.params.user_id,
        order_id: action.params.order_id,
        service_code: action.params.service_code
    };
    try {
        const response = yield axiosService.post(
            'order/update_service',
            qs.stringify(param),
        );
        console.log('sagas ..', response.data.message);

        if (response.data.type === 1) {
            yield put(updateServiceSuccessAction(response.data))
        } else {
            Alert.alert(response.data.message);
            yield put(updateServiceErrAction(response.data.message))

        }
    } catch (error) { }
}

//update item note 
export function* watchUpdateNoteAction() {
    yield takeLatest(actionType.UPDATE_ITEM_NOTE_CATEGORY, updateNoteCategory);
}

function* updateNoteCategory(action) {
    console.log('Open Saga');

    const param = {
        order_id: action.params.order_id,
        user_id: action.params.user_id,
        item_id: action.params.item_id,
        note: action.params.note
    };
    try {
        const response = yield axiosService.post(
            'order_init/update_item_note',
            qs.stringify(param),
        );
        console.log('sagas ..', response.data.message);

        if (response.data.type === 1) {
            yield put(updateItemNoteSuccessAction(response.data))
        } else {
            Alert.alert(response.data.message);
            yield put(updateItemNoteErrAction(response.data.message))
        }
    } catch (error) { }
}
//Change quantity 
export function* watchChangeQuantityAction() {
    yield takeLatest(actionType.CHANGE_QUANTITY_CATEGORY, changeQuantity);
}

function* changeQuantity(action) {
    console.log('Open Saga');

    const param = {
        order_id: action.params.order_id,
        user_id: action.params.user_id,
        item_id: action.params.item_id,
        quantity: action.params.quantity
    };
    try {
        const response = yield axiosService.post(
            'order_init/change_quantity',
            qs.stringify(param),
        );
        console.log('sagas ..', response.data.message);

        if (response.data.type === 1) {
            yield put(changeQuantitySuccessAction(response.data))
        } else {
            Alert.alert(response.data.message);
            yield put(changeQuantityErrAction(response.data.message))
        }
    } catch (error) { }
}

