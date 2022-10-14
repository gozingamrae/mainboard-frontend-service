import { createActions, handleActions } from "redux-actions";

const initialState = [
  { status: false },
  {
    all: {
      all: false, // 전체 상품
    },
    theme: {
      strategy: false, // 전략
      reasoning: false, // 추리
      mentality: false, // 심리
      collaboration: false, // 협동
      negotiation: false, // 협상
      speed: false, // 순발력
      team: false, // 팀전
      personal: false, // 개인전
    },
    level: {
      easy: false, // 쉬움
      medium: false, // 중간
      hard: false, // 어려움
      veryHard: false, // 매우 어려움
    },
    time: {
      interval1: false, // 30분 이하
      interval2: false, // 30분~1시간
      interval3: false, // 1시간~2시간
      interval4: false, // 2시간~3시간
      interval5: false, // 3시간 이상
    },
  },
];

export const ON_NAVBAR = "navbar/ON_NAVBAR";
export const OFF_NAVBAR = "navbar/OFF_NAVBAR";
export const SET_FILTER = "navbar/SET_FILTER";
export const OFF_FILTER = "navbar/OFF_FLITER";

const actions = createActions({
  [ON_NAVBAR]: () => {},
  [OFF_NAVBAR]: () => {},
  [SET_FILTER]: () => {},
  [OFF_FILTER]: () => {},
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
    [SET_FILTER]: (state, { payload }) => {
      state[payload] = !state[payload];
      console.log("키값 :", Object.keys(state));

      // 전체 상품 선택 시 나머지 필터 해제,
      // 나머지 필터 선택 시 전체 상품 필터 해제
      if (payload == "all") {
        Object.keys(state).map((key) => {
          Object.keys(state.key).map((childKey) => {
            state.key.childKey = false;
          });
        });
        state.payload.payload = true;
      } else if (payload != "all") {
        state["all"] = false;
      }

      return { ...state };
    },
    [OFF_FILTER]: (state, { payload }) => {
      Object.keys(state).map((key) => {
        state[key] = false;
      });

      return { ...state };
    },
  },
  initialState[1]
);
