import { NavLink } from "react-router-dom";
import mainStyle from "../static/css/main.module.css";

function Main() {
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

  return (
    exampleProduct && (
      <div className={mainStyle.layout}>
        <div className={mainStyle.bannerBox}>
          <div className={mainStyle.leftArrow}>
            <img src={require("../static/images/leftarrow.png")} />
          </div>
          <div className={mainStyle.banner} />
          <div className={mainStyle.rightArrow}>
            <img src={require("../static/images/rightarrow.png")} />
          </div>
        </div>
        <div className={mainStyle.bestBox}>
          <div className={mainStyle.titleBox}>
            <div className={mainStyle.title}>BEST PRODUCTS</div>
          </div>
          <div className={mainStyle.productBox}>
            {exampleProduct.map((product) => {
              return (
                <NavLink
                  to={`/boardgame/list/${product.boardgameCode}`}
                  className={mainStyle.product}
                >
                  <div className={mainStyle.imageBox}>
                    <img
                      className={mainStyle.image}
                      src={require(`../static/images/best${product.boardgameCode}.png`)}
                    />
                  </div>
                  <div className={mainStyle.info}>
                    <div className={mainStyle.boardgameName}>
                      {product.boardgameName}
                    </div>
                    <div className={mainStyle.boardgamePrice}>
                      {product.boardgamePrice
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원"}
                    </div>
                    <div className={mainStyle.category}>
                      <div>{product.boardgameTheme}</div>
                      <div>{product.boardgameLevel}</div>
                      <div>{product.boardgameTime}</div>
                    </div>
                  </div>
                </NavLink>
              );
            })}
          </div>
        </div>
        <div className={mainStyle.backImage} />
        <div className={mainStyle.pickBox}>
          <div className={mainStyle.titleBox}>
            <div className={mainStyle.title}>MDs PICK</div>
          </div>
          <div className={mainStyle.productBox}>
            {exampleProduct.map((product) => {
              return (
                <NavLink
                  to={`/boardgame/list/${product.boardgameCode}`}
                  className={mainStyle.product}
                >
                  <div className={mainStyle.imageBox}>
                    <img
                      className={mainStyle.image}
                      src={require(`../static/images/pick${product.boardgameCode}.png`)}
                    />
                  </div>
                  <div className={mainStyle.info}>
                    <div className={mainStyle.boardgameName}>
                      {product.boardgameName}
                    </div>
                    <div className={mainStyle.boardgamePrice}>
                      {product.boardgamePrice
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원"}
                    </div>
                    <div className={mainStyle.category}>
                      <div>{product.boardgameTheme}</div>
                      <div>{product.boardgameLevel}</div>
                      <div>{product.boardgameTime}</div>
                    </div>
                  </div>
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    )
  );
}

export default Main;
