import style from "../css/delivery-address-list.module.css";

function DeliveryAddressList() {
  const exampleAddressList = [
    {
      name: "본가",
      zipCode: "12345",
      address: "서울특별시 성북구 동선동0가 000",
      detailAddress: "00아파트, 000호",
      receipient: "너구리",
      phone: "010-0000-0000",
      default: true,
    },
    {
      name: "자취방",
      zipCode: "67890",
      address: "인천광역시 미추홀구 미추홀대로 000",
      detailAddress: "00아파트, 000호",
      receipient: "수제비",
      phone: "010-1234-5789",
      default: false,
    },
  ];

  return (
    <div className={style.layout}>
      <div className={style.title}>배송지 관리</div>
      <div className={style.addBox}>
        <div className={style.add}>배송지 추가</div>
      </div>
      <div>
        <table className={style.addressList}>
          <tr>
            <th>배송지 이름</th>
            <th>주소</th>
            <th>연락처</th>
            <th>수정/삭제</th>
          </tr>
          {exampleAddressList.map((address) => {
            return (
              <tr>
                <td className={style.addressName}>
                  {address.default ? (
                    <div style={{ color: "#635970" }}> (기본배송지)</div>
                  ) : null}
                  {address.name}
                </td>
                <td className={style.address}>
                  <div>({address.zipCode})</div>
                  <div>
                    {address.address} {address.detailAddress}
                  </div>
                  <div>받는 사람 : {address.receipient}</div>
                </td>
                <td className={style.phone}>{address.phone}</td>
                <td className={style.button}>
                  <button>수정</button>
                  <p />
                  <button>삭제</button>
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
