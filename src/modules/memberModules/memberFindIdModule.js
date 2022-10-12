import { createActions, handleActions } from "redux-actions";

const initialState = [
    {
        memberId : '',
        memberName: '',
        phone: ''
    }
]

export const INPUT_INFO = "findid/INPUT_INFO"
export const GET_ID = "findid/GET_ID"

export const findReducer = handleActions(
    {
        [INPUT_INFO]: (state, { payload }) => {
            state[0][(payload.name)] = payload.value;
            return{
                ...state
            }
        },
        [GET_ID]: (state, { payload }) => {
            state[0].memberId = payload; 
            return { ...state };
        }
    },
    initialState
);

