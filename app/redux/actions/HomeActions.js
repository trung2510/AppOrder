import {
    FETCH_CONTENT_HOME,
    FETCH_CONTENT_HOME_SUCCESS,
    FETCH_CONTENT_HOME_ERR,
    FILTER_TAOBAO,
    FILTER_1688,
    FILTER_TMALL
} from '../actions/ActionTypes';

export const filterTaoBaoAction = () => {
    return {
        type: FILTER_TAOBAO,
    }
}

export const filterTmallAction = () => {
    return {
        type: FILTER_TMALL,
    }
}

export const filter1688Action = () => {
    return {
        type: FILTER_1688,
    }
}

export const fetchContentHomeAction = user_id => {
    return {
        type: FETCH_CONTENT_HOME,
        user_id
    }
}

// sent by redux-saga

export const fetchContentSuccessAction = receivedHomeContent => {
    return {
        type: FETCH_CONTENT_HOME_SUCCESS,
        receivedHomeContent,
        filterStatus: FILTER_TAOBAO
    }
}


export const fetchContentFailedAction = error => {
    return {
        type: FETCH_CONTENT_HOME_ERR,
        error
    }
}

