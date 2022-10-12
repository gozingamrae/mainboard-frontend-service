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

export const memberUpdateReducer = handleActions(
    {
        [UPDATE_INFO]: (state, { payload }) => {
            state[0][(payload.name)] = payload.value;
            return{
                ...state
            }
        }
    },
    initialState
);

