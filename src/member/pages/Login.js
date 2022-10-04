import "../style.css";
import { NavLink } from "react-router-dom";
import { POST_LOGIN } from "../../modules/memberModules/memberAPIModule";
import { callLoginAPI } from "../../apis/member/MemberAPICalls";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react"; 
import { useSelector, useDispatch } from 'react-redux';

function Login() {

  const navigate = useNavigate(); 
  const dispatch = useDispatch();
  const member = useSelector(state => state.memberAPIReducer);
  const [form, setForm] = useState({
    memberId: '',
    memberPwd: '',
  });
  useEffect(() => {
        
    if(member.status === 200){
        console.log("[Login] Login SUCCESS {}", member);
        navigate("/", { replace: true });
    }
  }
  ,[member]);

  if(member.length > 0) {
      console.log("[Login] Login is already authenticated by the server");        
      return navigate("/", { replace: true });
  }

  const onChangeHandler = (e) => {
      setForm({
          ...form,
          [e.target.name]: e.target.value
      });
  };
    const onClickLoginHandler = () => { 
        dispatch(callLoginAPI({	
            form: form
        }));
    }
  
  return (
    <div className="login">
      <div className="login-title">
        <p>로그인</p>
      </div>
      <div className="login-form">
        <div className="login-input">
          <input type="text" name="memberId" placeholder="아이디" onChange={onChangeHandler}></input>
          <br/>
          <input type="password" name="memberPwd" placeholder="비밀번호" onChange={onChangeHandler}></input>
          <br />
          <input
            type="checkbox"
            className="login-remember"
            name="remember"
          ></input>
          <label> 아이디 저장 </label>
        </div>
        <button
          className="login-submit"
          type="submit"
          name="login"
          onClick={onClickLoginHandler}
        >로그인</button>
      </div>
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
