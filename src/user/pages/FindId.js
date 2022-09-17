import "../style.css";

function FindId(){
    return(
        <div className="find">

            <div className="find-title"><p>아이디 찾기</p></div>
            <form className="find-form">
                <div className="find-input">
                
                <input type="text" name="name" placeholder="이름"></input><br/>
                <input type="text" name="phone" placeholder="가입 전화번호"></input><br/>
                </div>
                <input className="find-submit" type="submit" name="find" value="아이디 찾기" ></input>
            </form>
                <div className="agreement-btns input-submit">
                <button> 비밀번호 찾기 </button>
                <button> 로그인 하기 </button> 
            </div>
        </div>

    )
}

export default FindId;