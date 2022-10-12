import "../css/style.css";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { decodeJwt } from '../../utils/tokenUtils';
import { callGetMemberAPI } from "../../apis/member/MemberAPICalls"
import { NavLink } from "react-router-dom";
import { callUpdateAPI  } from "../../apis/member/MemberAPICalls";
import { UPDATE_INFO } from "../../modules/memberModules/memberUpdateModule";
import { callUpdatePwdAPI } from "../../apis/member/MemberAPICalls";

function EditProfile() {

  const dispatch = useDispatch(); 
  const navigate = useNavigate();
  const member = useSelector(state => state.memberAPIReducer); 
  const token = decodeJwt(window.localStorage.getItem('accessToken'));
  const memberDetail = member.data; 
  const updateMember = useSelector(state => state.memberUpdateReducer); 

  useEffect(
    ()=>{
      console.log('token: ' + token.sub);
      if(token != null){
        dispatch(callGetMemberAPI());
      }
    },[]
  )

  const onChangeHandler = (e) => {
    dispatch({
      type: UPDATE_INFO,
      payload: {
        name: e.target.name,
        value: e.target.value
      }
    });
    console.log(updateMember);
  }

  const onClickUpdateHandler = () => {
    
    let body = {
      memberId: token.sub,
      phone: updateMember[0].phone,
      gender: updateMember[0].gender,
      birthDateTime: updateMember[0].birthDateTime,
      job: updateMember[0].job
    }

    dispatch(callUpdateAPI({
      form: body
    }));

    if(updateMember.status == 200){
      navigate("/", { replace: true })
    }
  
  }

  const onClickUpdatePwdHandler = () => {
    let body = {
      memberId: token.sub,
      originPwd : updateMember[0].originPwd,
      memberPwd: updateMember[0].memberPwd
    }
  
    dispatch(callUpdatePwdAPI({
      form: body
    }));

    if(updateMember.status == 200){
      navigate("/", { replace: true })
    }
  }


  return (
    <div className="mypage-contents"> 
        <h1> 회원정보 변경</h1>
        <div className="edit-form">
            <h1> 기본정보 </h1>
            <div className="edit-input">
              <label> 이름 </label>
              <div className="user-info"> {memberDetail.memberName} </div>
            </div>
            <div className="edit-input">
              <label> 아이디 </label>
              <div className="user-info"> {token.sub} </div>
            </div>
            <div className="edit-input">
              <label> 이메일 </label>
              <div className="user-info"> {memberDetail.email} </div>
            </div>
            <div className="edit-input">
              <label> 핸드폰 번호 </label>
              <input type="text" name="phone" id="phone" value={updateMember.phone} onChange={ onChangeHandler }/>
            </div>
            <div className="edit-input">
              <label> 직업 </label>
              <input type="text" name="job" id="job"  value= {updateMember.job} onChange={ onChangeHandler } />
            </div>
            <div className="edit-input">
            <label> 생년월일 </label>
            <input type="date" name="birthDateTime" id="birthDateTime" value={updateMember.birthDateTime} onChange={ onChangeHandler } />
          <br />
            </div>
            <div className="edit-input">
            <label> 성별 </label>
          <select name="gender" id="gender" value={updateMember.gender} onChange={ onChangeHandler }>
            <option value="male">남</option>
            <option value="female">여</option>
          </select>
            </div>
            <div className="agreement-btns input-submit">
            <NavLink to="/"> <button> 취소  </button></NavLink>
            <button onClick = { onClickUpdateHandler }> 정보수정  </button>
          </div>
            <h1> 비밀번호 변경 </h1>
            <div className="edit-input">
              <label> 현재 비밀번호 </label>
              <input type="password" name="originPwd" id="originPwd" value={updateMember.originPwd}  onChange={ onChangeHandler } />
            </div>
            <div className="edit-input">
              <label> 새 비밀번호 </label>
              <input type="password" name="memberPwd" id="memberPwd" value={updateMember.memberPwd}  onChange={ onChangeHandler }/>
            </div>
            <div className="edit-input">
              <label> 새 비밀번호 확인 </label>
              <input type="password" name="memberPwd2" id="memberPwd2" value={updateMember.memberPwd2}  onChange={ onChangeHandler } />
            </div>
            <div className="agreement-btns input-submit">
            <NavLink to="/"> <button> 취소  </button></NavLink>
            <button onClick = { onClickUpdatePwdHandler }> 비밀번호 변경  </button>
          </div>
        </div>
    </div>
  );
}

export default EditProfile;
