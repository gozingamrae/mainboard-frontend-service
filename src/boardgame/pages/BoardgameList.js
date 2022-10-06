import { NavLink } from "react-router-dom";
import Pagenation from "../items/Pagenation";
import style from "../static/css/boardgame-list.module.css";

function BoardgameList() {
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

  return (
    <div className={style.layout}>
      <div>
        <div className={style.rowBox}>
          {exampleProduct.map((row, index) => {
            return index % 5 == 0 ? (
              <div className={style.row}>
                <div>
                  {exampleProduct.map((product, i) => {
                    return i >= index && i < index + 5 ? (
                      <NavLink
                        to={`/boardgame/list/${product.boardgameCode}`}
                        className={style.product}
                      >
                        <div className={style.imageBox}>
                          <img
                            className={style.image}
                            src={require(`../static/images/best${product.boardgameCode}.png`)}
                          />
                        </div>
                        <div className={style.info}>
                          <div className={style.boardgameName}>
                            {product.boardgameName}
                          </div>
                          <div className={style.boardgamePrice}>
                            {product.boardgamePrice
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원"}
                          </div>
                          <div className={style.category}>
                            <div>{product.boardgameTheme}</div>
                            <div>{product.boardgameLevel}</div>
                            <div>{product.boardgameTime}</div>
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
      <div className={style.pagenation}>
        <Pagenation />
      </div>
    </div>
  );
}

export default BoardgameList;
