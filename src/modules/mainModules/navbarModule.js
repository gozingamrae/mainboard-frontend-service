import { createActions, handleActions } from "redux-actions";

const initialState = [
  { status: false },
  {
    allProduct: false, // 전체 상품

    strategy: false, // 전략
    reasoning: false, // 추리
    mentality: false, // 심리
    collaboration: false, // 협동
    negotiation: false, // 협상
    speed: false, // 순발력
    team: false, // 팀전
    personal: false, // 개인전

    easy: false, // 쉬움
    medium: false, // 중간
    hard: false, // 어려움
    veryHard: false, // 매우 어려움

    interval1: false, // 30분 이하
    interval2: false, // 30분~1시간
    interval3: false, // 1시간~2시간
    interval4: false, // 2시간~3시간
    interval5: false, // 3시간 이상
  },
];

export const ON_NAVBAR = "navbar/ON_NAVBAR";
export const OFF_NAVBAR = "navbar/OFF_NAVBAR";
export const USE_FILTER = "navbar/USE_FILTER";

const actions = createActions({
  [ON_NAVBAR]: () => {},
  [OFF_NAVBAR]: () => {},
  [USE_FILTER]: () => {},
});

export const navbarReducer = handleActions(
  {
    [ON_NAVBAR]: (state, { payload }) => {
      state.status = true;
      return { ...state };
    },
    [OFF_NAVBAR]: (state, { payload }) => {
      state.status = false;
      return { ...state };
    },
  },
  initialState[0]
);

export const hiddenNavbarReducer = handleActions(
  {
    [USE_FILTER]: (state, { payload }) => {
      return state;
    },
  },
  initialState[1]
);
