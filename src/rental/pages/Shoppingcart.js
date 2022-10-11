import "../css/Shoppingcart.css";

import { useEffect, useState } from "react";
import { useSelector, useDispatch, createStore } from "react-redux";
import { CHECK_ALL, CHECK_USE, CHECK_CART, CHECK_CHANGE} from "../../modules/userModules/userModule";
import { NavLink } from "react-router-dom";

// function check(state=0, action){
//     switch(action.type) {
//         case 'INCREMENT' : 
//             return state + 1;
//         case 'DECREMENT' : 
//             return state - 1;
//         default : 
//             return state;
//     }
// }



function Shoppingcart(){
    const exampleProduct = [
        {
            boardgameCode: 1,
            boardgameName: "스플렌더",
            boardgamePrice: 4000,
            boardgameTheme: "전략",
            boardgameLevel: "매우 어려움",
            boardgameTime: "3시간 이상",
        },
        {
            boardgameCode: 2,
            boardgameName: "다빈치 코드",
            boardgamePrice: 4000,
            boardgameTheme: "전략",
            boardgameLevel: "매우 어려움",
            boardgameTime: "3시간 이상",
        },
        {
            boardgameCode: 3,
            boardgameName: "루미큐브",
            boardgamePrice: 4000,
            boardgameTheme: "전략",
            boardgameLevel: "매우 어려움",
            boardgameTime: "3시간 이상",
        },
        {
            boardgameCode: 4,
            boardgameName: "블리츠",
            boardgamePrice: 4000,
            boardgameTheme: "순발력",
            boardgameLevel: "쉬움",
            boardgameTime: "30분 이하",
        },
        {
            boardgameCode: 5,
            boardgameName: "클루",
            boardgamePrice: 4000,
            boardgameTheme: "추리",
            boardgameLevel: "어려움",
            boardgameTime: "30분~1시간",
        },
    ];




    // const allHandler = (e) => {
        
    //     if(checkAll === checkUse) dispatch({type: CHECK_ALL, payload: e.target.value});
    //     dispatch({type: CHECK_ALL, payload: e.target.value});
    // }
    // const useHandler = (e) => {
    //     console.log(e.target.id)
    //     dispatch({type: CHECK_USE, payload: e.target.id});
    //     // console.log(checkCheck); 
    // }


    // useEffect(
    //     () => {
    //     if(checkAll === true && (checkUse === false)) dispatch({type:CHECK_USE})
    //     if(checkAll !== true && (checkUse === true)) dispatch({type:CHECK_USE})
    // },[checkUse]
    // )


    // 지희가 작성한 장바구니 체크박스 코드
    
    //체크 리스트 장바구니 개수만큼 초기화
    const isCheckData = [];
    exampleProduct.map((product, index)=>{isCheckData.push(false)});
    
    // state 생성
    // 전체 체크 state?
    const [isCheckAll, setIsCheckAll] =  useState(false);
    // 각 상품별 체크 상태 state
    const [ isCheck, setIsCheck] = useState(isCheckData);

    //체크 박스를 클릭하면 발생하는 이벤트 메소드
    const onChangeCheckList = (e)=>{
        //상품 갯수만큼 리스트를 만든다.
        const isCheckList = [];
        setIsCheckAll(!isCheckAll);
        exampleProduct.map((product, index)=>{isCheckList.push(!isCheckAll)});

        
        setIsCheck(isCheckList);
    }
    const onChangeCheck = (e)=>{
        const list = isCheck;
        list[e.target.id] = !isCheck[e.target.id];
        setIsCheck(list);
        console.log(isCheck);

        if(isCheckAll) setIsCheckAll(!isCheckAll);

    }

    return(
        <div className="shoppingcart">
            <div className="shoppingcart-header">
                <div className="shoppingcart-title">장바구니</div>
            </div>
            <div className="shoppingcart-body">
                <table className="shoppingcart-table">
                    {isCheckAll? 
                    <th><input className="shoppingcart-checkbox" type="checkbox" id="check-all" onChange={onChangeCheckList} checked></input></th> :
                        <th><input className="shoppingcart-checkbox" type="checkbox" id="check-all" onChange={onChangeCheckList} ></input></th>
                    }
                    <th>상품 / 옵션 정보</th>
                    <th>수량</th>
                    <th>상품금액</th>
                    <th>포인트</th>
                    <th>합계금액</th>
                    {/* 장바구니 리스트 */}
                            {exampleProduct.map((product, index) => {
                                return (
                                    <tr className="shoppingcart-items">
                                        { isCheck[index]? 
                                            <td><input  className="shoppingcart-checkbox" type="checkbox"  id={index} onChange={onChangeCheck} checked></input></td>:
                                            <td><input className="shoppingcart-checkbox" type="checkbox"  id={index} onChange={onChangeCheck}></input></td>
                                        }
                                    
                                    <tr>
                                        <td rowSpan={"2"}><img className="shoppingcart-image" src={require(`../static/images/best${product.boardgameCode}.png`)}/></td>
                                    <tr>
                                        <td className="shoppingcart-boardgamename">{product.boardgameName}</td>
                                    </tr>
                                    <tr className="shoppingcart-category">
                                        <td>{product.boardgameTheme}</td>
                                        <td>{product.boardgameLevel}</td>
                                        <td>{product.boardgameTime}</td>
                                    </tr>
                                    </tr>
                                        <td className="shoppingcart-count">1개</td>
                                        <td className="shoppingcart-price">4000원</td>
                                        <td className="shoppingcart-point">+200원</td>
                                        <td className="shoppingcart-allprice">4000</td>
                                    </tr>
                                )
                        })}
                </table>
                <div className="shoppingcart-footer">
                    <div className="shoppingcart-total">합계 8,000원</div>
                </div>

                <div className="agreement-btns input-submit">
                    <button className="delete">선택 상품 삭제</button>
                    <button className="wishlist">선택 상품 찜</button>
                    <button> 선택 상품 주문  </button>
                    <input type="submit" value="전체 상품 주문"/>
                </div>

            </div>
        </div>
    )

}

export default Shoppingcart;