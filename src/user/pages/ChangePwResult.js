import "../style.css";

function changePwResult() {
  return (
    <div className="result-container">
      <div className="id-result">비밀번호 변경이 완료되었습니다</div>
      <div className="user-content">
        <a href="/"> 지금 로그인하기 </a>
        <a href="/"> 메인 페이지로 </a>
      </div>
    </div>
  );
}

export default changePwResult;
