import "../style.css";

function Login(){

    return (
        
        <div className="login">

            <div className="login_title"><p>로그인</p></div>
            <form className="login_form">
                <div className="login_input">
                
                <input type="text" name="id" placeholder="아이디"></input><br/>
                <input type="password" name="password" placeholder="비밀번호"></input><br/>
                <input type="checkbox" className="login_remember" name="remember" ></input>
                <label> 아이디 저장 </label>
                </div>
                <input className="login_submit" type="submit" name="login" value="로그인" ></input>
            </form>
            <div className="kakao">
                <button className="kakao_login"> 카카오 계정으로 로그인</button>
                <div className="login_line"></div>
            </div>
            <div className="loginpage_buttons">
                <button> 회원가입 </button>
                <button> 아이디 찾기 </button>
                <button> 비밀번호 찾기 </button>
            </div>
            </div>
    );
}

export default Login;