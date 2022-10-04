import "../style.css";
import { NavLink } from "react-router-dom";

function JoinResult() {
  return (
    <div className="success-container">
      <div className="agreement-header">
        <div className="agreement-title">회원가입</div>
        <div className="agreement-step">
          <div className="agreement-step-content"> 01 약관동의</div>
          &nbsp; &gt; &nbsp;
          <div className="agreement-step-content"> 02 정보입력</div>
          &nbsp; &gt; &nbsp;
          <div className="agreement-step-content step-active"> 03 가입완료</div>
        </div>
      </div>
      <div className="user-content">
        <p> 회원가입이 완료되었습니다. </p>
        <NavLink to="/login"> 지금 로그인 하기 </NavLink> 
        <a href="/"> 메인 페이지로 </a>
      </div>
    </div>
  );
}

export default JoinResult;
