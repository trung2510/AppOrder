import { put, takeLatest } from 'redux-saga/effects';

import axiosService from '../../config/AxiosServive';

import qs from 'qs';

import {
  GET_LIST_ORDER
} from '../actions/ActionTypes';
import { Alert } from 'react-native';



export function* watchOrderAction(){
    yield takeLatest(GET_LIST_ORDER,order)
  }
  function* order(action){
    
    
    try {
      console.log('auSaga');
    } catch (error) {
      
    }
  }