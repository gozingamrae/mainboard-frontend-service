import "../style.css";

function Join(){

    return(
        <div className="join-container">
            <div className="join-title"><p>회원가입</p></div>
            <div className="join-mainboard">
                <button >Main Board 회원가입</button>
                <div className="join-line"></div>
                <button className="kakao-login"> 카카오 계정으로 회원가입</button>
                <a href="/"> 이미 회원이신가요? 로그인 </a></div>
            
        </div>
    )

}

export default Join;