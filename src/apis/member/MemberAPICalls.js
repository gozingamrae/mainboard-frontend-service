import {
    GET_MEMBER
  , POST_LOGIN
  , POST_REGISTER
} from '../../modules/userModules/memberAPIModule';


export const callRegisterAPI = ({form}) => {
    const requestURL = `http://localhost:8080/auth/join`;
    console.log(requestURL+"21312");
    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            },
            body: JSON.stringify({
                memberId: form.memberId,
                memberPwd: form.memberPwd,
                memberName: form.memberName,
                email: form.email,
                phone: form.phone                
            })
        })
        .then(response => response.json());

        console.log('[MemberAPICalls] callRegisterAPI RESULT : ', result);        
        
        if(result.status === 201){
            dispatch({ type: POST_REGISTER,  payload: result });
        }        
    };
}