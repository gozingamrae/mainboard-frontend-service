import {
    GET_MEMBER
  , POST_LOGIN
  , POST_REGISTER
  , POST_KAKAOLOGIN
} from '../../modules/memberModules/memberAPIModule';


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


export const callKakaoLoginAPI = () => {
    // const requestURL =  `http://localhost:8080/oauth/kakaoAPICall`;
    const requestURL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=dec28fd3dd5d81e0b10184358994c44c&redirect_uri=http://localhost:8080/oauth/kakao`;
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