import { loadTossPayments } from '@tosspayments/payment-sdk';
import { useSelector } from 'react-redux';

const clientKey = 'test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq';

// async/await을 사용하는 경우
async function Payment() {

  const orderInfo = useSelector(state => state.orderInfoReducer);

  const tossPayments = await loadTossPayments(clientKey);

  const orderName='주문상품명';
  const customerName='주문자 명';

  console.log("url(payment) 결제 화면에서의 orderInfo 나오는지?? " ,orderInfo);
  console.log("orderInfo.price가 잘 전달 되는가", orderInfo.price);
  console.log("orderInfo.id가 잘 전달 되는가", orderInfo.data);
  
  tossPayments.requestPayment('카드', { // 결제 수단 파라미터
    // 결제 정보 파라미터
    amount: orderInfo.price,
    orderId: orderInfo.data,
    orderName: orderName,
    customerName: customerName,
    successUrl: 'http://localhost:3000/payment-completed',
    failUrl: 'http://localhost:3000/payment-canceled',
    windowTarget: 'self',
  })

  
}

export default Payment;