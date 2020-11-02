import {
    FETCH_CONTENT_HOME_SUCCESS,
    FETCH_CONTENT_HOME_ERR,
    FILTER_1688,
    FILTER_TMALL,
    FILTER_TAOBAO,


} from '../actions/ActionTypes';

export const fetchContentHomeReducers = (state = {}, action) => {

    // console.log('reducers:dulieu ..', state);
    switch (action.type) {

        case FETCH_CONTENT_HOME_SUCCESS:

            return {
                ...state,
                receivedHomeContent: action.receivedHomeContent,
                filterStatus: FILTER_TAOBAO,
            };

        case FETCH_CONTENT_HOME_ERR:
            return {
                error: action.error
            };

        case FILTER_TAOBAO:
            return {
                ...state,
                filterStatus: FILTER_TAOBAO,
            }
        case FILTER_TMALL:
            return {
                ...state,
                filterStatus: FILTER_TMALL,
            }

        case FILTER_1688:
            return {
                ...state,
                filterStatus: FILTER_1688,
            }

        default:
            return state;
    }
};





