import { createActions, handleActions } from "redux-actions";

const initialState = [
    {
        all_status: false,
        use_status: false,
        privacy_status: false,
        marketing_status: false
    }
]

export const CHECK_ALL = "agreement/CHECK_ALL"
export const CHECK_USE = "agreement/CHECK_USE"
export const CHECK_PRIVACY = "agreement/CHECK_PRIVACY"
export const CHECK_MARKETING = "agreement/CHECK_MARKETING"


export const agreementReducer = handleActions(
    {
        [CHECK_ALL]: (state, { payload }) => {
            state.all_status = !(state.all_status); 
            return { ...state };
        },
        [CHECK_USE]: (state, { payload }) => {
            state.use_status = !(state.use_status); 
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
        
    },
    initialState
);

