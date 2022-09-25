import "../style.css";
import { NavLink } from "react-router-dom";

function Join() {
  return (
    <div className="join-container">
      <div className="join-title">
        <p>회원가입</p>
      </div>
      <div className="join-mainboard">
        <NavLink to="/join/agreement"> <button>Main Board 회원가입</button></NavLink>
        <div className="join-line"></div>
        <button className="kakao-login"> 카카오 계정으로 회원가입</button>
        <NavLink to="/login"> 이미 회원이신가요? 로그인 </NavLink>
      </div>
    </div>
  );
}

export default Join;
