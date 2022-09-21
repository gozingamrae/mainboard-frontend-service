import "../style.css";

function ChangePw() {
  return (
    <div className="find">
      <div className="find-title">
        <p>비밀번호 변경하기</p>
      </div>

      <form className="find-form find-pwd">
        <div className="find-input">
          <input
            type="password"
            name="password"
            placeholder="새 비밀번호"
          ></input>
        </div>
        <div className="find-input">
          <input
            type="password"
            name="password2"
            placeholder="새 비밀번호 확인"
          ></input>
        </div>
        <div className="agreement-btns input-submit">
          <input type="submit" value="다음" />
        </div>
      </form>
    </div>
  );
}

export default ChangePw;
