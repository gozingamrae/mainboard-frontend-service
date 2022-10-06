import "../css/boardgameInfo-style.css";
import 부루마블 from "../image/burumavel.jpg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getOrderInfo} from "../../apis/order/OrderInfoAPICalls";

export function BoardgameInfo() {
  const boardGameName = "부루마블";
  const benefit = 5;
  const loanPrice = 4000;
  const deliveredPrice = "2500";
  const boardGameCode = "1234567890";
  const details = " . . . 상세정보 . . . ";
  const points = loanPrice * (benefit / 100);

  const orderInfo = useSelector(state => state.orderInfoReducer)
  const dispatch = useDispatch();

  const navigate = useNavigate();

  function onClickHandler1(e) {
    navigate("/shoppingcart");
  }
  function onClickHandler2(e) {
    navigate("/wishlist");
  }
  const onClickHandler3 = async (e)=> {
     dispatch(getOrderInfo())
    navigate("/order-info");
  }
  //   const 요청메소드이름 = () => {
  //   axios({
  //     method: "POST", 
  //     url: "http://localhost:8080/deliveries/addresses",
  //     data: {
  //       키값: 결제정보변수명, //결제 정보
  //     },
  //   });
  // };

  return (
    <div className="layout">
      <div className="contentBox">

        <img className="image" src={부루마블} alt="사진출력오류" />

        <div className="content">
          <p className="boardGameName">{`${boardGameName}`}</p>
          <hr />
          <p className="loanPrice">대여료 : {`${loanPrice}`}</p>
          <p>대여혜택 : {`적립 포인트 ${benefit}% (${points}원)`}</p>
          <p>배송비 : {`${deliveredPrice}`}</p>
          <p>보드게임 코드 : {`${boardGameCode}`}</p>
          <p>제품 상세 정보 : {`${details}`}</p>
          <hr />
          <button className="button" onClick={onClickHandler1}>
            {" "}
            장바구니{" "}
          </button>
          <button className="button" onClick={onClickHandler2}>
            찜하기
          </button>
          <button className="buyButton" onClick={onClickHandler3}>
            바로 구매
          </button>
        </div>
      </div>
    </div>
  );
}

export default BoardgameInfo;
