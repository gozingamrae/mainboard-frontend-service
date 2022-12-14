import "../css/style.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { GET_ADDRESSLIST } from "../../modules/deliveryModules/deliveryModule";

function Navbar() {
  const navigate = useNavigate();
  const addressList = useSelector((state) => state.deliveryReducer);
  const dispatch = useDispatch();

  return (
    <div className="mypage-navbar">
      <h1> 마이페이지 </h1>
      <div className="line"> </div>
      <div className="contents">
        <div className="content-line"></div>
        <h1> 쇼핑정보 </h1>
        <ul>
          <Link to="/mypage/orderreport">
            <li> 주문 내역 </li>
          </Link>
          <Link to="/">
            <li> 찜 리스트</li>
          </Link>
        </ul>
      </div>
      <div className="contents">
        <div className="content-line"></div>
        <h1> 혜택관리 </h1>
        <ul>
          <Link to="/">
            <li> 쿠폰 </li>
          </Link>
          <Link to="/">
            <li> 포인트 </li>
          </Link>
        </ul>
      </div>
      <div className="contents">
        <div className="content-line"></div>
        <h1> 고객센터 </h1>
        <ul>
          <Link to="/">
            <li> 1대1 문의 </li>
          </Link>
        </ul>
      </div>
      <div className="contents">
        <div className="content-line"></div>
        <h1> 회원 정보 </h1>
        <ul>
          <Link to="/mypage">
            <li> 회원정보 변경 </li>
          </Link>
          <Link to="/mypage/unregist">
            <li> 회원 탈퇴 </li>
          </Link>
          <Link to="/mypage/delivery-address-list">
            <li> 배송지 관리 </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
