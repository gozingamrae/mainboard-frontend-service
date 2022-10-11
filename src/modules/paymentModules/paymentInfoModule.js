import { createActions, handleActions } from 'redux-actions';

const initialState = [{
    paymentKey: 'aa',
    orderId: 'aa',
    amount: 0
}];

export const POST_PAYMENTINFO = "payemtInfo/POST_PAYMENTINFO";

export const actions = createActions({
    [POST_PAYMENTINFO]: () => {}
})

export const paymentInfoReducer = handleActions(

    {
        [POST_PAYMENTINFO]: (state, {payload}) => 
        {
            console.log("paymentinfoReducer 실행 되었는지 ? ");
            state.paymentKey = payload.paymentKey;
            state.orderId = payload.orderId;
            state.amount = payload.amount;
            return {...state};
        }
        
    },
    initialState
);

export default paymentInfoReducer;
// {console.log(res.data.data); console.log(res.data.message); console.log(res.data.price) }