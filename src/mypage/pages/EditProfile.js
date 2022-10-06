import "../css/style.css";

function EditProfile() {
  return (
    <div className="mypage-contents"> 
        <h1> 회원정보 변경</h1>
        <form className="edit-form">
            <h1> 기본정보 </h1>
            <div className="edit-input">
              <label> 이름 </label>
              <div className="user-info"> 이유리 </div>
            </div>
            <div className="edit-input">
              <label> 아이디 </label>
              <div className="user-info"> lyr426 </div>
            </div>
            <div className="edit-input">
              <label> 핸드폰 번호 </label>
              <input type="text" name="phone" id="phone" value="010-1234-1234" />
            </div>
            <div className="edit-input">
              <label> 직업 </label>
              <input type="text" name="job" id="job" value="학생"  />
            </div>
            <div className="edit-input">
              <label> 나이 </label>
              <div className="user-info"> 24 </div>
            </div>
            <div className="edit-input">
              <label> 성별 </label>
              <div className="user-info"> 여 </div>
            </div>

            <h1> 비밀번호 변경 </h1>
            <div className="edit-input">
              <label> 현재 비밀번호 </label>
              <input type="password" name="password" id="password1" />
            </div>
            <div className="edit-input">
              <label> 새 비밀번호 </label>
              <input type="password" name="password" id="password2" />
            </div>
            <div className="edit-input">
              <label> 새 비밀번호 확인 </label>
              <input type="password" name="password" id="password3" />
            </div>
            <div className="agreement-btns input-submit">
            <button> 취소  </button>
            <input type="submit" value="정보 수정 " />
          </div>
        </form>
    </div>
  );
}

export default EditProfile;
