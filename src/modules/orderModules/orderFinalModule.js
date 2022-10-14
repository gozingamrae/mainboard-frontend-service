import { createActions, handleActions } from 'redux-actions';

const initialState = {
    orderId: "",
    orderAmount: 0,
    pointsUsedAmount: 0,
    couponUsedRate: 0,
    orderDate: "",
    selectedProduct: 0,
    memberCode: 0,
    paymentMethod: "",
    deliveryCharge: 0,
    usedCouponCode: "",
    deliveryStartYn: "",
    finalOrderAmount: 0,
};

export const ORDER_FINAL = "orderFinal/ORDER_FINAL";

export const actions = createActions({
    [ORDER_FINAL]: () => {}
})

export const orderFinalReducer = handleActions(
    {
        [ORDER_FINAL]: (state, {payload}) => {
            state=payload;
            return {...state}
        },
    },
    initialState
);

export default orderFinalReducer;
// {console.log(res.data.data); console.log(res.data.message); console.log(res.data.price) }