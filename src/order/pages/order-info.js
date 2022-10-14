
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  GET_ADDRESS,
  INIT_ADDRESS,
  INIT_FROM_TEMP_ADDRESS,
  SET_FROM_TEMP_ADDRESS,
  SET_LOCATION,
  SET_TARGET_ADDRESS,
  SET_TARGET_ADDRESS_CODE,
  SET_ZIPCODE,
} from "../../modules/deliveryModules/deliveryModule";

import {
  SUBPRICE,
  EMAIL,
  EMAILID,
  EMAILDOMAIN,
} from "../../modules/orderModules/orderModule";
import{
  ORDER_FINAL,
} from "../../modules/orderModules/orderFinalModule";
import "../css/order-info-style.css";
import style from "../../mypage/css/delivery-address-insert.module.css";
import Modal from "react-modal";
import DaumPostcodeEmbed from "react-daum-postcode";
import { SET_MODAL1, SET_MODAL2 } from "../../modules/modalModules/modalModule";
import { FinalOrderInfo} from "../../apis/order/OrderFinalAPICalls";

/* 회원 정보 불러올 때 사용되는 모듈 */
import { callGetMemberAPI } from "../../apis/member/MemberAPICalls";
import { decodeJwt } from "../../utils/tokenUtils";

function OrderInfo() {

  const location = useLocation();
  const productInfo = location.state.productInfo;
  const grade = location.state.grade;
  console.log('state', location.state)

  const navigate = useNavigate();

  const arr = [
    {
      info: productInfo.boardgameName + "  <" + grade + ">",
      quantity: "1",
      price: grade == "최상"? productInfo.srentalFee :grade == "상"? productInfo.arentalFee :productInfo.brentalFee,
      points: 400,
      totalPrice: grade == "최상"? productInfo.srentalFee :grade == "상"? productInfo.arentalFee :productInfo.brentalFee,
    },
  ];


  const deliveryCharge = 2500;
  const holdingPoints = 5000;
  var TOTALPRICE = 0;
  var TOTALPOINTS = 0;
  var deliveryStart = "N";

  //useSelector는 현재 state값을 받아올 수 있는 react hook이다. -> subPrice, email등등의  state를 가져옴.
  const address = useSelector((state) => state.deliveryReducer);
  const modal = useSelector((state) => state.modalReducer);
  const subPriceResult = useSelector((state) => state.subPriceReducer);
  const emailIdResult = useSelector((state) => state.emailIdReducer);
  const emailDomainResult = useSelector((state) => state.emailDomainReducer);
  const emailResult = useSelector((state) => state.emailReducer);
  const orderInfoResult = useSelector((state) => state.orderInfoReducer);
  const orderFinalResult = useSelector((state) => state.orderFinalReducer);


  //Dispatch -> reducer를 호출하는 함수.
  const dispatch = useDispatch();
  const navigate = useNavigate();


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

  /* 회원정보를 불러올 리듀서와 회원 토큰 */
  const member = useSelector((state) => state.memberAPIReducer);
  const token = decodeJwt(window.localStorage.getItem("accessToken"));
  const memberDetail = member.data;

  console.log("(/order-info) OrderInfo입니다 !! : ", orderInfoResult);

  for (var i = 0; i < arr.length; i++) {
    TOTALPRICE = TOTALPRICE + arr[i].totalPrice;
  }

  for (var j = 0; j < arr.length; j++) {
    TOTALPOINTS = TOTALPOINTS + arr[j].points;
  }

  /*Points*/
  const pointsOnChangeHandler = (e) => {
    //reducer에서 key값으로 액션을 실행시키고, payload에 원하는 값을 넣어 state를 변경시킨다.
    dispatch({ type: SUBPRICE, payload: e.target.value });
  };

  const pointsOnClickHandler = (e) => {
    const inputText = document.getElementById("usingPoints");

    if (e.target.checked) {
      inputText.value = holdingPoints;
      dispatch({ type: SUBPRICE, payload: holdingPoints });
    } else {
      inputText.value = "";
      dispatch({ type: SUBPRICE, payload: 0 });
    }
  };

  /*E-mail*/
  const emailOnChangeHandler1 = (e) => {
    dispatch({ type: EMAILID, payload: e.target.value });
    dispatch({
      type: EMAIL,
      payload: emailIdResult.emailId + "@" + emailDomainResult.emailDomain,
    });
  };

  const emailOnChangeHandler2 = (e) => {
    dispatch({ type: EMAILDOMAIN, payload: e.target.value });
    dispatch({
      type: EMAIL,
      payload: emailIdResult.emailId + "@" + emailDomainResult.emailDomain,
    });
  };

  const emailOnClickHandler = (e) => {
    const inputText = document.getElementById("orderEmailDomain");
    const domain = document.getElementById("orderEmailDomainOption");

    inputText.value = domain.value;

    dispatch({ type: EMAILDOMAIN, payload: domain.value });
    dispatch({
      type: EMAIL,
      payload: emailIdResult.emailId + "@" + emailDomainResult.emailDomain,
    });
  };


  // console.log(emailResult.email);

  async function PaymentButtonOnChangeHandler() {
    if (document.getElementById("saveLocation")) {
      const res = await axios({
        method: "POST",
        url: "http://localhost:8080/deliveries/addresses",
        data: address,
      });
    }
    navigate("/payment");

    function paymentButtonOnChangeHandler() {
      navigate("/payment");
    }

    console.log(
      "orderId가 잘 넘어 오는지? (/order-info)",
      orderInfoResult.data
    );

    function cancelButtonOnChangeHandler() {
      navigate("/boardgame/list");
    }

  var finalPrice = TOTALPRICE - subPriceResult.subPrice;

// ===============================================================
  // console.log("orderId 값은 ?? ", orderInfoResult.data);
  // console.log("orderAmount 값은 ?? ", orderInfoResult.price);
  // console.log("couponUsedRate 값은 ?? ", "0%"); //값 받아서 넣기!!
  // console.log("pointsUsedAmount 값은 ?? ", subPriceResult.subPrice);
  // console.log("orderDate 값은 ?? ", orderInfoResult.data && orderInfoResult.data.substr(6,8));
  // console.log("selectedProduct 값은 ?? ", 1);
  // console.log("memberCode 값은 ?? ", memberDetail.memberCode);
  // console.log("paymentMethod 값은 ?? ", "카드");
  // console.log("deliveryCharge 값은 ?? ", deliveryCharge);
  // console.log("usedCouponCode 값은 ?? ", "usedCouponCode");
  // console.log("deliveryCode 값은 ?? ", deliveryStart);
  // console.log("finalOrderAmount 값은 ?? ", finalPrice);


  const orderFinal = {
    orderId: orderInfoResult.data,
    orderAmount: orderInfoResult.price,
    pointsUsedAmount: subPriceResult.subPrice,
    couponUsedRate: 0,
    orderDate: orderInfoResult.data && orderInfoResult.data.substr(6,8),
    selectedProduct: 1,
    memberCode:  memberDetail.memberCode,
    paymentMethod: "카드",
    deliveryCharge: deliveryCharge,
    usedCouponCode: "usedCouponCode",
    deliveryStartYn: deliveryStart,
    finalOrderAmount: finalPrice
    
  };

  useEffect(
    ()=>{
      console.log('token: ' + token.sub);
      if(token != null){
        dispatch(callGetMemberAPI());
        
      }

      dispatch({type: ORDER_FINAL, payload: orderFinal});
    },[orderFinal.orderId]
  )

  const data = FinalOrderInfo(); 
  data();

  
  return (
    <div className="orderInfo">
      <h3 className="orderInfoSubTitle">주문 상세 내역</h3>
      <hr className="orderInfohr" />
      <table className="orderInfoTable">
        <thead>
          <tr className="orderInfoHeader">
            <th width="600">상품/옵션 정보 </th>
            <th>수량</th>
            <th>상품 금액</th>
            <th>적립 포인트</th>
            <th>합계 금액</th>
          </tr>
        </thead>

        <tbody>
          {arr.map((list) => (
            <tr align="center" className="orderInfoContent">
              <td width="500" height="100">
                {list.info}
              </td>
              <td>{list.quantity}</td>
              <td>{list.price}</td>
              <td>{list.points}</td>
              <td>{list.totalPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>

    var finalPrice = TOTALPRICE - subPriceResult.subPrice;

    const setAddressData = (e) => {
      dispatch({ type: [SET_LOCATION], payload: e.target });
    };

    const [defaultAddress, setDefaultAddress] = useState(true);
    const [directAddress, setDirectAddress] = useState(false);

    const defaultAddressMode = (e) => {
      if (e.target.checked) {
        setDefaultAddress(true);
        setDirectAddress(false);

        document.getElementById("saveLocation").checked = true;
      }
    };

    const directAddressMode = (e) => {
      dispatch({ type: [INIT_ADDRESS] });
      if (e.target.checked) {
        setDefaultAddress(false);
        setDirectAddress(true);

        document.getElementById("addressName").value = "";
        document.getElementById("deliveryRecipient").value = "";
        document.getElementById("addressZipCode").value = "";
        document.getElementById("addressLocation").value = "";
        document.getElementById("addressDetailLocation").value = "";
        document.getElementById("addressPhone").value = "";
        document.getElementById("deliveryInfo").value = "";
        document.getElementById("deliveryMessage").value = "";

        document.getElementById("saveLocation").checked = false;
      }
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

    useEffect(() => {
      console.log("token: " + token.sub);
      if (token != null) {
        dispatch(callGetMemberAPI());
      }
      axios({
        method: "GET",
        url: "http://localhost:8080/deliveries/addresses/default",
      }).then((res) => {
        dispatch({ type: [GET_ADDRESS], payload: res.data });
        dispatch({ type: [SET_ZIPCODE] });
        if (directAddress && !modal.isOpen2) {
          dispatch({ type: [INIT_ADDRESS] });
        }
      });
    }, []);

    console.log("할인된 가격 결과 : ", subPriceResult.subPrice);

    return (
      <div className="orderInfo">
        <h3 className="orderInfoSubTitle">주문 상세 내역</h3>
        <hr className="orderInfohr" />
        <table className="orderInfoTable">
          <thead>
            <tr className="orderInfoHeader">
              <th width="600">상품/옵션 정보</th>
              <th>수량</th>
              <th>상품 금액</th>
              <th>적립 포인트</th>
              <th>합계 금액</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((list) => (
              <tr align="center" className="orderInfoContent">
                <td width="500" height="100">
                  {list.info}
                </td>
                <td>{list.quantity}</td>
                <td>{list.price}</td>
                <td>{list.points}</td>
                <td>{list.totalPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>


        <div>
          <h3 className="orderInfoSubTitle">주문자 정보</h3>
          <hr className="orderInfohr" />
          <table className="InfoTable">
            <tbody>
              <tr>
                {" "}
                <td className="InfoFirstColumn">*주문하시는 분 </td>{" "}
                <td className="InfoSecondColumn">
                  <input
                    name="orderName"
                    className="InputBox"
                    value={memberDetail.memberName}
                  />
                </td>{" "}
              </tr>

              <tr>
                <td className="InfoFirstColumn"> 전화번호 </td>{" "}
                <td className="InfoSecondColumn">
                  <input name="orderTelephone" className="InputBox" />
                </td>
              </tr>

              <tr>
                <td className="InfoFirstColumn">*휴대전화 번호 </td>
                <td className="InfoSecondColumn">
                  <input
                    name="orderPhoneNum"
                    className="InputBox"
                    value={memberDetail.phone}
                  />
                </td>
              </tr>

              <tr>
                <td className="InfoFirstColumn">이메일 </td>
                <td className="InfoSecondColumn">
                  <input
                    name="orderEmailId"
                    className="InputBox"
                    // value={emailIdResult.emailId}
                    value={memberDetail.email}
                    onChange={emailOnChangeHandler1}
                  />
                  @
                  <input
                    id="orderEmailDomain"
                    className="InputBox"
                    value={emailDomainResult.emailDomain}
                    onChange={emailOnChangeHandler2}
                  />
                  <select
                    id="orderEmailDomainOption"
                    className="ordererOptionBox"
                    onClick={emailOnClickHandler}
                  >
                    <option value=""> 직접입력</option>
                    <option value="gmail.com">gmail.com</option>
                    <option value="naver.com">naver.com</option>
                    <option value="daum.com">daum.com</option>
                    <option value="hanmail.com">hanmail.com</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h3 className="orderInfoSubTitle">배송정보</h3>
          <hr className="orderInfohr" />
          <table className="InfoTable">
            <tbody>
              <tr>
                <td className="InfoFirstColumn">배송지 확인</td>
                <td className="InfoSecondColumn">
                  &nbsp; &nbsp;
                  <input
                    id="defaultAddress"
                    type="radio"
                    name="deliveryLocation2"
                    checked={defaultAddress}
                    onClick={defaultAddressMode}
                  />
                  기본배송지 &nbsp; &nbsp;
                  {/* <input type="radio" name="deliveryLocation" value="last" />
                최근배송지 &nbsp; &nbsp; */}
                  <input
                    id="directAddress"
                    type="radio"
                    name="deliveryLocation2"
                    checked={directAddress}
                    onClick={directAddressMode}
                    onChange={directAddressMode}
                  />
                  직접입력 &nbsp; &nbsp;
                  {/* <input type="radio" name="deliveryLocation" />
                주문자정보와동일&nbsp; &nbsp; */}
                </td>
              </tr>

              <>
                <tr>
                  <td className="InfoFirstColumn">*배송지 이름</td>
                  <td className="InfoSecondColumn">
                    <input
                      id="addressName"
                      name="deliveryName"
                      className="InputBox"
                      value={
                        defaultAddress
                          ? address.addressList.addressName
                          : address.addressName
                      }
                      onChange={setAddressData}
                      disabled={defaultAddress ? true : false}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="InfoFirstColumn">*받으시는 분</td>
                  <td className="InfoSecondColumn">
                    <input
                      id="deliveryRecipient"
                      name="deliveryName"
                      className="InputBox"
                      onChange={setAddressData}
                      value={
                        defaultAddress
                          ? address.addressList.deliveryRecipient
                          : address.deliveryRecipient
                      }
                      disabled={defaultAddress ? true : false}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="InfoFirstColumn">*받으실 곳</td>
                  {
                    <td className="InfoSecondColumn">
                      <input
                        id="addressZipCode"
                        name="deliveryLocation"
                        className="InputBox"
                        value={
                          defaultAddress
                            ? address.addressZipCode
                            : address.addressLocation.split("%")[2]
                        }
                        disabled
                      />
                      <button
                        onClick={setModal1}
                        disabled={defaultAddress ? true : false}
                      >
                        우편번호 검색
                      </button>
                      <Modal
                        isOpen={modal.isOpen1}
                        ariaHideApp={false}
                        style={modalStyle}
                      >
                        <div className={style.modalTitle}>
                          우편번호 검색
                          <button
                            className={style.modalButton}
                            onClick={setModal1}
                          />
                        </div>

                        <DaumPostcodeEmbed
                          onComplete={closeModal}
                          style={{ height: "90%" }}
                          autoClose
                        />
                      </Modal>
                      <br />
                      <input
                        id="addressLocation"
                        name="deliveryLocation"
                        className="InputBox"
                        value={
                          defaultAddress
                            ? address.addressLocationTemp
                            : address.addressLocation.split("%")[0]
                        }
                        disabled
                      />
                      <input
                        id="addressDetailLocation"
                        name="deliveryLocationDetail"
                        className="InputBox"
                        value={
                          defaultAddress
                            ? address.addressDetailLocation
                            : address.addressLocation.split("%")[1]
                        }
                        placeholder="상세 주소 입력"
                        disabled={defaultAddress ? true : false}
                      />
                    </td>
                  }
                </tr>
                <tr>
                  <td className="InfoFirstColumn">*휴대전화 번호</td>
                  <td className="InfoSecondColumn">
                    <input
                      id="addressPhone"
                      name="deliveryPhoneNum"
                      className="InputBox"
                      style={{ width: "570px" }}
                      onChange={setAddressData}
                      value={
                        defaultAddress
                          ? address.addressList.addressPhone
                          : address.addressPhone
                      }
                      disabled={defaultAddress ? true : false}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="InfoFirstColumn">배송정보</td>
                  <td className="InfoSecondColumn">
                    <input
                      id="deliveryInfo"
                      name="deliveryMessage"
                      className="InputBox"
                      style={{ width: "570px" }}
                      value={
                        defaultAddress
                          ? "배송정보 : " +
                            address.addressList.deliveryLocation +
                            (address.addressList.commonEntranceAccessNumberYn ==
                            "Y"
                              ? ", 공동현관 비밀번호 : " +
                                address.addressList.commonEntranceAccessNumber
                              : "")
                          : "배송정보 : " +
                            address.deliveryLocation +
                            (address.commonEntranceAccessNumberYn == "Y"
                              ? ", 공동현관 비밀번호 : " +
                                address.commonEntranceAccessNumber
                              : "")
                      }
                      onChange={setAddressData}
                      onClick={setModal2}
                      placeholder="배송 정보 입력"
                      disabled={defaultAddress ? true : false}
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
                  </td>
                </tr>
                <tr>
                  <td className="InfoFirstColumn">배송 메시지</td>
                  <td className="InfoSecondColumn">
                    <input
                      id="deliveryMessage"
                      name="deliveryMessage"
                      className="InputBox"
                      style={{ width: "570px" }}
                      onChange={setAddressData}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="InfoFirstColumn">배송지 저장</td>
                  <td className="InfoSecondColumn">
                    <input
                      id="saveLocation"
                      name="saveLocation"
                      type="checkBox"
                      disabled={defaultAddress ? true : false}
                    />
                    배송지 저장
                  </td>
                </tr>
              </>
            </tbody>
          </table>
        </div>

        <div>
          <h3 className="orderInfoSubTitle">결제정보</h3>
          <hr className="orderInfohr" />
          <table className="infoTable">
            <tbody>
              <tr>
                <td className="InfoFirstColumn">상품 합계 금액</td>
                <td className="InfoSecondColumn">
                  {" "}
                  {TOTALPRICE.toLocaleString()}원
                </td>
              </tr>
              <tr>
                <td className="InfoFirstColumn">배송비</td>
                <td className="InfoSecondColumn">
                  {deliveryCharge.toLocaleString()}원
                </td>
              </tr>
              <tr>
                <td className="InfoFirstColumn">적립</td>
                <td className="InfoSecondColumn">
                  적립 마일리지 : {TOTALPOINTS.toLocaleString()}원
                </td>
              </tr>
              <tr>
                <td className="InfoFirstColumn">쿠폰사용</td>
                <td className="InfoSecondColumn">
                  <button>쿠폰조회 및 사용</button>
                </td>
              </tr>
              <tr>
                <td className="InfoFirstColumn">포인트 사용</td>
                <td className="InfoSecondColumn">
                  <input
                    id="usingPoints"
                    name="usingPointsAmount"
                    onChange={pointsOnChangeHandler}
                    className="InputBox"
                  />
                  원 &nbsp; &nbsp;
                  <input
                    id="useAllPoints"
                    type="checkBox"
                    onClick={pointsOnClickHandler}
                    value={holdingPoints}
                  />
                  전액사용하기 (보유마일리지: {holdingPoints}원)
                  <br />
                  <p>*100원 이상 부터 사용 가능</p>
                </td>
              </tr>
              <tr>
                <td className="InfoFirstColumn">최종 결제 금액</td>
                <td className="InfoSecondColumn">{finalPrice}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="terms">
          <input id="terms" type="checkBox" />
          (필수) 구매약관에 동의합니다.
        </div>

        <div className="finalButton">
          <button
            onClick={cancelButtonOnChangeHandler}
            className="cancelButton"
          >
            취소
          </button>
          <button
            onClick={paymentButtonOnChangeHandler}
            className="paymentButton"
          >
            결제하기
          </button>
        </div>
      </div>
    );
  }
}

export default OrderInfo;
