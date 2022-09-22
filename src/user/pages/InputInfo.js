import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { INPUT_INFO } from "../../modules/userModules/userModule";
import "../style.css";

function InputInfo() {

  const user = useSelector(state => state.agreementReducer); 
  const dispatch = useDispatch();
  let passwordConfirm = ""

  const onChangeHandler = (e) => {
    dispatch({
      type: INPUT_INFO,
      payload: {
        name: e.target.name,
        value: e.target.value
      }
    });  
    console.log(user);
  }

  // useEffect(
  //   () => {
  //     console.log(user.password1)
  //     if(user.password1 === user.password2) passwordConfirm = "비밀번호가 일치합니다 !"
  //     if(user.password1 !== user.password2) passwordConfirm = "비밀번호가 일치하지 않습니다. !"
  // },[user.password1, user.password2]
  // )


  return (
    <div className="input-info">
      <div className="agreement-header">
        <div className="agreement-title">회원가입</div>
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
          <input type="text" name="userId" id="userId" onChange={ onChangeHandler } required />
        </div>
        <div className="join-input">
          <label>* 비밀번호 </label>
          <input type="password" name="password1" id="password1"  onChange={ onChangeHandler } required />
        </div>
        <div className="join-input">
          <label>* 비밀번호 </label>
          <input type="password" name="password2" id="password2" onChange={ onChangeHandler } required />
          <span> { passwordConfirm }</span>
        </div>
        <div className="join-input">
          <label>* 이름 </label>
          <input type="text" name="name" id="name" onChange={ onChangeHandler } required />
        </div>
        <div className="join-input">
          <label>* 이메일 </label>
          <input type="text" name="mail" id="mail" onChange={ onChangeHandler } required />
        </div>
        <div className="join-input">
          <label>* 전화번호 </label>
          <input type="text" name="phone" id="phone" onChange={ onChangeHandler } required />
          <br />
        </div>
        <div className="join-input">
          <label> 생년월일 </label>
          <input type="date" name="birth" id="birth" onChange={ onChangeHandler } />
          <br />
        </div>
        <div className="join-input">
          <label> 성별 </label>
          <select name="gender" id="gender" onChange={ onChangeHandler }>
            <option value="male">남</option>
            <option value="female">여</option>
          </select>
          <br />
        </div>
        <div className="join-input">
          <label> 직업 </label>
          <input type="text" name="job" id="job" onChange={ onChangeHandler } />
          <br />
        </div>
        <div className="agreement-btns input-submit">
          <button> 이전 단계 </button>
          <input type="submit" value="다음 단계" />
        </div>
      </form>
    </div>
  );
}

export default InputInfo;
