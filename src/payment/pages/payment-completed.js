import "../css/payment-completed-style.css";

const onClickHandler1 = (e) => {
  window.location.href = "/payment-info";
};

const onClickHandler2 = (e) => {
  window.location.href = "/";
};

function paymentCompleted() {
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

export default paymentCompleted;
