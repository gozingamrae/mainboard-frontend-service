import {
    GET_MEMBER
  , POST_LOGIN
  , POST_REGISTER
  , POST_KAKAOLOGIN
  , PUT_MEMBER
  , DELETE_MEMBER
  , PUT_PWD
} from '../../modules/memberModules/memberAPIModule';

import {
    GET_ID
} from '../../modules/memberModules/memberFindIdModule';


export const callGetMemberAPI = () => {
    const requestURL = `http://localhost:8080/members`;

    return async (dispatch, getState) => {
        const result = await fetch(requestURL,{
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                "Access-Control-Allow-Origin": "*",
                "accessToken": window.localStorage.getItem('accessToken')
            }
        })
        .then(res => res.json());
        
        console.log('[MemberAPICalls] callGetMemberAPI RESULT : ', result);
        
        dispatch({ type: GET_MEMBER,  payload: result });
    };
}


export const callRegisterAPI = ({form}) => {

    const requestURL = `http://localhost:8080/auth/join`;
    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Access-Control-Allow-Origin": "*"    
            },
            body: JSON.stringify({
                memberId: form.memberId,
                memberPwd: form.memberPwd,
                memberName: form.memberName,
                email: form.email,
                phone: form.phone,
                gender: form.gender,
                birthDateTime: form.birthDateTime,
                job: form.job        
            })
        })
        .then(response => response.json());

        console.log('[MemberAPICalls] callRegisterAPI RESULT : ', result);        
        
        if(result.status === 500){
            alert(result.message);
        }
        if(result.status === 201){
            dispatch({ type: POST_REGISTER,  payload: result });
        }        
    };
}

export const callLoginAPI = ({form}) => {
    const requestURL = `http://localhost:8080/auth/login`;
    console.log(requestURL);
    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Access-Control-Allow-Origin": "*"    
            },
            body: JSON.stringify({
                memberId: form.memberId,
                memberPwd: form.memberPwd             
            })
        })
        .then(response => response.json());

        console.log('[MemberAPICalls] callRegisterAPI RESULT : ', result);   

        if(result.status === 500){
            alert(result.message);
        }
        if(result.status === 200){
            window.localStorage.setItem('accessToken', result.data.accessToken);            
        }
        dispatch({ type: POST_LOGIN,  payload: result });   
    };
}

export const callUpdateAPI = ({form}) => {
    const requestURL = `http://localhost:8080/members/update`;
    console.log(requestURL);
    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Access-Control-Allow-Origin": "*"    
            },
            body: JSON.stringify({
                memberId: form.memberId,
                phone: form.phone,
                job: form.job,
                birthDateTime: form.birthDateTime,
                gender: form.gender
            })
        })
        .then(response => response.json());

        console.log('[MemberAPICalls] callUpdateAPI RESULT : ', result);   

        if(result.status === 500){
            alert(result.message);
        }       
        if(result.status === 200){
           alert(result.message);          
        }
        dispatch({ type: PUT_MEMBER,  payload: result });   
    };
}


export const callUpdatePwdAPI = ({form}) => {
    const requestURL = `http://localhost:8080/members/changePwd`;
    console.log(requestURL);
    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Access-Control-Allow-Origin": "*"    
            },
            body: JSON.stringify({
                memberId: form.memberId,
                originPwd: form.originPwd,
                memberPwd: form.memberPwd
            })
        })
        .then(response => response.json());

        console.log('[MemberAPICalls] callUpdateAPI RESULT : ', result);   

        if(result.status === 500){
            alert(result.message);
        }       
        if(result.status === 200){
           alert(result.message);          
        }
        dispatch({ type: PUT_PWD,  payload: result });   
    };
}


export const callDeleteAPI = ({memberId}) => {
    const requestURL = `http://localhost:8080/members/delete`;

    return async (dispatch, getState) => {
        const result = await fetch(requestURL,{
            method: 'delete',
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                "Access-Control-Allow-Origin": "*",
                "accessToken": window.localStorage.getItem('accessToken')
            }
        })
        .then(res => res.json());
        
        console.log('[MemberAPICalls] callDeleteAPI RESULT : ', result);

        if(result.status === 200){
            alert(result.message);          
        }
        window.localStorage.setItem("accessToken",null);
        window.location.reload();

        dispatch({ type: DELETE_MEMBER,  payload: result });
    };
}

export const callGetMemberIdAPI = ({form}) => {
    const requestURL = `http://localhost:8080/members/findId`;

    return async (dispatch, getState) => {
        const result = await fetch(requestURL,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
                memberName: form.memberName,
                phone: form.phone
            })
        })
        .then(res => res.json());
        
        console.log('[MemberAPICalls] callGetMemberIdAPI RESULT : ', result);
        
        if(result.data == null || result.data == undefined){
            alert('조회된 회원정보가 없습니다.');
        }

        console.log(result.data);
        dispatch({ type: GET_ID,  payload: result.data });
    };
}


export const callKakaoLoginAPI = () => {
   const requestURL =  `http://localhost:8080/oauth/kakaoAPICall`;
    // const requestURL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=dec28fd3dd5d81e0b10184358994c44c&redirect_uri=http://localhost:8080/oauth/kakao`;
    console.log(requestURL);
    return async (dispatch, getState) => {

        const result = await fetch(requestURL,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Access-Control-Allow-Origin": "*"    
            },
        })
        .then(response => response.json());

        console.log('[KAKAO Login APICalls] callRegisterAPI RESULT : ', result);        
        if(result.status === 200){
            window.localStorage.setItem('accessToken', result.data.accessToken);            
        }

        dispatch({ type: POST_LOGIN,  payload: result });   
    };
}