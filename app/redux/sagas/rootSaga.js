import { all } from 'redux-saga/effects';

import { watchLoginAction, } from './AuthSaga';
import { watchFetchContentHomeAction } from './FetchContentHomeSaga';
import { watchTransactionAction } from './TransactionSaga';
import {
    watchCategoryAction,
    watchDeleteOrderAction,
    watchDeleteOrderItemAction,
    watchUpdateServiceAction,
    watchUpdateNoteAction,
    watchChangeQuantityAction
} from './CategorySaga';
import { watchChatAction } from './ChatSaga'


export default function* rootSaga() {
    yield all([
        watchLoginAction(),
        watchFetchContentHomeAction(),
        watchTransactionAction(),
        watchCategoryAction(),
        watchChatAction(),
        watchDeleteOrderAction(),
        watchDeleteOrderItemAction(),
        watchUpdateServiceAction(),
        watchUpdateNoteAction(),
        watchChangeQuantityAction()
    ])
}
