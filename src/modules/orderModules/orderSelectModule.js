import { createActions, handleActions } from 'redux-actions';

const initialState = [];

export const GET_ORDERLIST = "orderList/ORDERLIST";

export const actions = createActions({
    [GET_ORDERLIST]: () => {}
})

export const orderReducer = handleActions(
    {
        [GET_ORDERLIST]: (state, {payload}) =>{
           return payload;
        },
    },
    initialState
);

export default orderReducer;
