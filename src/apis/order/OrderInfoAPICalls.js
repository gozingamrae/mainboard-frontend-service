import { GET_ORDERINFO, SET_ORDERINFO } from "../../modules/orderModules/orderInfoModule";
import axios from "axios"

export function getOrderInfo(){

    const resultsURL = "http://localhost:8080/order/info";

    return async function getOrderInfo(dispatch){

        const results = await axios({
            method: "POST",
            url: "http://127.0.0.1:8080/order/info",
            headers: {
              'Content-Type': 'application/json'
            },
            data : {
              orderPrice: 19000
            }
          });
        console.log("결제 정보 결과..! : ", results);

        dispatch({type: GET_ORDERINFO, payload: results.data});
    }
}

export default getOrderInfo;