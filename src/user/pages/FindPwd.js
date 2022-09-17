import "../style.css";

function FindPwd(){
    return (
        <div className="find">

            <div className="find-title"><p>비밀번호 찾기</p></div>
            <div className="find-sub">
                <div className="find-subtitle"> 아이디 입력 </div>
            </div>
            <div className="find-sub">
                <p>비밀번호를 찾고자 하는 아이디를 입력해주세요.</p>
            </div>

            <form className="find-form find-pwd">
                <div className="find-input">
                <input type="text" name="id" placeholder="아이디 입력"></input>
                </div>
                <a href="/"> 아이디를 모르시나요? 아이디 찾기</a>
                <div className="agreement-btns input-submit">
                    <input type="submit" value="다음"/> 
                </div>
            </form>
        </div>
    )
}

export default FindPwd;