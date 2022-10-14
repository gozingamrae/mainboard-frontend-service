import { POST_PAYMENTINFO } from "../../modules/paymentModules/paymentInfoModule";
import axios from "axios";
import { useSelector } from "react-redux";

export function PostPaymentInfo() {
  const paymentInfo = useSelector((state) => state.paymentInfoReducer);

  const resultsURL = "http://localhost:8080/payment-completed";

  return async function postPaymentInfo() {
    console.log("state값을 어떻게 가져오지? ", paymentInfo);

    const results = await axios({
      method: "POST",
      url: "http://localhost:8080/payment-completed",
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        paymentKey: paymentInfo.paymentKey,
        orderId: paymentInfo.orderId,
        amount: paymentInfo.amount,
      },
    });
    console.log("결제정보결과!!: ", results);
  };
}

export default PostPaymentInfo;
