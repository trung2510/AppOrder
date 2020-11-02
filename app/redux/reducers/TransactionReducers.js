import * as actionType from '../actions/ActionTypes';

export const fetchTransactionReducers = (state = {}, action) => {

    // console.log('reducers:dulieu ..', state);
    switch (action.type) {

        case actionType.FETCH_TRANSACTION_SUCCESS:
            return {
                ...state,
                receivedTransaction: action.receivedTransaction,
            };

        case actionType.FETCH_TRANSACTION_ERR:
            return {
                error: action.error,   
            };

        default:
            return state;
    }
};





