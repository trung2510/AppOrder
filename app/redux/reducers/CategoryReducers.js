import * as actionType from '../actions/ActionTypes';

export const fetchCategoryReducers = (state = [], action) => {

    // console.log('reducers:dulieu ...',state);

    switch (action.type) {

        case actionType.FETCH_CATEGORY_SUCCESS:
            return {
                ...state,
                receivedCategory: action.receivedCategory,
                // totalData: state.totalData.concat(action.receivedCategory)
            };

        case actionType.FETCH_CATEGORY_ERR:
            return {
                error: action.error
            };

        case actionType.DELETE_ORDER_SUCCESS:
            const filterOrder = action.receivedCategory.orders.filter(e => {
                return e.order.id.toString() !== action.order_id.toString();
            });
            return filterOrder;

        case actionType.DELETE_ORDER_ITEM_SUCCESS:
            const filterOrderItem = action.receivedCategory.orders.filter(e => {
                return e.items.id.toString() !== action.order_id.toString()
            });
            return filterOrderItem;

        default:
            return state;
    }
};





