import { createActions, handleActions } from "redux-actions";

const initialState = [
  {
    default: true,
  },
];

export const DEFAULT = "default/DEFAULT";

const actions = createActions({
  [DEFAULT]: () => {},
});

export const defaultReducer = handleActions(
  {
    [DEFAULT]: (state, { payload }) => {
      return state;
    },
  },
  initialState[0]
);
