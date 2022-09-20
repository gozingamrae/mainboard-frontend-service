
import { useDispatch, useSelector } from 'react-redux';
import { SUBPRICE, EMAIL, EMAILID, EMAILDOMAIN} from '../../modules/orderModules/orderModule';
import '../css/order-info-style.css';

function OrderInfo(){

    const arr = [{info: "부루마블", quantity: "2", price: "4000", points: 400, totalPrice: 8000},
    {info: "할리갈리", quantity: "3", price: "3000", points: 450, totalPrice: 9000},
    {info: "쿼리도", quantity: "1", price: "2000", points: 100, totalPrice: 2000}
    ] 

    const deliveryCharge = 2500;
    const holdingPoints = 5000;
    var TOTALPRICE = 0;
    var TOTALPOINTS = 0;

    //useSelector는 현재 state값을 받아올 수 있는 react hook이다. -> subPrice, email등등의  state를 가져옴.
    const subPriceResult = useSelector( (state) => state.subPriceReducer);
    const emailIdResult = useSelector( (state) => state.emailIdReducer);
    const emailDomainResult = useSelector( (state) => state.emailDomainReducer);
    const emailResult = useSelector( (state) => state.emailReducer);

    //Dispatch -> reducer를 호출하는 함수.
    const dispatch = useDispatch();

    for(var i = 0; i < arr.length; i++){
        TOTALPRICE = TOTALPRICE + arr[i].totalPrice;
    };

    for(var j= 0; j < arr.length; j++){
        TOTALPOINTS = TOTALPOINTS + arr[j].points;
    }


    /*Points*/
    const pointsOnChangeHandler = (e) => {
        //reducer에서 key값으로 액션을 실행시키고, payload에 원하는 값을 넣어 state를 변경시킨다.
       dispatch({type: SUBPRICE, payload: e.target.value});
       console.log(subPriceResult);
    }

    const pointsOnClickHandler = (e) => {

        const inputText = document.getElementById("usingPoints");
        console.log(inputText);

        if(e.target.checked){
            inputText.value = holdingPoints; 
            dispatch({type:SUBPRICE, payload: holdingPoints});
        } else {
            inputText.value="" 
            dispatch({type:SUBPRICE, payload: 0});
        }
    }

    /*E-mail*/
    const emailOnChangeHandler1 = (e) => {
        dispatch({type: EMAILID, payload: e.target.value});
        dispatch({type:EMAIL, payload: emailIdResult.emailId + "@" + emailDomainResult.emailDomain});

    }

    const emailOnChangeHandler2 = (e) => {
        dispatch({type:EMAILDOMAIN, payload: e.target.value});
        dispatch({type:EMAIL, payload: emailIdResult.emailId + "@" + emailDomainResult.emailDomain});
    }

    const emailOnClickHandler = (e) => {
        const inputText = document.getElementById("orderEmailDomain");
        const domain = document.getElementById("orderEmailDomainOption");

        inputText.value = domain.value;

        dispatch({type:EMAILDOMAIN, payload: domain.value});
        dispatch({type:EMAIL, payload: emailIdResult.emailId + "@" + emailDomainResult.emailDomain});
    }

    console.log(emailResult.email);

    function paymentButtonOnChangeHandler(){
        window.location.href="/payment";
    }
    function cancelButtonOnChangeHandler(){
        window.location.href="/boardgame/list";
    }

    var finalPrice = TOTALPRICE - subPriceResult.subPrice;

    return(

        <div>
            <h3>주문 상세 내역</h3>
            <hr/>
            <table className='orderInfoTable'>

                <thead>
                <tr className='orderInfoHeader'>
                    <th width="600">상품/옵션 정보</th>
                    <th>수량</th>
                    <th>상품 금액</th>
                    <th>적립 포인트</th>
                    <th>합계 금액</th>
                </tr>
                 </thead>

                <tbody>
                {arr.map(list=>
                <tr align="center" className='orderInfoContent'>
                    <td width = "500" height="100"  >{list.info}</td>
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
                <table className='InfoTable'>
                
                <tbody>
                <tr> <td className='InfoFirstColumn'>*주문하시는 분  </td> <td className='InfoSecondColumn'><input name="orderName" className='InputBox'/></td> </tr>

                <tr><td className='InfoFirstColumn'> 전화번호 </td> <td className='InfoSecondColumn'><input name="orderTelephone" className='InputBox'/></td></tr>

                <tr><td className='InfoFirstColumn'>*휴대전화 번호 </td><td className='InfoSecondColumn'><input name="orderPhoneNum" className='InputBox'/></td></tr>

                <tr><td className='InfoFirstColumn'>이메일 </td>
                    <td className='InfoSecondColumn'>
                     <input name="orderEmailId" className='InputBox' value={emailIdResult.emailId} onChange={emailOnChangeHandler1}/>
                     @
                     <input id="orderEmailDomain" className='InputBox' value={emailDomainResult.emailDomain} onChange={emailOnChangeHandler2}/>

                        <select id="orderEmailDomainOption" className='ordererOptionBox' onClick={emailOnClickHandler}>
                            <option value=""> 직접입력</option>
                            <option value="gmail.com">gmail.com</option>
                            <option value="naver.com">naver.com</option>
                            <option value="daum.com">daum.com</option>
                            <option value="hanmail.com">hanmail.com</option>
                        </select>
                     </td></tr>
                </tbody>
                
                </table>
            </div>

            <div>
                <h3>배송정보</h3>
                <hr/>
                <table className='InfoTable' >
                    <tbody>
                        <tr>
                            <td className='InfoFirstColumn' >배송지 확인</td>
                            <td className='InfoSecondColumn'> &nbsp; &nbsp; 
                            <input  type="radio" name="deliveryLocation" value="default"/>기본배송지 &nbsp; &nbsp; 
                            <input type="radio" name="deliveryLocation" value="last"/>최근배송지  &nbsp; &nbsp; 
                            <input type="radio" name="deliveryLocation" value="direct"/>직접입력 &nbsp; &nbsp; 
                            <input type="radio" name="deliveryLocation" value="sameAsOrder"/>주문자정보와동일&nbsp; &nbsp; 
                            </td>
                        </tr>
                        <tr>
                            <td className='InfoFirstColumn'>*받으시는 분</td>
                            <td className='InfoSecondColumn'><input name="deliveryName" className='InputBox'/></td>
                        </tr>
                        <tr>
                            <td className='InfoFirstColumn'>*받으실 곳</td>
                            <td className='InfoSecondColumn'><input name="deliveryLocation" className='InputBox'/> <button>우편번호 검색</button> <br/>
                                <input name="deliveryLocation" className='InputBox'/><input name="deliveryLocationDetail" placeholder="상세주소입력" className='InputBox'/>
                            </td>
                        </tr>
                        <tr>
                            <td className='InfoFirstColumn'>전화번호</td>
                            <td className='InfoSecondColumn'><input name="deliveryTelephone" className='InputBox'/></td>
                        </tr>
                        <tr>
                            <td className='InfoFirstColumn'>*휴대전화 번호</td>
                            <td className='InfoSecondColumn'><input name="deliveryPhoneNum" className='InputBox'/></td>
                        </tr>
                        <tr>
                            <td className='InfoFirstColumn'>배송메시지</td>
                            <td className='InfoSecondColumn'><input name="deliveryMessage"className='InputBox'/></td>
                        </tr>
                        <tr>
                            <td className='InfoFirstColumn'>배송지 저장</td>
                            <td className='InfoSecondColumn'><input name="saveLocation" type="checkBox" /> 배송지 저장</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div>
                <h3>결제정보</h3>
                <hr/>
                <table className='infoTable'>
                    <tbody>
                        <tr>
                            <td className='InfoFirstColumn'>상품 합계 금액</td>
                            <td className='InfoSecondColumn'> {TOTALPRICE.toLocaleString()}원</td>
                        </tr>
                        <tr>
                            <td className='InfoFirstColumn'>배송비</td>
                            <td className='InfoSecondColumn'>{deliveryCharge.toLocaleString()}원</td>
                        </tr>
                        <tr>
                            <td className='InfoFirstColumn'>적립</td>
                            <td className='InfoSecondColumn'>적립 마일리지 : {TOTALPOINTS.toLocaleString()}원
                            </td>
                        </tr>
                        <tr>
                            <td className='InfoFirstColumn'>쿠폰사용</td>
                            <td className='InfoSecondColumn'><button>쿠폰조회 및 사용</button></td>
                        </tr>
                        <tr>
                            <td className='InfoFirstColumn'>포인트 사용</td>
                            <td className='InfoSecondColumn'>
                                <input id="usingPoints" name="usingPointsAmount" onChange={pointsOnChangeHandler} className='InputBox'/> 
                                원  &nbsp; &nbsp;
                                <input id="useAllPoints" type="checkBox" onClick={pointsOnClickHandler} value={holdingPoints}/>전액사용하기 
                                (보유마일리지: {holdingPoints}원)
                            <br/>
                            <p >*100원 이상 부터 사용 가능</p>
                            </td>

                        </tr>
                        <tr>
                            <td className='InfoFirstColumn'>최종 결제 금액</td>
                            <td className='InfoSecondColumn'>{finalPrice}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className='terms'>
            <input id="terms" type="checkBox"/>(필수) 구매약관에 동의합니다.
            </div>
            
            <div className='finalButton'>
            <button onClick={cancelButtonOnChangeHandler} className="cancelButton">취소</button>
            <button onClick={paymentButtonOnChangeHandler} className="paymentButton"> 결제하기 </button>
            </div>


        </div>
    );
}
export default OrderInfo;
