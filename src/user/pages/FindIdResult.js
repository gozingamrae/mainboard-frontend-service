import "../style.css";

function FindIdResult(){
    
    const name = "이유리"; 
    const id = "xxxxxxxxxxxxxxxx";
    return (
        <div className="result-container">
            <div className="id-result">
                {name}님의 아이디는 {id} 입니다. 
            </div>
            <div className="user-content">
                <a href="/"> 비밀번호 찾기</a>
                <a href="/"> 지금 로그인하기  </a>
            </div>
        </div>
    )
}

export default FindIdResult;