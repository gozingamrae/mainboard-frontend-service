import { createActions, handleActions } from 'redux-actions';

const initialState = [];

export const GET_MEMBER     = 'member/GET_MEMBER';
export const POST_LOGIN     = 'member/POST_LOGIN';
export const POST_REGISTER  = 'member/POST_REGISTER';
export const DELETE_TOKEN  = 'member/DELETE_TOKEN';

const actions = createActions({
    [GET_MEMBER]: () => {},
    [POST_LOGIN]: () => {},
    [POST_REGISTER]: () => {},
    [DELETE_TOKEN]: () => {}
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
        }
    },
    initialState
);

export default memberAPIReducer;