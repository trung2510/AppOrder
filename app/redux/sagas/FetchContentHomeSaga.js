
import { put, takeLatest } from 'redux-saga/effects';

import axiosService from '../../config/AxiosServive';

import qs from 'qs';

import { FETCH_CONTENT_HOME } from '../actions/ActionTypes';
import { fetchContentFailedAction, fetchContentSuccessAction, } from '../actions/HomeActions'
import { Alert } from 'react-native';


export function* watchFetchContentHomeAction() {
    yield takeLatest(FETCH_CONTENT_HOME, contentHome);
}

function* contentHome(action) {
    const param = {
        user_id: action.user_id
    };

    try {
        const response = yield axiosService.post(
            'home/get_param',
            qs.stringify(param),
        );

        if (response.data.type === 1) {

            yield put(fetchContentSuccessAction(response.data))

        } else {
            Alert.alert(response.data.message);
            yield put(fetchContentFailedAction(response.data.message))
        }
    } catch (error) { }
}

