import "../css/style.css";

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { decodeJwt } from '../../utils/tokenUtils';
import { callGetMemberAPI, callUpdateAPI } from "../../apis/member/MemberAPICalls"
import { NavLink } from "react-router-dom";
import { callDeleteAPI  } from "../../apis/member/MemberAPICalls";


function Unregist() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = decodeJwt(window.localStorage.getItem('accessToken'));

  const onClickDeleteHandler = (e) => {
    
    if(window.confirm("회원 탈퇴를 진행하시겠습니까?")){
      dispatch(callDeleteAPI());
    }
  }


  return (
    <div className="mypage-contents"> 
        <h1> 회원 탈퇴 </h1>
        <div className="edit-form">
            <h1> 회원 탈퇴 안내 </h1>
            <p>
            회원탈퇴를 신청하기 전에 안내 사항을 꼭 확인해주세요.<br/>

            사용하고 계신 아이디는 탈퇴할 경우 재사용 및 복구가 불가능합니다.<br/>
            탈퇴한 아이디는 본인과 타인 모두 재사용 및 복구가 불가하오니 신중하게 선택하시기 바랍니다.<br/>

            탈퇴 후 회원정보 및 개인형 서비스 이용기록은 모두 삭제됩니다.<br/>
            회원정보 및 메일, 블로그, 주소록 등 개인형 서비스 이용기록은 모두 삭제되며, 삭제된 데이터는 복구되지 않습니다.<br/>
            삭제되는 내용을 확인하시고 필요한 데이터는 미리 백업을 해주세요.<br/>
            </p>
            <div className="agreement-btns input-submit">
            <button onClick={onClickDeleteHandler}> 탈퇴하기  </button>
            </div>
        </div>
        
    </div>
  );
}

export default Unregist;
