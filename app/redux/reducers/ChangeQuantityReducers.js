
import * as actionType from '../actions/ActionTypes';

export const changeQuantityReducers = (state = [], action) => {

    // console.log('reducers:dulieu ...',state);

    switch (action.type) {

        case actionType.CHANGE_QUANTITY_CATEGORY_SUCCESS:
            return {
                changeQuantityCategory: action.data
            }

        case actionType.CHANGE_QUANTITY_CATEGORY_ERR:
            return {
                err: action.err
            }

        default:
            return state;
    }
};






