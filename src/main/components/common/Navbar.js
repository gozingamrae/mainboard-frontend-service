import style from "../../static/css/navbar.module.css";
import hiddenStyle from "../../static/css/hidden-navbar.module.css";
// import hiddenStyle from "../../static/css/navbar-hidden.module.css";
import { NavLink, useLocation, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ON_NAVBAR,
  OFF_NAVBAR,
  SET_FILTER,
  OFF_FILTER,
} from "../../../modules/mainModules/navbarModule";

function Navbar() {
  const navbarInfo = [
    { name: "보드게임", url: "/boardgame/list" },
    { name: "BEST", url: "/boardgame/list/category:best" },
    { name: "이벤트", url: "/event" },
    { name: "이용안내", url: "/policy/service" },
    { name: "공지사항", url: "/notice" },
    { name: "FAQ", url: "/faq" },
    { name: "1:1문의", url: "/" },
  ];

  const hiddenNavbarInfo = [
    [
      { type: "category", name: "전체상품", parameter: "" },
      { type: "value", name: "전체상품", parameter: "all" },
      { type: "value", name: "", parameter: "" },
      { type: "value", name: "", parameter: "" },
      { type: "value", name: "", parameter: "" },
      { type: "value", name: "", parameter: "" },
      { type: "value", name: "", parameter: "" },
      { type: "value", name: "", parameter: "" },
      { type: "value", name: "", parameter: "" },
    ],
    [
      { type: "category", name: "장르", parameter: "theme" },
      { type: "value", name: "전략", parameter: "strategy" },
      { type: "value", name: "추리", parameter: "reasoning" },
      { type: "value", name: "심리", parameter: "mentality" },
      { type: "value", name: "협동", parameter: "collaboration" },
      { type: "value", name: "협상", parameter: "negotiation" },
      { type: "value", name: "순발력", parameter: "speed" },
      { type: "value", name: "팀전", parameter: "team" },
      { type: "value", name: "개인전", parameter: "personal" },
    ],
    [
      { type: "category", name: "난이도", parameter: "level" },
      { type: "value", name: "쉬움", parameter: "easy" },
      { type: "value", name: "중간", parameter: "medium" },
      { type: "value", name: "어려움", parameter: "hard" },
      { type: "value", name: "매우어려움", parameter: "veryHard" },
      { type: "value", name: "", parameter: "" },
      { type: "value", name: "", parameter: "" },
      { type: "value", name: "", parameter: "" },
      { type: "value", name: "", parameter: "" },
    ],
    [
      { type: "category", name: "플레이타임", parameter: "time" },
      { type: "value", name: "30분 이하", parameter: "interval1" },
      { type: "value", name: "30분~1시간", parameter: "interval2" },
      { type: "value", name: "1~2시간", parameter: "interval3" },
      { type: "value", name: "2~3시간", parameter: "interval4" },
      { type: "value", name: "3시간 이상", parameter: "interval5" },
      { type: "value", name: "", parameter: "" },
      { type: "value", name: "", parameter: "" },
      { type: "value", name: "", parameter: "" },
    ],
  ];

  const location = useLocation(); // URL 변경 감지하여 URL 정보 제공
  const openNavbar = useSelector((state) => state.navbarReducer); // Navbar 열고 닫기를 담당하는 state
  const filter = useSelector((state) => state.hiddenNavbarReducer);
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get("category"));
  // console.log(window.location.search);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (location.pathname != "/boardgame/list") {
      dispatch({ type: OFF_FILTER });
    }
    // 검색 시 필터가 아직 유지 됨(개선 사항)
  }, [location]);

  const dispatch = useDispatch();
  //console.log(location.pathname + location.search, "리렌더링");
  // console.log(useFilter);

  const onHiddenNavbar = () => {
    dispatch({ type: ON_NAVBAR });
  };

  const offHiddennNavbar = () => {
    dispatch({ type: OFF_NAVBAR });
  };

  // const setFilter = (menu) => {
  //   dispatch({ type: SET_FILTER, payload: menu });
  // };

  // 일반 화면에서는 onMouseOver Event 발생 시 보드게임 필터 목록이 나타난다.
  // 보드게임 목록 화면에서는 Event가 발생하지 않아도 화면에 고정되어 나타난다.
  // 일반 화면에서는 단순히 필터 목록에서 필터를 누르면 보드게임 목록화면으로 이동하지만,
  // 보드게임 목록 화면에서는 State 관리를 통해 필터 정보를 저장하고 필터를 누적할 수 있도록 한다.

  const hiddenNavbar = () => {
    const hidden = (
      <div id="hiddenLayout" className={hiddenStyle.layout}>
        <div
          className={hiddenStyle.hiddenLayout}
          onMouseEnter={onHiddenNavbar}
          onMouseLeave={offHiddennNavbar}
        >
          <div className={hiddenStyle.rowBox}>
            {hiddenNavbarInfo.map((menuList) => {
              return (
                <div>
                  <div id="row" className={hiddenStyle.row}>
                    {menuList.map((menu, index) => {
                      return menu.type == "value" && menu.name != "" ? (
                        filter[menu.parameter] ? (
                          <NavLink
                            id="menu"
                            className={hiddenStyle.useMenu}
                            to={
                              location.search.includes("?query=")
                                ? location.pathname + location.search
                                : "/boardgame/list?query="
                            }
                            onClick={() => {
                              dispatch({
                                type: SET_FILTER,
                                payload: menu.parameter,
                              });
                            }}
                            style={{
                              backgroundColor: "#E0DAF1",
                            }}
                          >
                            <div className={hiddenStyle.cancelBox}>
                              <div />
                            </div>
                            {menu.name}
                          </NavLink>
                        ) : (
                          <NavLink
                            id="menu"
                            className={hiddenStyle.menu}
                            to={
                              location.search.includes("?query=")
                                ? location.pathname + location.search
                                : "/boardgame/list?query="
                            }
                            onClick={() => {
                              dispatch({
                                type: SET_FILTER,
                                payload: menu.parameter,
                              });
                            }}
                          >
                            {menu.name}
                          </NavLink>
                        )
                      ) : (
                        <div id="menu" className={hiddenStyle.menu}>
                          {menu.name}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );

    if (location.pathname == "/boardgame/list") {
      // 보드게임 목록 화면에서는 hover 스타일 해제 헤야 한다
      //console.log(document.querySelector("row"));
      if (document.getElementById("hiddenLayout")) {
        document.getElementById("hiddenLayout").style.position = "static";
      }
      return hidden;
    } else if (openNavbar.status) {
      return hidden;
    }
  };

  return (
    <>
      <div className={style.layout}>
        <div className={style.line1} />
        <div className={style.framebox1}>
          <NavLink
            to={
              location.search.includes("?query=")
                ? location.pathname + location.search
                : "/boardgame/list?query="
            } // 보드게임 전체 목록 URL
            className={style.frame1}
            onMouseEnter={onHiddenNavbar}
            onMouseLeave={offHiddennNavbar}
          >
            <div className={style.button1}>보드게임</div>
          </NavLink>
        </div>
        <div className={style.line2} />
        <NavLink
          to="/boardgame/list?category=best" // BEST 상품 URL
          className={style.frame2}
        >
          <div className={style.button2}>BEST</div>
        </NavLink>
        <div className={style.line3} />
        <NavLink
          to="/" // 이벤트 URL
          className={style.frame3}
        >
          <div className={style.button3}>이벤트</div>
        </NavLink>
        <div className={style.line4} />
        <NavLink
          to="/policy/service" // 이용 안내 URL
          className={style.frame4}
        >
          <div className={style.button4}>이용안내</div>
        </NavLink>
        <div className={style.line5} />
        <NavLink
          to="/notice" // 공지사항 URL
          className={style.frame5}
        >
          <div className={style.button5}>공지사항</div>
        </NavLink>
        <div className={style.line6} />
        <NavLink
          to="/faq" // FAQ URL
          className={style.frame6}
        >
          <div className={style.button6}>FAQ</div>
        </NavLink>
        <div className={style.line7} />

        <NavLink
          to="/" // 1대1문의 URL
          className={style.frame7}
        >
          <div className={style.button7}>1:1문의</div>
        </NavLink>
        <div className={style.line8} />
      </div>
      {hiddenNavbar()}
    </>
  );
}

export default Navbar;
