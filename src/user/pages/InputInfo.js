import "../style.css";

function InputInfo(){


    return (
        <div className="input-info">
                    <div className="agreement-header">
            <div className="agreement-title">
                회원가입
            </div>
            <div className="agreement-step">
                <div className="agreement-step-content"> 01 약관동의</div>
                &nbsp; &gt; &nbsp;
                <div className="agreement-step-content step-active"> 02 정보입력</div>
                &nbsp; &gt; &nbsp;
                <div className="agreement-step-content"> 03 가입완료</div>
            </div>
        </div>
            <div className="agreement-body"> 
                <div className="agreement-title">정보입력</div>
            </div>    
            <form className="join-form">
                <div className="join-input">
                    <label>* 아이디 </label>
                    <input type="text" name="userId" id="userId" required/>
                </div>
                <div className="join-input">
                    <label>* 비밀번호 </label>
                    <input type="password"  name="password1" id="password1" required/>
                </div>
                <div className="join-input">
                    <label>* 비밀번호 </label>
                    <input type="password" name="password2" id="password2" required/>
                </div>
                <div className="join-input">
                    <label>* 이름 </label>
                    <input type="text" name="name" id="name" required/>
                </div>
                <div className="join-input">
                    <label>* 이메일 </label>
                    <input type="text" name="mail" id="mail" required/>
                </div>
                <div className="join-input">
                    <label>* 전화번호 </label>
                    <input type="text" name="phone" id="phone" required/><br/>
                </div>
                <div className="join-input">
                    <label> 생년월일 </label>
                    <input type="date" name="birth" id="birth" /><br/>
                </div>
                <div className="agreement-btns input-submit">
                    <button> 이전 단계 </button>
                    <input type="submit" value="다음 단계"/> 
                </div>
            </form>


        </div>
    ); 
}

export default InputInfo;