import { createActions, handleActions } from 'redux-actions';

const initialState = [{
    order: [],
    option: "",
    text: "",
}
];

export const SEARCH_ORDER = "searchOrder/SEARCHORDER";
export const SEARCH_OPTION = "searchOption/SEARCHOPTION";
export const SEARCH_TEXT = "searchText/SEARCHTEXT";

export const actions = createActions({

    [SEARCH_ORDER]: () => {},
    [SEARCH_OPTION]: () => {},
    [SEARCH_TEXT]: () => {},
})

const orderSearchReducer = handleActions(
    {

        [SEARCH_ORDER]: (state, {payload}) =>{
            state.order = payload;
            console.log(state.order);
            return {...state};
        },
        [SEARCH_OPTION]: (state, {payload}) => {
            state.option = payload;
            return {...state};
        },
        [SEARCH_TEXT]: (state, {payload}) => {
            state.text = payload;
            return  {...state};
        }
    },
    initialState
);

export default orderSearchReducer;
