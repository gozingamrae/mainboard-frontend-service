
import { useState } from 'react';

function OrderInfo(){

    const arr = [{info: "부루마블", quantity: "2", price: "4000", points: 400, totalPrice: 8000},
    {info: "부루마블2", quantity: "3", price: "3000", points: 450, totalPrice: 9000},
    {info: "부루마블3", quantity: "1", price: "2000", points: 100, totalPrice: 2000}
    ] 

    const deliveryCharge = 2500;
    const holdingPoints = 5000;
    var TOTALPRICE = 0;
    var TOTALPOINTS = 0;

    for(var i = 0; i < arr.length; i++){
        TOTALPRICE = TOTALPRICE + arr[i].totalPrice;
    };

    for(var j= 0; j < arr.length; j++){
        TOTALPOINTS = TOTALPOINTS + arr[j].points;
    }

    const [subPrice, setSubPrice]=useState(0);
    const [usePoints, setUsePoints]=useState(0);


    const onChangeHandler = (e) => {
        setSubPrice(e.target.value);
    }

    const onClickHandler = (e) => {
        setUsePoints(e.target.checked);
    }

    var finalPrice = TOTALPRICE - subPrice;



    return(

        <div>
            <h1>+++ Header +++</h1>
            <hr/>

            <h2>주문 상세 내역</h2>
            <hr/>
            <table border="1" width ="1200" align = "center">

                <thead>
                <tr bgcolor ="#EBE9F2" align="center">
                    <th width="600">상품/옵션 정보</th>
                    <th>수량</th>
                    <th>상품 금액</th>
                    <th>적립 포인트</th>
                    <th>합계 금액</th>
                </tr>
                 </thead>

                <tbody>
                {arr.map(list=>
                <tr align="center">
                    <td width = "500" height="150"  >{list.info}</td>
                    <td>{list.quantity}</td>
                    <td>{list.price}</td>
                    <td>{list.points}</td>
                    <td>{list.totalPrice}</td>
                    </tr>
                )}
                </tbody>
            </table>

            <div>
                <h3>주문자 정보</h3>
                <hr/>
                <table border="1" align="center">
                
                <tbody align="center">
                <tr >
                <td>*주문하시는 분 : </td>
                <td><input name="orderName"/></td>
                </tr>

                <tr>
                <td> 전화번호 :</td>
                <td><input name="orderTelephone"/></td>
                </tr>

                <tr>
                    <td>*휴대전화 번호 :</td>
                    <td><input name="orderPhoneNum"/></td>
                </tr>

                <tr> 
                    <td>이메일 :</td>
                     <input name="orderEmailId"/> @ <input name="ordereMailDomain"/>
                <select name="orderEmailDomain">
                    <option value=""> 직접입력</option>
                    <option value="gmail.com">gmail.com</option>
                    <option value="naver.com">naver.com</option>
                    <option value="daum.com">daum.com</option>
                    <option value="hanmail.com">hanmail.com</option>
                </select>
                </tr>
                </tbody>
                
                </table>
            </div>

            <div>
                <h3>배송정보</h3>
                <hr/>
                <table border="1" align="center">
                    <tbody>
                        <tr>
                            <td>배송지 확인</td>
                            <td> &nbsp; 
                            기본배송지<input type="radio" name="default" value="default"/> &nbsp;
                            최근배송지<input type="radio" name="last"/>  &nbsp;
                            직접입력<input type="radio" name="input"/>  &nbsp;
                            주문자정보와동일<input type="radio" name="sameAsOrder"/> &nbsp;  
                            </td>
                        </tr>
                        <tr>
                            <td>받으시는 분</td>
                            <td><input name="deliveryName"/></td>
                        </tr>
                        <tr>
                            <td>받으실 곳</td>
                            <td><input name="deliveryLocation"/> <button>우편번호 검색</button> <br/>
                                <input name="deliveryLocation"/><input name="deliveryLocationDetail" placeholder="상세주소입력"/>
                            </td>
                        </tr>
                        <tr>
                            <td>전화번호</td>
                            <td><input name="deliveryTelephone"/></td>
                        </tr>
                        <tr>
                            <td>휴대전화 번호</td>
                            <td><input name="deliveryPhoneNum"/></td>
                        </tr>
                        <tr>
                            <td>배송메시지</td>
                            <td><input name="deliveryMessage"/></td>
                        </tr>
                        <tr>
                            <td>배송지 저장</td>
                            <td><input name="saveLocation" type="checkBox"/> 배송지 저장</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div>
                <h3>결제정보</h3>
                <hr/>
                <table border="1" align="center">
                    <tbody>
                        <tr>
                            <td>상품 합계 금액</td>
                            <td>
                                {TOTALPRICE.toLocaleString()}원
                            </td>
                        </tr>
                        <tr>
                            <td>배송비</td>
                            <td>{deliveryCharge.toLocaleString()}원</td>
                        </tr>
                        <tr>
                            <td>적립</td>
                            <td>적립 마일리지 : {TOTALPOINTS.toLocaleString()}원
                            </td>
                        </tr>
                        <tr>
                            <td>쿠폰사용</td>
                            <td><button>쿠폰조회 및 사용</button></td>
                        </tr>
                        <tr>
                            <td>포인트 사용</td>
                            <td><input name="usingPointsAmount" onChange={onChangeHandler}/>원 <input type="checkBox" onClick={onClickHandler} value={holdingPoints}/>전액사용하기 (보유마일리지: {holdingPoints}원)
                            <br/>
                            <p>*100원 이상 부터 사용 가능</p>
                            </td>

                        </tr>
                        <tr>
                            <td>최종 결제 금액</td>
                            <td>{finalPrice}</td>
                        </tr>
                    </tbody>
                </table>
            </div>


            

            <hr/>
            <h1>+++ Footer +++</h1>

        </div>
    );
}
export default OrderInfo;
