import axios from "axios";
import { createActions, handleActions } from "redux-actions";

const initialState = [
  {
    isOpen1: false,
    isOpen2: false,
  },
];

export const SET_MODAL1 = "modal/SET_MODAL1";
export const SET_MODAL2 = "modal/SET_MODAL2";

const actions = createActions({
  [SET_MODAL1]: () => {},
  [SET_MODAL2]: () => {},
});

export const modalReducer = handleActions(
  {
    [SET_MODAL1]: (state, { payload }) => {
      state.isOpen1 = !state.isOpen1;

      return { ...state };
    },
    [SET_MODAL2]: (state, { payload }) => {
      state.isOpen2 = !state.isOpen2;

      return { ...state };
    },
  },
  initialState[0]
);
