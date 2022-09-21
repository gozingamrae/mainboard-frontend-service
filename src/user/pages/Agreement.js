import "../style.css";

function Agreement() {
  return (
    <div className="agreement">
      <div className="agreement-header">
        <div className="agreement-title">회원가입</div>
        <div className="agreement-step">
          <div className="agreement-step-content step-active"> 01 약관동의</div>
          &nbsp; &gt; &nbsp;
          <div className="agreement-step-content"> 02 약관동의</div>
          &nbsp; &gt; &nbsp;
          <div className="agreement-step-content"> 03 약관동의</div>
        </div>
      </div>
      <div className="agreement-body">
        <div className="agreement-title">약관동의</div>
      </div>
      <div className="agreement-content"></div>
      <div className="agreement-body">
        <div className="agreement-title">본인 인증 방법 선택</div>
      </div>
      <button className="agreement-auth"> 휴대폰 본인 인증</button>
      <div className="agreement-btns">
        <button> 이전 단계 </button>
        <button> 다음 단계 </button>
      </div>
    </div>
  );
}

export default Agreement;
