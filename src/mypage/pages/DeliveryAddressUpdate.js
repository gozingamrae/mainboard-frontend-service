import style from "../css/delivery-address-update.module.css";

function DeliveryAddressUpdate() {
  return (
    <div className={style.layout}>
      <div className={style.title}>배송지 관리</div>
      <div className={style.subTitleBox}>
        <div className={style.subTitle}>배송지 수정</div>
      </div>
      <div>
        <table className={style.addressList}>
          <tr>
            <th>배송지 이름</th>
            <th>받는 사람</th>
            <th>주소</th>
            <th>휴대번호</th>
          </tr>
          <tr>
            <td>TEST</td>
            <td>TEST</td>
            <td>TEST</td>
            <td>TEST</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default DeliveryAddressUpdate;
