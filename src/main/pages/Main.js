import { NavLink } from "react-router-dom";
import style from "../static/css/main.module.css";

function Main() {
  return (
    <div>
      <div className={style.bannerLayout} />
      <div className={style.bestTitleLayout}>
        <NavLink
          to="/boardgame/list?category=best" // BEST 상품 URL
          className={style.bestTitle}
        >
          BEST PRODUCTS
        </NavLink>
      </div>
      {/* BEST 5 일단은 하드코딩 하였음. 나중에 정보 불러오기*/}
      <div className={style.bestProduct}>
        <div className={style.productFiveLayout}>
          <NavLink
            className={style.productLayout}
            to="/boardgame/list/베스트1보드게임종류코드"
          >
            <div className={style.best1Image} />
            <div className={style.info}>
              <div className={style.name}>스플렌더</div>
              <div className={style.price}>4,000원</div>
              <div className={style.category}>
                <div className={style.themeBox}>
                  <div className={style.theme}>전략</div>
                </div>
                <div className={style.levelBox}>
                  <div className={style.level}>매우 어려움</div>
                </div>
                <div className={style.timeBox}>
                  <div className={style.time}>3시간 이상</div>
                </div>
              </div>
            </div>
          </NavLink>
          <NavLink
            className={style.productLayout}
            to="/boardgame/list/베스트2보드게임종류코드"
          >
            <div className={style.best2Image} />
            <div className={style.info}>
              <div className={style.name}>다빈치 코드</div>
              <div className={style.price}>4,000원</div>
              <div className={style.category}>
                <div className={style.themeBox}>
                  <div className={style.theme}>전략</div>
                </div>
                <div className={style.levelBox}>
                  <div className={style.level}>매우 어려움</div>
                </div>
                <div className={style.timeBox}>
                  <div className={style.time}>3시간 이상</div>
                </div>
              </div>
            </div>
          </NavLink>
          <NavLink
            className={style.productLayout}
            to="/boardgame/list/베스트3보드게임종류코드"
          >
            <div className={style.best3Image} />
            <div className={style.info}>
              <div className={style.name}>루미큐브</div>
              <div className={style.price}>4,000원</div>
              <div className={style.category}>
                <div className={style.themeBox}>
                  <div className={style.theme}>전략</div>
                </div>
                <div className={style.levelBox}>
                  <div className={style.level}>매우 어려움</div>
                </div>
                <div className={style.timeBox}>
                  <div className={style.time}>3시간 이상</div>
                </div>
              </div>
            </div>
          </NavLink>
          <NavLink
            className={style.productLayout}
            to="/boardgame/list/베스트4보드게임종류코드"
          >
            <div className={style.best4Image} />
            <div className={style.info}>
              <div className={style.name}>블리츠</div>
              <div className={style.price}>4,000원</div>
              <div className={style.category}>
                <div className={style.themeBox}>
                  <div className={style.theme}>순발력</div>
                </div>
                <div className={style.levelBox}>
                  <div className={style.level}>쉬움</div>
                </div>
                <div className={style.timeBox}>
                  <div className={style.time}>30분 이하</div>
                </div>
              </div>
            </div>
          </NavLink>
          <NavLink
            className={style.productLayout}
            to="/boardgame/list/베스트5보드게임종류코드"
          >
            <div className={style.best5Image} />
            <div className={style.info}>
              <div className={style.name}>클루</div>
              <div className={style.price}>4,000원</div>
              <div className={style.category}>
                <div className={style.themeBox}>
                  <div className={style.theme}>추리</div>
                </div>
                <div className={style.levelBox}>
                  <div className={style.level}>어려움</div>
                </div>
                <div className={style.timeBox}>
                  <div className={style.time}>30분~1시간</div>
                </div>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
      <div className={style.pickTitleLayout}>
        <NavLink
          to="/boardgame/list?category=recommendation" // 추천 상품 URL
          className={style.pickTitle}
        >
          MDs PICK
        </NavLink>
      </div>
      {/* MDs PICK 5 일단은 하드코딩 하였음. 나중에 정보 불러오기*/}
      <div className={style.pickProduct}>
        <div className={style.productFiveLayout}>
          <NavLink
            className={style.productLayout}
            to="/boardgame/list/추천1보드게임종류코드"
          >
            <div className={style.pick1Image} />
            <div className={style.info}>
              <div className={style.name}>스플렌더</div>
              <div className={style.price}>4,000원</div>
              <div className={style.category}>
                <div className={style.themeBox}>
                  <div className={style.theme}>전략</div>
                </div>
                <div className={style.levelBox}>
                  <div className={style.level}>매우 어려움</div>
                </div>
                <div className={style.timeBox}>
                  <div className={style.time}>3시간 이상</div>
                </div>
              </div>
            </div>
          </NavLink>
          <NavLink
            className={style.productLayout}
            to="/boardgame/list/추천2보드게임종류코드"
          >
            <div className={style.pick2Image} />
            <div className={style.info}>
              <div className={style.name}>다빈치 코드</div>
              <div className={style.price}>4,000원</div>
              <div className={style.category}>
                <div className={style.themeBox}>
                  <div className={style.theme}>전략</div>
                </div>
                <div className={style.levelBox}>
                  <div className={style.level}>매우 어려움</div>
                </div>
                <div className={style.timeBox}>
                  <div className={style.time}>3시간 이상</div>
                </div>
              </div>
            </div>
          </NavLink>
          <NavLink
            className={style.productLayout}
            to="/boardgame/list/추천3보드게임종류코드"
          >
            <div className={style.pick3Image} />
            <div className={style.info}>
              <div className={style.name}>루미큐브</div>
              <div className={style.price}>4,000원</div>
              <div className={style.category}>
                <div className={style.themeBox}>
                  <div className={style.theme}>전략</div>
                </div>
                <div className={style.levelBox}>
                  <div className={style.level}>매우 어려움</div>
                </div>
                <div className={style.timeBox}>
                  <div className={style.time}>3시간 이상</div>
                </div>
              </div>
            </div>
          </NavLink>
          <NavLink
            className={style.productLayout}
            to="/boardgame/list/추천4보드게임종류코드"
          >
            <div className={style.pick4Image} />
            <div className={style.info}>
              <div className={style.name}>블리츠</div>
              <div className={style.price}>4,000원</div>
              <div className={style.category}>
                <div className={style.themeBox}>
                  <div className={style.theme}>순발력</div>
                </div>
                <div className={style.levelBox}>
                  <div className={style.level}>쉬움</div>
                </div>
                <div className={style.timeBox}>
                  <div className={style.time}>30분 이하</div>
                </div>
              </div>
            </div>
          </NavLink>
          <NavLink
            className={style.productLayout}
            to="/boardgame/list/추천5보드게임종류코드"
          >
            <div className={style.pick5Image} />
            <div className={style.info}>
              <div className={style.name}>클루</div>
              <div className={style.price}>4,000원</div>
              <div className={style.category}>
                <div className={style.themeBox}>
                  <div className={style.theme}>추리</div>
                </div>
                <div className={style.levelBox}>
                  <div className={style.level}>어려움</div>
                </div>
                <div className={style.timeBox}>
                  <div className={style.time}>30분~1시간</div>
                </div>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
      <div className={style.backImage} />
    </div>
  );
}

export default Main;
