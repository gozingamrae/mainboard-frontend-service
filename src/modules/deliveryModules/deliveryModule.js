import axios from "axios";
import { createActions, handleActions } from "redux-actions";

const initialState = [
  {
    addressList: [],
    addressCode: 0, // 배송지 코드
    addressLocation: "", // 배송지 주소
    addressDetailLocation: "", // 배송지 상세주소
    addressZipCode: "", // 배송지 우편번호
    addressName: "", // 배송지 이름
    addressPhone: "", // 배송지 연락처
    commonEntranceAccessNumberYn: "N", // 공동현관번호 여부
    commonEntranceAccessNumber: "", // 공동현관번호
    defaultAddressYn: "N", // 기본 배송지 여부
    deliveryLocation: "", // 받는 위치
    deliveryRecipient: "", // 받는 사람
    memberCode: 0, // 회원 번호

    // 임시 저장
    commonEntranceAccessNumberYnTemp: "N",
    commonEntranceAccessNumberTemp: "",
    deliveryLocationTemp: "",
  },
  { addressCode: 0, addressZipCode: "" },
];

export const INIT_ADDRESS = "delivery/INIT_ADDRESS";
export const GET_ADDRESS = "delivery/GET_ADDRESS";
export const SET_TARGET_ADDRESS = "delivery/SET_TARGET_ADDRESS";
export const SET_LOCATION = "delivery/SET_LOCATION";
export const SET_FROM_TEMP_ADDRESS = "delivery/SET_FROM_TEMP_ADDRESS";
export const INIT_FROM_TEMP_ADDRESS = "delivery/INIT_FROM_TEMP_ADDRESS";
export const VIEW_ADDRESS = "delivery/VIEW_ADDRESS";
export const SET_TARGET_ADDRESS_CODE = "delivery/SET_TARGET_ADDRESS_CODE";

const actions = createActions({
  [INIT_ADDRESS]: () => {},
  [GET_ADDRESS]: () => {},
  [SET_TARGET_ADDRESS]: () => {},
  [SET_LOCATION]: () => {},
  [SET_FROM_TEMP_ADDRESS]: () => {},
  [INIT_FROM_TEMP_ADDRESS]: () => {},
  [VIEW_ADDRESS]: () => {},
  [SET_TARGET_ADDRESS_CODE]: () => {},
});

export const deliveryReducer = handleActions(
  {
    [INIT_ADDRESS]: (state, { payload }) => {
      state = initialState[0];

      return { ...state };
    },
    [GET_ADDRESS]: (state, { payload }) => {
      state.addressList = payload.data;

      return { ...state }.addressList;
    },
    [SET_TARGET_ADDRESS]: (state, { payload }) => {
      state.addressZipCode = payload.addressZipCode;
      state.addressLocation = payload.addressLocation;
      state.addressDetailLocation = payload.addressDetailLocation;

      return { ...state };
    },
    [SET_LOCATION]: (state, { payload }) => {
      if (payload.roadAddress && payload.zonecode) {
        state.addressLocation = payload.roadAddress;
        state.addressZipCode = payload.zonecode;
      }

      if (payload.id == "defaultAddressYn" && payload.checked) {
        state.defaultAddressYn = "Y";
      } else if (payload.id == "defaultAddressYn" && !payload.checked) {
        state.defaultAddressYn = "N";
      } else if (payload.id == "addressName") {
        state.addressName = payload.value;
      } else if (payload.id == "addressPhone") {
        state.addressPhone = payload.value;
      } else if (payload.id == "addressDetailLocation") {
        state.addressDetailLocation = payload.value;
      } else if (payload.id == "deliveryRecipient") {
        state.deliveryRecipient = payload.value;
      } else if (payload.name == "deliveryLocation") {
        state.deliveryLocationTemp = payload.id;
        if (payload.id == "기타사항") {
          document.getElementById("etcLocation").disabled = false;
          state.deliveryLocationTemp =
            document.getElementById("etcLocation").value;
        } else {
          document.getElementById("etcLocation").disabled = true;
          state.deliveryLocationTemp = payload.id;
        }
      } else if (payload.id == "etcLocation") {
        state.deliveryLocationTemp = payload.value;
      } else if (payload.id == "commonEntranceAccessNumberYn") {
        if (payload.checked) {
          document.getElementById(
            "commonEntranceAccessNumber"
          ).disabled = false;
          state.commonEntranceAccessNumberTemp = document.getElementById(
            "commonEntranceAccessNumber"
          ).value;
          state.commonEntranceAccessNumberYnTemp = "Y";
        } else {
          document.getElementById("commonEntranceAccessNumber").disabled = true;
          state.commonEntranceAccessNumberYnTemp = "N";
        }
      } else if (payload.id == "etcLocation") {
        state.deliveryLocation = payload.value;
      } else if (payload.id == "commonEntranceAccessNumber") {
        state.commonEntranceAccessNumberTemp = document.getElementById(
          "commonEntranceAccessNumber"
        ).value;
      }

      console.log(state);

      return { ...state };
    },
    [SET_FROM_TEMP_ADDRESS]: (state, { payload }) => {
      state.commonEntranceAccessNumberYn =
        state.commonEntranceAccessNumberYnTemp;
      state.commonEntranceAccessNumber = state.commonEntranceAccessNumberTemp;
      state.deliveryLocation = state.deliveryLocationTemp;

      return { ...state };
    },
    [INIT_FROM_TEMP_ADDRESS]: (state, { payload }) => {
      state.commonEntranceAccessNumberYnTemp = "N";
      state.commonEntranceAccessNumberTemp = "";
      state.deliveryLocationTemp = "";

      return { ...state };
    },
    [VIEW_ADDRESS]: (state, { payload }) => {
      return { ...state };
    },
  },
  initialState[0]
);

export const deliveryTargetReducer = handleActions(
  {
    [SET_TARGET_ADDRESS_CODE]: (state, { payload }) => {
      state.addressCode = payload.addressCode;
      state.addressZipCode = payload.addressZipCode;
      state.addressLocation = payload.addressLocation;
      state.addressDetailLocation = payload.addressDetailLocation;
      return { ...state };
    },
  },
  initialState[1]
);
