import style from "../../static/css/navbar.module.css";
import hiddenStyle from "../../static/css/hidden-navbar.module.css";
// import hiddenStyle from "../../static/css/navbar-hidden.module.css";
import { NavLink, useLocation, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ON_NAVBAR,
  OFF_NAVBAR,
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
      { type: "value", name: "매우어려움", parameter: "very-hard" },
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
  const useFilter = useSelector((state) => state.hiddenNavbarReducer);
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("category"));
  console.log(window.location.search);

  useEffect(() => {
    window.scrollTo(0, 0);
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
                    {menuList.map((menu) => {
                      return menu.type == "value" && menu.name != "" ? (
                        <NavLink
                          id="menu"
                          className={hiddenStyle.menu}
                          to={
                            location.pathname.includes("/boardgame/list")
                              ? `${location.pathname}${location.search}&category=${menu.parameter}`
                              : `/boardgame/list?query=${"search"}&category=${
                                  menu.parameter
                                }`
                          }
                        >
                          {menu.name}
                        </NavLink>
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
              location.pathname != "/boardgame/list"
                ? "/boardgame/list?search=&category=all"
                : location.pathname + location.search
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
          to="/main" // 1대1문의 URL
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

// <div className={hiddenStyle.layout}>
//   <div
//     className={hiddenStyle.frame}
//     onMouseEnter={onHiddenNavbar}
//     onMouseLeave={offHiddennNavbar}
//   >
//     <div
//       id="frame1"
//       className={hiddenStyle.frame1}
//       onMouseOver={frame1HoverHandler}
//       onMouseOut={frame1HoverOutHandler}
//     >
//       <div
//         id="element1"
//         className={hiddenStyle.element1}
//         onMouseEnter={onHiddenNavbar}
//       >
//         <div
//           id="button1"
//           className={hiddenStyle.button1}
//           onMouseEnter={onHiddenNavbar}
//         >
//           전체상품
//         </div>
//       </div>
//       <div className={hiddenStyle.element5}>
//         <NavLink
//           id="button5"
//           to="/boardgame/list" // 보드게임 전체 목록 URL
//           className={hiddenStyle.button5}
//         >
//           전체상품
//         </NavLink>
//       </div>
//       <div className={hiddenStyle.element9} />
//       <div className={hiddenStyle.element13} />
//       <div className={hiddenStyle.element17} />
//       <div className={hiddenStyle.element21} />
//       <div className={hiddenStyle.element25} />
//       <div className={hiddenStyle.element29} />
//       <div className={hiddenStyle.element33} />
//     </div>
//     <div
//       id="frame2"
//       className={hiddenStyle.frame2}
//       onMouseOver={frame2HoverHandler}
//       onMouseOut={frame2HoverOutHandler}
//     >
//       <div id="element2" className={hiddenStyle.element2}>
//         <div id="button2" className={hiddenStyle.button2}>
//           장르
//         </div>
//       </div>
//       <div className={hiddenStyle.element6}>
//         <NavLink
//           id="button6"
//           to="/boardgame/list?category=strategy" // 보드게임 전체 목록 - 장르 - 전략 URL
//           className={hiddenStyle.button6}
//         >
//           전략
//         </NavLink>
//       </div>
//       <div className={hiddenStyle.element10}>
//         <NavLink
//           id="button10"
//           to="/boardgame/list?category=reasoning" // 보드게임 전체 목록 - 장르 - 추리 URL
//           className={hiddenStyle.button10}
//         >
//           추리
//         </NavLink>
//       </div>
//       {useFilter.mentality ? (
//         <div className={hiddenStyle.element14}>
//           <NavLink
//             id="button14"
//             to="/boardgame/list?category=mentality" // 보드게임 전체 목록 - 장르 - 심리 URL
//             className={hiddenStyle.button14}
//           >
//             심리
//           </NavLink>
//         </div>
//       ) : (
//         <div
//           className={hiddenStyle.element14} // 테스트 필요
//           style={{ backgroundColor: "#e0daf1" }}
//         >
//           <NavLink
//             id="button14"
//             to="/boardgame/list?category=mentality" // 보드게임 전체 목록 - 장르 - 심리 URL
//             className={hiddenStyle.button14}
//           >
//             심리
//           </NavLink>
//           <div className={hiddenStyle.filterCancelButton} />
//         </div>
//       )}
//       <div className={hiddenStyle.element18}>
//         <NavLink
//           id="button18"
//           to="/boardgame/list?category=collaboration" // 보드게임 전체 목록 - 장르 - 협동 URL
//           className={hiddenStyle.button18}
//         >
//           협동
//         </NavLink>
//       </div>
//       <div className={hiddenStyle.element22}>
//         <NavLink
//           id="button22"
//           to="/boardgame/list?category=negotiation" // 보드게임 전체 목록 - 장르 - 협상 URL
//           className={hiddenStyle.button22}
//         >
//           협상
//         </NavLink>
//       </div>
//       <div className={hiddenStyle.element26}>
//         <NavLink
//           id="button26"
//           to="/boardgame/list?category=speed" // 보드게임 전체 목록 - 장르 - 순발력 URL
//           className={hiddenStyle.button26}
//         >
//           순발력
//         </NavLink>
//       </div>
//       <div className={hiddenStyle.element30}>
//         <NavLink
//           id="button30"
//           to="/boardgame/list?category=team" // 보드게임 전체 목록 - 장르 - 팀전 URL
//           className={hiddenStyle.button30}
//         >
//           팀전
//         </NavLink>
//       </div>
//       <div className={hiddenStyle.element34}>
//         <NavLink
//           id="button34"
//           to="/boardgame/list?category=personal" // 보드게임 전체 목록 - 장르 - 개인전 URL
//           className={hiddenStyle.button34}
//         >
//           개인전
//         </NavLink>
//       </div>
//     </div>
//     <div
//       id="frame3"
//       className={hiddenStyle.frame3}
//       onMouseOver={frame3HoverHandler}
//       onMouseOut={frame3HoverOutHandler}
//     >
//       <div id="element3" className={hiddenStyle.element3}>
//         <div id="button3" className={hiddenStyle.button3}>
//           난이도
//         </div>
//       </div>
//       <div className={hiddenStyle.element7}>
//         <NavLink
//           id="button7"
//           to="/boardgame/list?category=easy" // 보드게임 전체 목록 - 난이도 - 쉬움 URL
//           className={hiddenStyle.button7}
//         >
//           쉬움
//         </NavLink>
//       </div>
//       <div className={hiddenStyle.element11}>
//         <NavLink
//           id="button11"
//           to="/boardgame/list?category=medium" // 보드게임 전체 목록 - 난이도 - 중간 URL
//           className={hiddenStyle.button11}
//         >
//           중간
//         </NavLink>
//       </div>
//       <div className={hiddenStyle.element15}>
//         <NavLink
//           id="button15"
//           to="/boardgame/list?category=hard" // 보드게임 전체 목록 - 난이도 - 어려움 URL
//           className={hiddenStyle.button15}
//         >
//           어려움
//         </NavLink>
//       </div>
//       <div className={hiddenStyle.element19}>
//         <NavLink
//           id="button19"
//           to="/boardgame/list?category=very-hard" // 보드게임 전체 목록 - 난이도 - 매우 어려움 URL
//           className={hiddenStyle.button19}
//         >
//           매우 어려움
//         </NavLink>
//       </div>
//       <div className={hiddenStyle.element23}></div>
//       <div className={hiddenStyle.element27}></div>
//       <div className={hiddenStyle.element31}></div>
//       <div className={hiddenStyle.element35}></div>
//     </div>
//     <div
//       id="frame4"
//       className={hiddenStyle.frame4}
//       onMouseOver={frame4HoverHandler}
//       onMouseOut={frame4HoverOutHandler}
//     >
//       <div id="element4" className={hiddenStyle.element4}>
//         <div id="button4" className={hiddenStyle.button4}>
//           플레이타임
//         </div>
//       </div>
//       <div className={hiddenStyle.element8}>
//         <NavLink
//           id="button8"
//           to="/boardgame/list?category=interval1" // 보드게임 전체 목록 - 플레이타임 - 30분 이하 URL
//           className={hiddenStyle.button8}
//         >
//           30분 이하
//         </NavLink>
//       </div>
//       <div className={hiddenStyle.element12}>
//         <NavLink
//           id="button12"
//           to="/boardgame/list?category=interval2" // 보드게임 전체 목록 - 플레이타임 - 30분~1시간 URL
//           className={hiddenStyle.button12}
//         >
//           30분~1시간
//         </NavLink>
//       </div>
//       <div className={hiddenStyle.element16}>
//         <NavLink
//           id="button16"
//           to="/boardgame/list?category=interval3" // 보드게임 전체 목록 - 플레이타임 - 1시간~2시간 URL
//           className={hiddenStyle.button16}
//         >
//           1~2시간
//         </NavLink>
//       </div>
//       <div className={hiddenStyle.element20}>
//         <NavLink
//           id="button20"
//           to="/boardgame/list?category=interval4" // 보드게임 전체 목록 - 플레이타임 - 2시간~3시간 URL
//           className={hiddenStyle.button20}
//         >
//           2~3시간
//         </NavLink>
//       </div>
//       <div className={hiddenStyle.element24}>
//         <NavLink
//           id="button24"
//           to="/boardgame/list?category=interval5" // 보드게임 전체 목록 - 플레이타임 - 3시간 이상 URL
//           className={hiddenStyle.button24}
//         >
//           3시간 이상
//         </NavLink>
//       </div>
//       <div className={hiddenStyle.element28}></div>
//       <div className={hiddenStyle.element32}></div>
//       <div className={hiddenStyle.element36}></div>
//     </div>
//   </div>
// </div>
