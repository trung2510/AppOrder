
import { put, takeLatest } from 'redux-saga/effects';

import axiosService from '../../config/AxiosServive';

import qs from 'qs';

import * as actionType from '../actions/ActionTypes'
import { Alert } from 'react-native';

import { fetchTransactionFailedAction, fetchTransactionSuccessAction } from '../actions/TransactionActions';

export function* watchTransactionAction() {
    yield takeLatest(actionType.FETCH_TRANSACTION, contentTransaction);
}

function* contentTransaction(action) {
    console.log('Open Saga');

    const param = {
        user_id: action.params.user_id,
        keyword: action.params.keyword,
        transaction_type: action.params.transaction_type,
        from_time: action.params.from_time,
        to_time: action.params.to_time,
        page: action.params.page
    };
    try {
        const response = yield axiosService.post(
            'user_transaction/get_info',
            qs.stringify(param),
        );
        console.log('sagas ..', response.data.message);

        if (response.data.type === 1) {
            yield put(fetchTransactionSuccessAction(response.data))

        } else {
            Alert.alert(response.data.message);
            yield put(fetchTransactionFailedAction(response.data.message))

        }
    } catch (error) { }
}

