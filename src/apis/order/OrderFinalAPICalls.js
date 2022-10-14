import axios from "axios";
import {useSelector} from "react-redux";

export function FinalOrderInfo(){

    const orderFinalResult = useSelector((state) => state.orderFinalReducer);

    console.log("insert 들어오는지 확인", orderFinalResult);

    return async function FinalOrderInfo(){

        const results = await axios({
            method: "POST",
            url: "http://localhost:8080/order/final",
            headers: {
              'Content-Type': 'application/json',
              "Access-Control-Allow-Origin": "*"
            },
            data : {
              orderId: orderFinalResult.orderId,
              orderAmount: orderFinalResult.orderAmount,
              couponUsedRate: orderFinalResult.couponUsedRate,
              pointsUsedAmount: orderFinalResult.pointsUsedAmount,
              orderDate: orderFinalResult.orderDate,
              selectedProduct: orderFinalResult.selectedProduct,
              memberCode: orderFinalResult.memberCode,
              paymentMethod: orderFinalResult.paymentMethod,
              deliveryCharge: orderFinalResult.deliveryCharge,
              usedCouponCode: orderFinalResult.usedCouponCode,
              deliveryStartYn: orderFinalResult.deliveryStartYn,
              finalOrderAmount: orderFinalResult.finalOrderAmount
            }
          });
          console.log("잘 마무리 되었을까?", results);

    }
}

export default FinalOrderInfo;