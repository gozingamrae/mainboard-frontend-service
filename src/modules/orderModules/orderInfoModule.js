import { createActions, handleActions } from 'redux-actions';

const initialState = [{
    orderInfo: [],
    data: "",
    message: "",
    price: 0
}];

export const GET_ORDERINFO = "orderInfo/GET_ORDERINFO";
export const SET_ORDERINFO = "orderInfo/SET_ORDERINFO";

export const actions = createActions({
    [GET_ORDERINFO]: () => {}
})

export const orderInfoReducer = handleActions(
    {
        [GET_ORDERINFO]: (state, {payload}) => payload,
        [SET_ORDERINFO]: (state, {payload}) =>{

            console.log("aaa", payload)
            state.data = payload.data;
            state.message = payload.message;
            state.price = payload.price;

           return { ...state };
        }
    },
    initialState
);

export default orderInfoReducer;
// {console.log(res.data.data); console.log(res.data.message); console.log(res.data.price) }