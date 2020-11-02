import { GET_CHAT, GET_CHAT_SUCCESS, GET_CHAT_ERR} from './ActionTypes';

export function getChatAction(user_id, order_id) {
    return {
        type: GET_CHAT,
        user_id,
        order_id
    }
}

// sent by saga

export function getChatSuccessAction(receivedChat) {
    return {
        type: GET_CHAT_SUCCESS,
        receivedChat
    }
}


export function getChatFailedAction(error) {
    return {
        type: GET_CHAT_ERR,
        error
    }
}