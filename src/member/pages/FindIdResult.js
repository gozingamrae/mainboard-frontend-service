import "../style.css";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function FindIdResult() {


  const member = useSelector(state => state.findReducer); 

  const dispatch = useDispatch();
  console.log(member);

  return (
    <div className="result-container">
      <div className="id-result">
        {member[0].memberName}님의 아이디는 {member[0].memberId} 입니다.
      </div>
      <div className="user-content">
        <a href="/"> 비밀번호 찾기</a>
        <a href="/"> 지금 로그인하기 </a>
      </div>
    </div>
  );
}

export default FindIdResult;
