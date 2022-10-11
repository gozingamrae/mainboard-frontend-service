import "../css/payment-completed-style.css";

import { useDispatch, useSelector } from "react-redux";
import { PostPaymentInfo } from "../../apis/payment/PaymentInfoAPICalls";
import { POST_PAYMENTINFO } from "../../modules/paymentModules/paymentInfoModule";


const onClickHandler2 = (e) => {
  window.location.href = "/";
};


function PaymentCompleted() {

  const dispatch = useDispatch();

  const url = new URL(window.location.href);
  const paymentKey = url.searchParams.get('paymentKey');
  const orderId = url.searchParams.get('orderId');
  const amount = url.searchParams.get('amount');

  dispatch({type: POST_PAYMENTINFO , payload: {paymentKey: paymentKey, amount: amount, orderId: orderId}});

  dispatch(PostPaymentInfo());
  return (
    <div>
      <br />
      <h2 className="message">결제가 완료되었습니다.</h2>

      <div className="constents">
        <div className="paymentContent" onClick={onClickHandler2}>
          메인으로
        </div>
      </div>
    </div>
  );
}

export default PaymentCompleted;

