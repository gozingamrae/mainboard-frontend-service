import "../style.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { callKakaoLoginAPI } from "../../apis/member/MemberAPICalls"; 


function Join() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const member = useSelector(state => state.memberAPIReducer);

  const onKaKaoHandler = () => {
      dispatch(callKakaoLoginAPI());
  }

  useEffect(() => {
    if(member.status == 201){
      console.log("[Login] kakao login SUCCESS {}", member);
      navigate("/", { replace: true })
    }
  },
  [member]);


  return (
    <div className="join-container">
      <div className="join-title">
        <p>회원가입</p>
      </div>
      <div className="join-mainboard">
        <NavLink to="/join/agreement"> <button>Main Board 회원가입</button></NavLink>
        <div className="join-line"></div>
        <button onClick={onKaKaoHandler} className="kakao-login"> 카카오 계정으로 회원가입</button>
        <NavLink to="/login"> 이미 회원이신가요? 로그인 </NavLink>
      </div>
    </div>
  );
}

export default Join;
