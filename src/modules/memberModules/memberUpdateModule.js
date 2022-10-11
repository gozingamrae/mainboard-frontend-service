import { createActions, handleActions } from "redux-actions";

const initialState = [
    
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

