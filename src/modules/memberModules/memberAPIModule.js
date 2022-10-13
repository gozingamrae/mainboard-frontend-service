import { createActions, handleActions } from 'redux-actions';

const initialState = []

export const GET_MEMBER     = 'member/GET_MEMBER';
export const POST_LOGIN     = 'member/POST_LOGIN';
export const POST_REGISTER  = 'member/POST_REGISTER';
export const DELETE_TOKEN  = 'member/DELETE_TOKEN';
export const PUT_MEMBER = 'member/PUT_MEMBER';
export const DELETE_MEMBER = 'member/DELETE_MEMBER';
export const GET_ID = 'member/GET_ID';
export const PUT_PWD = 'member/PUT_PWD';

const actions = createActions({
    [GET_MEMBER]: () => {},
    [POST_LOGIN]: () => {},
    [POST_REGISTER]: () => {},
    [DELETE_TOKEN]: () => {},
    [PUT_MEMBER]: () => {},
    [DELETE_MEMBER]: () => {},
    [PUT_PWD] : () => {}
});
export const memberAPIReducer = handleActions(
    {
        [GET_MEMBER]: (state, { payload }) => {
            return payload;
        },
        [POST_LOGIN]: (state, { payload }) => {
            
            return payload;
        },
        [POST_REGISTER]: (state, { payload }) => {
            
            return payload;
        },
        [DELETE_TOKEN] : (state, { payload }) => {
            state = null; 
            return state;
        },
        [PUT_MEMBER] : (state, { payload }) => {
            return state;
        },
        [DELETE_MEMBER]: (state, { payload }) => {
            state = null;
            return state;
        },
        [PUT_PWD]: (state, { payload }) => {
            return state;
        }
    },
    initialState
);

export default memberAPIReducer;