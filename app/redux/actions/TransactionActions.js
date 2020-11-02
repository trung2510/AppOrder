import {
    FETCH_TRANSACTION_SUCCESS,
    FETCH_TRANSACTION,
    FETCH_TRANSACTION_ERR
} from '../actions/ActionTypes';

export const fetchTransactionAction = (params) => {
    console.log('fetchTransactionAction');

    return {
        type: FETCH_TRANSACTION,
        params
    }
}

// sent by redux-saga

export const fetchTransactionSuccessAction = receivedTransaction => {

    // console.log('Open Tranaction', receivedTransaction);

    return {
        type: FETCH_TRANSACTION_SUCCESS,
        receivedTransaction,
    }
}



export const fetchTransactionFailedAction = (error) => {

    console.log('fetchContentFailedAction');

    return {
        type: FETCH_TRANSACTION_ERR,
        error
    }
}

