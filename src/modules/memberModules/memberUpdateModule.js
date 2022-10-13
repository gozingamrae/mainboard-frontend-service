import { createActions, handleActions } from "redux-actions";

const initialState = [
    {
        memberId : '',
        originPwd: '',
        memberPwd: '',
        memberPwd2: '',
        memberName: '',
        email: '',
        phone: '',
        birthDateTime: '',
        gender: '',
        job: ''
    }
]

export const UPDATE_INFO = 'member/UPDATE_INFO';
export const INIT_INFO = 'member/INIT_INFO';

export const memberUpdateReducer = handleActions(
    {
        [UPDATE_INFO]: (state, { payload }) => {
            state[0][(payload.name)] = payload.value;
            return{
                ...state
            }
        },
        [INIT_INFO]: (state, { payload }) => {  
            state[0].phone = payload.phone;
            state[0].job = payload.job;
            state[0].gender = payload.gender;
            state[0].birthDateTime = payload.birthDateTime;
            return {
                ...state
            }
        }
    },
    initialState
);

