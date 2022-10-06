import { loadTossPayments } from '@tosspayments/payment-sdk';
import { useSelector } from 'react-redux';

const clientKey = 'test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq';

// async/await을 사용하는 경우
async function Payment() {

  const orderInfo = useSelector(state => state.orderInfoReducer)

  const tossPayments = await loadTossPayments(clientKey)

  console.log(orderInfo)

  tossPayments.requestPayment('카드', { // 결제 수단 파라미터
    // 결제 정보 파라미터
    amount: orderInfo.price,
    orderId: orderInfo.data,
    orderName: '토스 티셔츠 외 2건',
    customerName: '박토스',
    successUrl: 'http://localhost:3000/payment-completed',
    failUrl: 'http://localhost:3000/payment-completed',
  })
}

export default Payment;