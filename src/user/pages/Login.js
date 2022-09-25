import "../style.css";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <div className="login-title">
        <p>로그인</p>
      </div>
      <form className="login-form">
        <div className="login-input">
          <input type="text" name="id" placeholder="아이디"></input>
          <br />
          <input type="password" name="password" placeholder="비밀번호"></input>
          <br />
          <input
            type="checkbox"
            className="login-remember"
            name="remember"
          ></input>
          <label> 아이디 저장 </label>
        </div>
        <input
          className="login-submit"
          type="submit"
          name="login"
          value="로그인"
        ></input>
      </form>
      <div className="kakao">
        <button className="kakao-login"> 카카오 계정으로 로그인</button>
        <div className="login-line"></div>
      </div>
      <div className="loginpage-buttons">
        <NavLink to="/join"><button className="loginpage-button"> 회원가입 </button> </NavLink>
        <NavLink to="/findid"><button className="loginpage-button"> 아이디 찾기 </button> </NavLink>
        <NavLink to="/findpw"><button className="loginpage-button"> 비밀번호 찾기 </button> </NavLink>
      </div>
    </div>
  );
}

export default Login;
