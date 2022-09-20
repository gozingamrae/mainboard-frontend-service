import "../css/order-info-style.css";
function OrderInfo() {
  const boardGameName = "부루마블";
  const LoanPrice = "4000";
  const deliveredPrice = "2500";
  const boardGameCode = "1234567890";
  const details = " . . . 상세정보 . . . ";

  return (
    <div>
      <h1>+++ HEADER +++</h1>

      <img className="image" src="img/burumavel.jpg" alt="사진출력오류" />
      <p>보드게임명 : {`${boardGameName}`}</p>
      <p>대여료 : {`${LoanPrice}`}</p>
      <p>배송비 : {`${deliveredPrice}`}</p>
      <p>보드게임 코드 : {`${boardGameCode}`}</p>
      <p>제품 상세 정보 : {`${details}`}</p>
    </div>
  );
}

export default OrderInfo;
