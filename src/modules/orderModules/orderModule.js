import { handleActions } from "redux-actions";

const initialState = [
  {
    //useState에서 값을 저장하는 변수.
    //ex) const [subPrice, setSubPrice] = useState();에서 subPrice
    subPrice: 0,
  },
  {
    emailId: "",
  },
  {
    emailDomain: "",
  },
  {
    email: "",
  },
];

//useState에서 state값을 변경해 주는 함수명
//ex) const [subPrice, setSubPrice] = useState();에서 setSubPrice
export const SUBPRICE = "subprice/SUBPRICE";
export const EMAILID = "emailId/EMAILID";
export const EMAILDOMAIN = "emailDomain/EMAILDOMAIN";
export const EMAIL = "email/EMAIL";

export const subPriceReducer = handleActions(
  {
    //생성한 액션의 행위를 작성해줌.
    //첫번째 인자 : 위에서 초기화한 state를 받아옴. -> state를 컨트롤 할 수 있음.
    //두번째 인자 : 외부에서 값을 받아와야 할 때 사용. -> 외부에서 받아온 값을 사용 할 수 있게 됨.
    [SUBPRICE]: (state, { payload }) => {
      //state에 subPrice라는 속성에 외부에서 받아온 payload값을 넣어줌.
      state.subPrice = payload;
      //변경된 state값을 액션이 실행되면 그 반환값으로 return함
      return { ...state };
    },
  },
  //handleActions는 여러개의 액션 값을 받을 수 있는데,
  initialState[0]
);

export const emailIdReducer = handleActions(
  {
    [EMAILID]: (state, { payload }) => {
      state.emailId = payload;

      return { ...state };
    },
  },
  initialState[1]
);

export const emailDomainReducer = handleActions(
  {
    [EMAILDOMAIN]: (state, { payload }) => {
      state.emailDomain = payload;

      return { ...state };
    },
  },
  initialState[2]
);

export const emailReducer = handleActions(
  {
    [EMAIL]: (state, { payload }) => {
      state.email = payload;

      return { ...state };
    },
  },
  initialState[3]
);

