import "../style.css";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { INPUT_INFO } from "../../modules/memberModules/memberFindIdModule";
import { callGetMemberIdAPI } from "../../apis/member/MemberAPICalls";
import { useNavigate } from 'react-router-dom';

function FindId() {

  const member = useSelector(state => state.findReducer); 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
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

  const onClickSubmitHandler = (e) => {
    
    let body = {
      memberName: member[0].memberName,
      phone: member[0].phone
    }
    console.log(member);
    dispatch(callGetMemberIdAPI({
      form: body
    }));
    navigate("/findid/result");
  }

  return (
    <div className="find">
      <div className="find-title">
        <p>아이디 찾기</p>
      </div>
      <div className="find-form">
        <div className="find-input">
          <input type="text" name="memberName" placeholder="이름" onChange={onChangeHandler}></input>
          <br />
          <input type="text" name="phone" placeholder="가입 전화번호" onChange={onChangeHandler}></input>
          <br />
        </div>
        <input
          className="find-submit"
          type="submit"
          name="find"
          value="아이디 찾기"
        onClick={onClickSubmitHandler} ></input>
      </div>
      <div className="agreement-btns input-submit">
        <NavLink to="/findpw"> <button> 비밀번호 찾기 </button></NavLink>
        <NavLink to="/login"><button> 로그인 하기 </button></NavLink>
      </div>
    </div>
  );
}

export default FindId;
