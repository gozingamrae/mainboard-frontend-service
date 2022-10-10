import { useEffect, useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { INPUT_INFO } from "../../modules/memberModules/memberModule";
import "../style.css";
import { NavLink } from "react-router-dom";
import { callRegisterAPI } from "../../apis/member/MemberAPICalls";

function InputInfo() {

  const member = useSelector(state => state.agreementReducer); 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const member1 = useSelector(state => state.memberAPIReducer);

  useEffect(() => {
    if(member1.status == 201){
      console.log("[Login] Register SUCCESS {}", member1);
      navigate("/join/result", { replace: true })
    }
  },
  [member1]);

  const onChangeHandler = (e) => {
    dispatch({
      type: INPUT_INFO,
      payload: {
        name: e.target.name,
        value: e.target.value
      }
    });
    console.log(member);
  }

  const onClickRegisterHandler = () => {
    
    let body = {
      memberId: member.memberId,
      memberPwd: member.memberPwd,
      memberName: member.memberName,
      email: member.email,
      phone: member.phone,
      gender: member.gender,
      birthDateTime: member.birthDateTime,
      job: member.job
    }

    dispatch(callRegisterAPI({
      form: body
    }));
  }

  useEffect(() => {
    if(member.memberPwd == member.memberPwd2) {
      dispatch({
        type: INPUT_INFO,
        payload: {

        }
      });
    }
    if(member.memberPwd != member.memberPwd2) {
      dispatch({
        type: INPUT_INFO,
        payload: {

        }
      });
    }
  }, [member.memberPwd, member.memberPwd2]);


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
      <div className="join-form">
        <div className="join-input">
          <label>* 아이디 </label>
          <input type="text" name="memberId" id="memberId" value={member.memberId} onChange={ onChangeHandler } required />
        </div>
        <div className="join-input">
          <label>* 비밀번호 </label>
          <input type="password" name="memberPwd" id="memberPwd" value={member.memberPwd} onChange={ onChangeHandler } required />
        </div>
        <div className="join-input">
          <label>* 비밀번호 </label>
          <input type="password" name="memberPwd2" id="memberPwd2" value={member.memberPwd2} onChange={ onChangeHandler } required />
          <span> { member.passwordConfirm } </span>
        </div>
        <div className="join-input">
          <label>* 이름 </label>
          <input type="text" name="memberName" id="memberName" value={member.memberName} onChange={ onChangeHandler } required />
        </div>
        <div className="join-input">
          <label>* 이메일 </label>
          <input type="text" name="email" id="email" value={member.email} onChange={ onChangeHandler } required />
        </div>
        <div className="join-input">
          <label>* 전화번호 </label>
          <input type="text" name="phone" id="phone" value={member.phone} onChange={ onChangeHandler } required />
          <br />
        </div>
        <div className="join-input">
          <label> 생년월일 </label>
          <input type="date" name="birthDateTime" id="birthDateTime" value={member.birthDateTime} onChange={ onChangeHandler } />
          <br />
        </div>
        <div className="join-input">
          <label> 성별 </label>
          <select name="gender" id="gender" onChange={ onChangeHandler } value={member.gender}>
            <option value="male">남</option>
            <option value="female">여</option>
          </select>
          <br />
        </div>
        <div className="join-input">
          <label> 직업 </label>
          <input type="text" name="job" id="job" onChange={ onChangeHandler } value={member.job} />
          <br />
        </div>
        <div className="agreement-btns input-submit">
          <button> 이전 단계 </button>
          <button onClick = { onClickRegisterHandler }> 다음단계  </button>
        </div>
      </div>
    </div>
  );
}

export default InputInfo;
