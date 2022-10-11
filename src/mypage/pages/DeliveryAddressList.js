import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  GET_ADDRESS,
  SET_TARGET_ADDRESS_CODE,
} from "../../modules/deliveryModules/deliveryModule";
import style from "../css/delivery-address-list.module.css";

function DeliveryAddressList() {
  const navigate = useNavigate();
  const addressList = useSelector((state) => state.deliveryReducer);
  const dispatch = useDispatch();

  const removeAddressData = async (e) => {
    // 삭제 여부 물어 보기, API 호출 부분 파일 분리하기
    console.log("addressCode : ", e.target.name);
    const res = await axios({
      method: "DELETE",
      url: "http://localhost:8080/deliveries/addresses",
      data: e.target.name,
    }).then((res) => {
      if (res.status == 204) {
        alert("배송지가 삭제 되었습니다.");
        axios({
          method: "GET",
          url: "http://localhost:8080/deliveries/addresses",
        }).then((res) => dispatch({ type: [GET_ADDRESS], payload: res.data }));
      } else {
        alert("에러가 발생했습니다. 다시 한 번 시도해주세요.");
        console.log(res);
      }
    });
  };

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:8080/deliveries/addresses",
    }).then((res) => dispatch({ type: [GET_ADDRESS], payload: res.data }));
  }, []);

  console.log(addressList);

  return (
    <div className={style.layout}>
      <div className={style.title}>배송지 관리</div>
      <div className={style.addBox}>
        <div
          className={style.add}
          onClick={() => {
            navigate("/mypage/delivery-address-insert");
          }}
        >
          배송지 추가
        </div>
      </div>
      <div>
        <table className={style.addressList}>
          <tr>
            <th>배송지 이름</th>
            <th>주소</th>
            <th>연락처</th>
            <th>수정/삭제</th>
          </tr>
          {addressList.memberCode == 0
            ? null
            : addressList.map((address) => {
                const splitAddress = address.addressLocation.split("%");
                console.log(splitAddress);
                return (
                  <tr>
                    <td className={style.addressName}>
                      {address.defaultAddressYn == "Y" ? (
                        <div style={{ color: "#635970" }}> (기본배송지)</div>
                      ) : null}
                      {address.addressName}
                    </td>
                    <td className={style.address}>
                      <div>({splitAddress[2]})</div>
                      <div>
                        {splitAddress[0]} {splitAddress[1]}
                      </div>
                      <div>받는 사람 : {address.deliveryRecipient}</div>
                    </td>
                    <td className={style.phone}>{address.addressPhone}</td>
                    <td className={style.button}>
                      <button
                        onClick={(e) => {
                          dispatch({
                            type: [SET_TARGET_ADDRESS_CODE],
                            payload: {
                              addressCode: address.addressCode,
                              addressZipCode: splitAddress[2],
                              addressLocation: splitAddress[0],
                              addressDetailLocation: splitAddress[1],
                            },
                          });
                          navigate("/mypage/delivery-address-update");
                        }}
                      >
                        수정
                      </button>
                      <p />
                      <button
                        name={address.addressCode}
                        onClick={removeAddressData}
                      >
                        삭제
                      </button>
                    </td>
                  </tr>
                );
              })}
        </table>
      </div>
    </div>
  );
}

export default DeliveryAddressList;
