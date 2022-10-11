import style from "../css/delivery-address-update.module.css";

import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import { useEffect } from "react";
import {
  GET_ADDRESS,
  INIT_ADDRESS,
  INIT_FROM_TEMP_ADDRESS,
  SET_FROM_TEMP_ADDRESS,
  SET_LOCATION,
  SET_TARGET_ADDRESS,
  VIEW_ADDRESS,
} from "../../modules/deliveryModules/deliveryModule";
import DaumPostcodeEmbed from "react-daum-postcode";
import Modal from "react-modal";
import { SET_MODAL1, SET_MODAL2 } from "../../modules/modalModules/modalModule";
import { useNavigate } from "react-router-dom";

function DeliveryAddressUpdate() {
  // 유효성 검사 추가 예정
  const target = useSelector((state) => state.deliveryTargetReducer);
  const address = useSelector((state) => state.deliveryReducer);
  const modal = useSelector((state) => state.modalReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // 본인 주소 아니면 못 보게 권한(조건) 설정 해야 한다
    console.log(target);

    axios({
      method: "GET",
      url: `http://localhost:8080/deliveries/addresses/${target.addressCode}`,
    }).then((res) => {
      dispatch({ type: [GET_ADDRESS], payload: res.data });
      dispatch({
        type: [SET_TARGET_ADDRESS],
        payload: {
          addressZipCode: target.addressZipCode,
          addressLocation: target.addressLocation,
          addressDetailLocation: target.addressDetailLocation,
        },
      });
    });
    console.log(address);
  }, []);

  const sendAddressData = async () => {
    const res = await axios({
      method: "PUT",
      url: "http://localhost:8080/deliveries/addresses",
      data: address,
    });
    if (res.data) {
      alert("배송지가 수정 되었습니다.");
      await axios({
        method: "GET",
        url: "http://localhost:8080/deliveries/addresses",
      }).then((res) => dispatch({ type: [GET_ADDRESS], payload: res.data }));
      navigate("/mypage/delivery-address-list");
    } else {
      alert("에러가 발생했습니다. 다시 한 번 시도해주세요.");
    }
  };

  const setAddressData = (e) => {
    dispatch({ type: [SET_LOCATION], payload: e.target });
  };

  const modalStyle = {
    overlay: {
      backgroundColor: "#00000077",
    },
    content: {
      margin: "auto",
      width: "500px",
      height: "520px",
      padding: "0",
      top: "25%",
      border: "2px solid #000000",
      borderRadius: "1rem",
    },
  };

  const setModal1 = () => {
    dispatch({ type: [SET_MODAL1] });
  };
  const setModal2 = () => {
    dispatch({ type: [SET_MODAL2] });
    document.getElementById("deliveryInfo").disabled = true;
  };

  const closeModal = (data) => {
    console.log(data);
    dispatch({ type: [SET_LOCATION], payload: data });
    dispatch({ type: [SET_MODAL1] });

    document.getElementById("addressLocation").value = address.addressLocation;
    document.getElementById("addressZipCode").value = address.addressZipCode;
  };

  return (
    <div className={style.layout}>
      <div className={style.title}>배송지 관리</div>
      <div className={style.subTitleBox}>
        <div className={style.subTitle}>배송지 수정</div>
      </div>
      <div>
        <form className={style.addressList}>
          <div className={style.infoBox}>
            <div className={style.infoSubBox1}>
              <label>배송지 이름</label>
            </div>
            <div className={style.infoSubBox2}>
              <input
                id="addressName"
                type="text"
                className={style.inputType1}
                onChange={setAddressData}
                value={address.addressName}
              />
              <input
                id="defaultAddressYn"
                type="checkbox"
                className={style.inputRadio}
                onChange={setAddressData}
                value={
                  address.defaultAddressYn == "Y"
                    ? (document.getElementById(
                        "defaultAddressYn"
                      ).checked = true)
                    : false
                }
              />
              <label>기본 배송지로 설정</label>
            </div>
          </div>
          <div className={style.infoBox}>
            <div className={style.infoSubBox1}>
              <label>받으실 분</label>
            </div>
            <div className={style.infoSubBox2}>
              <input
                id="deliveryRecipient"
                type="text"
                className={style.inputType2}
                onChange={setAddressData}
                value={address.deliveryRecipient}
              />
            </div>
          </div>
          <div className={style.addressLocation}>
            <div className={style.infoSubBox1}>
              <label>받으실 곳</label>
            </div>
            <div className={style.infoSubBox2}>
              <div>
                <input
                  id="addressZipCode"
                  type="text"
                  className={style.inputType1}
                  onChange={setAddressData}
                  placeholder="우편번호"
                  value={address.addressZipCode}
                  disabled
                />
                <input
                  type="button"
                  value="우편번호 검색"
                  className={style.inputButton}
                  onClick={setModal1}
                  onChange={setAddressData}
                />
              </div>
              <Modal
                isOpen={modal.isOpen1}
                ariaHideApp={false}
                style={modalStyle}
              >
                <div className={style.modalTitle}>
                  우편번호 검색
                  <button className={style.modalButton} onClick={setModal1} />
                </div>

                <DaumPostcodeEmbed
                  onComplete={closeModal}
                  style={{ height: "90%" }}
                  autoClose
                />
              </Modal>
              <input
                id="addressLocation"
                type="text"
                className={style.inputType2}
                onChange={setAddressData}
                value={address.addressLocation}
                placeholder="주소"
                disabled
              />
              <input
                id="addressDetailLocation"
                type="text"
                className={style.inputType2}
                onChange={setAddressData}
                value={address.addressDetailLocation}
                placeholder="상세 주소 입력"
              />
            </div>
          </div>
          <div className={style.infoBox}>
            <div className={style.infoSubBox1}>
              <label>휴대 번호</label>
            </div>
            <div className={style.infoSubBox2}>
              <input
                id="addressPhone"
                type="text"
                className={style.inputType2}
                onChange={setAddressData}
                value={address.addressPhone}
              />
            </div>
          </div>
          <div className={style.infoBox}>
            <div className={style.infoSubBox1}>
              <label>배송 정보</label>
            </div>
            <div className={style.infoSubBox2}>
              <input
                id="deliveryInfo"
                type="text"
                className={style.inputType2}
                onChange={setAddressData}
                onClick={setModal2}
                value={
                  "배송정보 : " +
                  address.deliveryLocation +
                  (address.commonEntranceAccessNumberYn == "Y"
                    ? ", 공동현관 비밀번호 : " +
                      address.commonEntranceAccessNumber
                    : "")
                }
                placeholder="배송 정보 입력"
              />
              <Modal
                isOpen={modal.isOpen2}
                ariaHideApp={false}
                style={modalStyle}
              >
                <div className={style.modalTitle}>
                  배송정보 입력
                  <button
                    className={style.modalButton}
                    onClick={() => {
                      setModal2();

                      dispatch({ type: [INIT_FROM_TEMP_ADDRESS] });
                    }}
                  />
                </div>
                <div className={style.modalContentBox}>
                  <div className={style.modalContent}>
                    <div>
                      <input
                        id="문앞"
                        type="radio"
                        name="deliveryLocation"
                        onChange={setAddressData}
                      />
                      <label className={style.modalLabel}>문앞</label>
                    </div>
                    <div>
                      <input
                        id="경비실"
                        type="radio"
                        name="deliveryLocation"
                        onChange={setAddressData}
                      />
                      <label id="경비실" className={style.modalLabel}>
                        경비실
                      </label>
                    </div>
                    <div>
                      <input
                        id="택배함"
                        type="radio"
                        name="deliveryLocation"
                        onChange={setAddressData}
                      />
                      <label className={style.modalLabel}>택배함</label>
                    </div>
                    <div>
                      <input
                        id="기타사항"
                        type="radio"
                        name="deliveryLocation"
                        onChange={setAddressData}
                      />
                      <label className={style.modalLabel}>기타사항</label>
                    </div>
                    <div>
                      <label className={style.modalLabel}>
                        기타사항 입력 :
                      </label>
                      <input
                        id="etcLocation"
                        type="text"
                        placeholder="소화전/EPS/TPS 등은 안전상 불가합니다."
                        disabled
                        onChange={setAddressData}
                      />
                    </div>

                    <div>
                      <input
                        id="commonEntranceAccessNumberYn"
                        type="checkbox"
                        onChange={setAddressData}
                      />
                      <label className={style.modalLabel}>
                        공동현관 비밀번호 여부
                      </label>
                    </div>
                    <div>
                      <label className={style.modalLabel}>
                        공동현관 비밀번호 입력 :
                      </label>
                      <input
                        id="commonEntranceAccessNumber"
                        type="text"
                        onChange={setAddressData}
                        placeholder="공동현관 번호를 입력해주세요."
                        disabled
                      />
                    </div>
                  </div>
                </div>
                <div className={style.modalSaveBox}>
                  <button
                    className={style.modalSave}
                    onFocus={() => {
                      setModal2();
                      dispatch({ type: [SET_FROM_TEMP_ADDRESS] });
                      dispatch({ type: [INIT_FROM_TEMP_ADDRESS] });
                      document.getElementById("deliveryInfo").value =
                        "배송위치 : " +
                        address.deliveryLocation +
                        (address.commonEntranceAccessNumberYn == "Y"
                          ? ", 공동현관 비밀번호 : " +
                            address.commonEntranceAccessNumber
                          : "");
                    }}
                  >
                    동의하고 저장하기
                  </button>
                </div>
              </Modal>
            </div>
          </div>
        </form>
      </div>
      <button onClick={sendAddressData}>수정하기</button>
    </div>
  );
}

export default DeliveryAddressUpdate;
