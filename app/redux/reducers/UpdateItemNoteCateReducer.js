
import * as actionType from '../actions/ActionTypes';

export const updateItemNoteReducers = (state = [], action) => {


    switch (action.type) {

        case actionType.UPDATE_ITEM_NOTE_CATEGORY_SUCCESS:
            return {
                receivedUpdateItemNote: action.data
            }

        case actionType.UPDATE_ITEM_NOTE_CATEGORY_ERR:
            return {
                err: action.err
            }

        default:
            return state;
    }
};






