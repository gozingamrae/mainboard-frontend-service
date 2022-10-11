import { createActions, handleActions } from "redux-actions";

const initialState = [
    {
        all_status: false,
        use_status: false,
        privacy_status: false,
        marketing_status: false,
        cart_status: false,
        change_status: false,
    },
    {
        userId : '',
        password1: '',
        password2: '',
        name: '',
        mail: '',
        phone: '',
        birth: '',
        gender: '',
        job: ''
    }
]

export const CHECK_ALL = "agreement/CHECK_ALL"
export const CHECK_USE = "agreement/CHECK_USE"
export const CHECK_PRIVACY = "agreement/CHECK_PRIVACY"
export const CHECK_MARKETING = "agreement/CHECK_MARKETING"
export const INPUT_INFO = "join/INPUT_INFO"

export const CHECK_CART = "agreement/CHECK_CART"
export const CHECK_CHANGE = "agreement/CHECK_CHANGE"



export const agreementReducer = handleActions(
    {
        [CHECK_ALL]: (state, { payload }) => {
            state.all_status = !(state.all_status); 
            return { ...state };
        },
        [CHECK_USE]: (state, { payload }) => {
            console.log(payload)
            console.log(state.all_status)

            state.use_status = !(state.use_status); 
            console.log(state.all_status)
            return { ...state };
        },
        [CHECK_PRIVACY]: (state, { payload }) => {
            state.privacy_status = !(state.privacy_status); 
            return { ...state };
        },
        [CHECK_MARKETING]: (state, { payload }) => {
            state.marketing_status = !(state.marketing_status); 
            return { ...state };
        },
        [INPUT_INFO]: (state, { payload }) => {
            return{
                ...state,
                [payload.name] : payload.value
            }
        },

        [CHECK_CART]: (state, { payload }) => {
            state.marketing_status = !(state.marketing_status); 
            return { ...state,
                [payload.name] : payload.value
            };
        },

        [CHECK_CHANGE]: (state, { payload }) => {
            console.log(payload)
            if(payload == "check-all") {
                state.all_status = !(state.all_status); 
                console.log("전체")
            } else {
                state.change_status = !(state.change_status);
                console.log("상품")
            }
            
            return { ...state,
               
            };
        }
    },
    initialState
);

