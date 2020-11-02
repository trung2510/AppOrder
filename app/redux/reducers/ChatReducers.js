import * as actionType from '../actions/ActionTypes';

export const getChatReducers = (state = {}, action) => {

    switch (action.type) {

        case actionType.GET_CHAT_SUCCESS:
            return {
                ...state,
                receivedChat: action.receivedChat,
            };

        case actionType.GET_CHAT_ERR:
            return {
                error: action.error
            };

        default:
            return state;
    }
};





