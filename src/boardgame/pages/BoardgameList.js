import { NavLink } from "react-router-dom";
import { useState , useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";

import Pagenation from "../items/Pagenation";
import style from "../static/css/boardgame-list.module.css";
import {callProductListAPI,
    callSearchProductListAPI 
} from "../../apis/boardgame/ProductAPICalls";

function BoardgameList() {

  const data = useSelector(state => state.productReducer); 
  const products = data.data;
  console.log(data);
  const nav = useNavigate();
  const dispatch = useDispatch();
  console.log("상품 api 결과", products)
  const [currentPage, setCurrentPage] = useState(1);
  let productN = 5;
  productN = data?.pageInfo?.totalCount != undefined ? Number(data.pageInfo.totalCount) : 5;

  const pageButton = () => {
    let pageArray = [];
    for (let i = 1; i <= productN / 15 +1 ; i++) 
      {currentPage==i? pageArray.push(<h3 style={{color : "red"}}>{i}</h3>) : pageArray.push(<h3 onClick={()=>{setCurrentPage(i)}}>{i}</h3>)}
    return pageArray;
  }

  useEffect(
    () => {         
        dispatch(callProductListAPI({
            currentPage: currentPage
        }));        
    }
    ,[currentPage]
);

  return (
    <div className={style.layout}>
      <div>
        <div className={style.rowBox}>
          {products == undefined? null : products.map((row, index) => {
            return index % 5 == 0 ? (
              <div className={style.row}>
                <div>
                  {products.map((product, i) => {
                    return i >= index && i < index + 5 ? (
                      <NavLink
                        to={`/boardgame/list/${product.boardgameTypeCode}`}
                        className={style.product}
                      >
                        <div className={style.imageBox}>
                          <img
                            className={style.image}
                            src={product.productImageUrl}
                          />
                        </div>
                        <div className={style.info}>
                          <div className={style.boardgameName}>
                            {product.boardgameName}
                          </div>
                          <div className={style.boardgamePrice}>
                            {product.defaultRentalFee
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원"}
                          </div>
                          <div className={style.category}>
                            <div>{product.categoryName}</div>
                            <div>어려움</div>
                            <div>1시간 이상</div>
                          </div>
                        </div>
                      </NavLink>
                    ) : null;
                  })}
                </div>
              </div>
            ) : null;
          })}
        </div>
      </div>
      <div className={style.pagenation} style={{justifyContent : "space-between", display:"flex", width:"300px"}}>
        <img src="/common/left_arrow.png" onClick={()=>{setCurrentPage(currentPage!=1 ? currentPage-1 : 1)}}/>
        {pageButton()}
        <img src="/common/right_arrow.png" onClick={()=>{setCurrentPage(currentPage!=productN ? currentPage+1 : productN)}}/>
      </div>
    </div>
  );
}

export default BoardgameList;
