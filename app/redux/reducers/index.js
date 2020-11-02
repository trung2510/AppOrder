import { authReducers } from '../reducers/AuthReducers.js';
import { fetchContentHomeReducers } from '../reducers/FetchContentHomeReducers'
import { fetchTransactionReducers } from '../reducers/TransactionReducers'
import { fetchCategoryReducers } from '../reducers/CategoryReducers'
import { updateServiceCategoryReducers } from '../reducers/UpdateServiceCategory'
import { updateItemNoteReducers } from '../reducers/UpdateItemNoteCateReducer'
import { getChatReducers } from '../reducers/ChatReducers'
import { changeQuantityReducers } from '../reducers/ChangeQuantityReducers'

import { combineReducers } from 'redux'
const allReducers = combineReducers({
    authReducers,
    fetchContentHomeReducers,
    fetchTransactionReducers,
    fetchCategoryReducers,
    getChatReducers,
    updateServiceCategoryReducers,
    updateItemNoteReducers,
    changeQuantityReducers

});
export default allReducers;