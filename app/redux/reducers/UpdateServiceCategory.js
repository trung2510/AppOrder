
import * as actionType from '../actions/ActionTypes';

export const updateServiceCategoryReducers = (state = [], action) => {

    // console.log('reducers:dulieu ...',state);

    switch (action.type) {

        case actionType.UPDATE_SERVICE_CATEGORY_SUCCESS:
            return {
                receivedUpdateService: action.data
            }

        case actionType.UPDATE_SERVICE_CATEGORY_ERR:
            return {
                err: action.err
            }

        default:
            return state;
    }
};






