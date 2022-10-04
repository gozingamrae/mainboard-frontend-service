import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CHECK_ALL, CHECK_USE,CHECK_MARKETING, CHECK_PRIVACY } from "../../modules/memberModules/memberModule";
import "../style.css";
import { NavLink } from "react-router-dom";

function Agreement() {

  const checkAll = useSelector( state => state.agreementReducer.all_status)
  const checkUse = useSelector( state => state.agreementReducer.use_status)
  const checkPrivacy = useSelector( state => state.agreementReducer.privacy_status)
  const checkMarketing = useSelector( state => state.agreementReducer.marketing_status)

  console.log(checkAll, checkUse, checkPrivacy, checkMarketing)

  const dispatch = useDispatch();

  const allHandler = (e) => {
    if(checkAll === checkUse) dispatch({type: CHECK_USE, payload: e.target.value});
    if(checkAll === checkPrivacy) dispatch({type: CHECK_PRIVACY, payload: e.target.value});
    if(checkAll === checkMarketing) dispatch({type: CHECK_MARKETING, payload: e.target.value});
    dispatch({type: CHECK_ALL, payload: e.target.value});
  }
  const useHandler = (e) => {
   dispatch({type: CHECK_USE, payload: e.target.value});
     console.log(checkUse); 
  }
 
 const privacyHandler = (e) => {
    dispatch({type: CHECK_PRIVACY, payload: e.target.value});
  console.log(checkPrivacy); 
}


const marketingHandler = (e) => {
   dispatch({type: CHECK_MARKETING, payload: e.target.value});
  console.log(checkMarketing); 
}

useEffect(
    () => {
      if(checkAll === true && (checkUse === false || checkPrivacy === false || checkMarketing === false)) dispatch({type:CHECK_ALL})
      if(checkAll !== true && (checkUse === true && checkPrivacy === true && checkMarketing === true)) dispatch({type:CHECK_ALL})
  },[checkUse, checkPrivacy, checkMarketing]
)


  return (
    <div className="agreement">
      <div className="agreement-header">
        <div className="agreement-title">회원가입</div>
        <div className="agreement-step">
          <div className="agreement-step-content step-active"> 01 약관동의</div>
          &nbsp; &gt; &nbsp;
          <div className="agreement-step-content"> 02 정보입력</div>
          &nbsp; &gt; &nbsp;
          <div className="agreement-step-content"> 03 가입완료</div>
        </div>
      </div>
      <div className="agreement-body">
        <div className="agreement-title">약관동의</div>
      </div>
      <div className="agreement-content">
        <form method="post" action="">
            <div className="agreement-form">
                <div className="agreement-form-all">
                  <div className="agreement-form-checkandlabel">
                  <input className="agreement-checkbox" type="checkBox" id="check-all" checked={checkAll} onChange={allHandler} />
                  <label> MainBoard의 모든 약관을 확인하고 전체 동의합니다. </label> <span className="lable-small"> (전체동의, 선택항목도 포함됩니다.) </span>
                  </div>
                </div>
                <div className="agreement-form-part">
                <div className="agreement-form-checkandlabel">
                  <input className="agreement-checkbox" type="checkBox" id="check-use" checked={checkUse} onChange={useHandler}/>
                  <span>(필수)</span><label>이용약관 </label>
                  </div>
                  <textarea name="" id="" disabled>여러분을 환영합니다.네이버 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한 네이버 서비스의 이용과 관련하여 네이버 서비스를 제공하는 네이버 주식회사(이하 ‘네이버’)와 이를 이용하는 네이버 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러 여러분의 네이버 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.       </textarea>
                </div>
                <div className="agreement-form-part">
                  <div className="agreement-form-checkandlabel">
                  <input className="agreement-checkbox" type="checkBox" id="check-privacy" checked={checkPrivacy} onChange={privacyHandler}/>
                  <span>(필수)</span><label>개인정보 수집 및 이용 동의 </label>
                  </div>
                  <textarea name="" id="" disabled>여러분을 환영합니다.네이버 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한 네이버 서비스의 이용과 관련하여 네이버 서비스를 제공하는 네이버 주식회사(이하 ‘네이버’)와 이를 이용하는 네이버 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러 여러분의 네이버 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.       </textarea>
                </div>
                <div className="agreement-form-part">
                <div className="agreement-form-checkandlabel">
                  <input className="agreement-checkbox" type="checkBox" id="check-marketing" checked={checkMarketing} onChange={marketingHandler}/>
                  <span>(선택)</span><label> 마케팅 정보 제공 동의 </label>
                  </div>
                  <textarea name="" id="" disabled>여러분을 환영합니다.네이버 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한 네이버 서비스의 이용과 관련하여 네이버 서비스를 제공하는 네이버 주식회사(이하 ‘네이버’)와 이를 이용하는 네이버 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러 여러분의 네이버 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.       </textarea>
                </div>


            </div>
        </form>

      </div>
      <div className="agreement-body">
        <div className="agreement-title">본인 인증 방법 선택</div>
      </div>
      <button className="agreement-auth"> 휴대폰 본인 인증</button>
      <div className="agreement-btns">
        <button > 이전 단계 </button>
        <NavLink to="/join/inputinfo"> <button> 다음 단계 </button> </NavLink>
      </div>
    </div>
  );
}

export default Agreement;
