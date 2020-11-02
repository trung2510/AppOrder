import { put, takeLatest } from 'redux-saga/effects';

import axiosService from '../../config/AxiosServive';

import qs from 'qs';

import * as actionType from '../actions/ActionTypes'
import { Alert } from 'react-native';

import { getChatFailedAction, getChatSuccessAction } from '../actions/HomeChatAction';

export function* watchChatAction() {
    yield takeLatest(actionType.GET_CHAT, contentChat);
}

function* contentChat(action) {
    console.log('Open Saga');

    const param = {
        user_id: action.user_id,
        order_id: action.order_id
    };
    try {
        const response = yield axiosService.post(
            'order_comment/get_comments',
            qs.stringify(param),
        );
        // console.log('sagas ..S', response.data);

        if (response.data.type === 1) {
            yield put(getChatSuccessAction(response.data))

        } else {
            Alert.alert(response.data.message);
            yield put(getChatFailedAction(response.data.message))

        }
    } catch (error) { }
}
