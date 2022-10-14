import "../css/orderreport-style.css";

import { useEffect} from 'react';
import { callGetOrderListAPI } from "../../apis/order/OrderAPICalls";
import { callSearchOrderAPI } from '../../apis/order/OrderSearchAPICalls';
import { useSelector, useDispatch } from 'react-redux';

var myOrderList =[];

function OrderReportTable() {

    const orderList = useSelector(state => state.orderReducer);
    const orderSearch = useSelector(state => state.orderSearchReducer);
    const dispatch = useDispatch();
    console.log("=====state===")
    console.log(orderList);

    useEffect(
        ()=>
        {
             dispatch(callGetOrderListAPI());
             console.log("==effect")
             console.log(orderList);

             dispatch(callSearchOrderAPI());
             console.log("==eserch")
             console.log(orderSearch);
        },
        []
    );

    for(var i = 0; i < orderList.length; i++) {

    if(orderList[i].memberCode=="41"){
        myOrderList[i] = orderList[i];
        console.log("if문 들어옴");
    } 
}

     console.log("===OrderListMYMYMYMYMY");
     console.log(myOrderList);

    return orderList && (
        <div className="box">
            <table>
                <tr><th>주문번호</th><th>주문금액</th><th>결제수단</th><th>포인트사용금액</th><th>주문날짜</th><th>회원번호</th><th>배송정보</th></tr>
                {myOrderList.map(list => {
                    return(
                        <tr>
                            <td>{list.orderId}</td>
                            <td>{list.orderAmount}</td>
                            <td>{list.paymentMethod}</td>
                            <td>{list.pointsUsedAmount}</td>
                            <td>{list.orderDate}</td>
                            <td>{list.memberCode}</td>
                            <td><button>배송정보</button></td>
                        </tr>
                    )
                })
            
            }
            </table>

            <div className="pageButtonBox">
                <img src="/common/left_arrow.png"/>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <img src="/common/right_arrow.png"/>
            </div>
            
        </div>
    )

}
export default OrderReportTable;