import { put, takeLatest } from 'redux-saga/effects';

import axiosService from '../../config/AxiosServive';

import qs from 'qs';

import {
  LOGIN_ACTION,
  GET_LIST_ORDER
} from '../actions/ActionTypes';

import { loginErrorAction, loginSuccessAction } from '../actions/AuthActions'
import { Alert } from 'react-native';

export function* watchLoginAction() {
  yield takeLatest(LOGIN_ACTION, login);
}

function* login(action) {
  // console.log('Open Saga');

  const param = {
    credential: action.user.credential,
    password: action.user.password,
    order_site: action.user.order_site,
  };
  try {
    const response = yield axiosService.post(
      'user/login',
      qs.stringify(param),
    );

    if (response.data.type === 1) {
      yield put(loginSuccessAction(response.data))
    } else {
      Alert.alert(response.data.message);
      yield put(loginErrorAction(response.data.message))
    }
  } catch (error) { }
}


