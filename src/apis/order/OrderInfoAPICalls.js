import axios from "axios";
import {
  GET_ORDERINFO,
  SET_ORDERINFO,
} from "../../modules/orderModules/orderInfoModule";

export function getOrderInfo() {
  return async function getOrderInfo(dispatch) {
    const results = await axios({
      method: "POST",
      url: "http://localhost:8080/order/info",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        orderPrice: 19000,
        //주문 가격은 값을 받아 입력한다.
      },
    });
    console.log("주문 정보 결과..! : ", results);

    dispatch({ type: GET_ORDERINFO, payload: results.data });
  };
}

export default getOrderInfo;
