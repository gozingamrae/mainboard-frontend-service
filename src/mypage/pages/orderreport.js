import OrderReportTable from "./orderreportTable"
import "../css/orderreport-style.css"

function OrderReport(){
    return (
        <div className="componentBox">
            <div className="box">주문조회</div>

                <div className="box" style={{backgroundColor: "#F8F5FF"}}>

                    <div className="subBox">
                        <h1> 주문 조회 기간</h1>
                        <img src="/common/calendar.png" alt="ERROR" />
                        <input className="dateInput" type="date" name="cuponReportTypeRadio"/>  &nbsp; ~ &nbsp;
                        <img src="/common/calendar.png" alt="ERROR" />
                        <input className="dateInput" type="date" name="cuponReportTypeRadio"/>
                    </div>

                    <div className="subBox">
                    <h1>상품 번호</h1>
                    <input type="text" />
                    </div>

                    

                    <div className="subBox" style={{justifyContent: "center"}}>
                    <button className="searchButton" style={{backgroundColor: "#EBE9F9", color: "gray"}}>초기화</button> &nbsp; &nbsp;
                    <button className="searchButton">검색</button>
                    </div>

                </div>

                <div className="box">
                    <OrderReportTable/>
                </div>



        </div>
    )
}

export default OrderReport;