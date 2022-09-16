import "../style.css";

function Join(){

    return(
        <div className="join-container">
            <div className="join_title"><p>회원가입</p></div>
            <div className="join_mainboard">
                <button >Main Board 회원가입</button>
                <div className="join_line"></div>
                <button className="kakao_login"> 카카오 계정으로 회원가입</button>
                {/* <div className="join_link">  */}
                <a href="/"> 이미 회원이신가요? 로그인 </a></div>
            {/* </div> */}
            
        </div>
    )

}

export default Join;