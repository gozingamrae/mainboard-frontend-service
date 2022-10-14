import { SEARCH_ORDER } from "../../modules/orderModules/orderSearchModule";
import axios from "axios"

export function callSearchOrderAPI(text, type) {

    return async function getOrderList(dispatch,getState) {

        if (type == "orderId"){
            console.log(text)
            const resultOrderId = await axios({
                method: "Post",
                url: 'http://127.0.0.1:8080/order/list/by-orderid',
                data : {
                    "text": text
                }
            });
            console.log("ApiCalls=> orderId에 값이 들어왔나" , resultOrderId.data.data);
            dispatch({ type: SEARCH_ORDER,  payload: resultOrderId.data.data});
        } else if (type == "productName"){
            const resultProductName = await axios({
                method: "Post",
                url:'http://127.0.0.1:8080/order/list/by-productname',
                data : {
                    text: text
                }
            });
            console.log("ApiCalls=> productName에 값이 들어왔나" , resultProductName.data.data);
            dispatch({ type: SEARCH_ORDER,  payload: resultProductName.data.data});
            
        }
    }
}