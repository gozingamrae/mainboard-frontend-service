import '../css/order-info-style.css';
function OrderInfo(){

    const boardGameName = "부루마블";
    const LendPrice = "4000"
    const deliveredPrice ="2500";
    const boardGameCode="1234567890";
    const details="상품 상세 정보";


    return(
        <div>
            <h1>+++ HEADER +++</h1>
            
            <img className="image" src="img/burumavel.jpg" alt="사진출력오류"/>
            <p>보드게임명 : {`${boardGameName}`}</p>
        </div>
    );
}

export default OrderInfo;