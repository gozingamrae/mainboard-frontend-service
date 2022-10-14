import { GET_ORDERLIST } from "../../modules/orderModules/orderSelectModule";

export function callGetOrderListAPI(){

    const requestURL = "http://127.0.0.1:8080/order/list";

    return async function getOrderList(dispatch) {

        const results = await fetch(requestURL).then(res=> res.json());

        dispatch({type: GET_ORDERLIST, payload: results.data});
    }
}