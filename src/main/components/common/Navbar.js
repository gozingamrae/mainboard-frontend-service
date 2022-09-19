import style from "../../static/css/navbar.module.css";
import hiddenStyle from "../../static/css/navbar-hidden.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [openNavbar, setOpenNavbar] = useState(false);

  const onMouseOverHandler = () => {
    setOpenNavbar(true);
  };

  const onMouseOutHandler = () => {
    setOpenNavbar(false);
  };

  // onMouseOver Event 발생 시 스타일 변경
  const frame1HoverHandler = () => {
    document.getElementById("element1").style.backgroundColor = "#FFF";
    document.getElementById("button1").style.color = "#7332C3";

    document.getElementById("button6").style.opacity = "0.4";
    document.getElementById("button10").style.opacity = "0.4";
    document.getElementById("button14").style.opacity = "0.4";
    document.getElementById("button18").style.opacity = "0.4";
    document.getElementById("button22").style.opacity = "0.4";
    document.getElementById("button26").style.opacity = "0.4";
    document.getElementById("button30").style.opacity = "0.4";
    document.getElementById("button34").style.opacity = "0.4";

    document.getElementById("button7").style.opacity = "0.4";
    document.getElementById("button11").style.opacity = "0.4";
    document.getElementById("button15").style.opacity = "0.4";
    document.getElementById("button19").style.opacity = "0.4";

    document.getElementById("button8").style.opacity = "0.4";
    document.getElementById("button12").style.opacity = "0.4";
    document.getElementById("button16").style.opacity = "0.4";
    document.getElementById("button20").style.opacity = "0.4";
    document.getElementById("button24").style.opacity = "0.4";
  };

  const frame2HoverHandler = () => {
    document.getElementById("element2").style.backgroundColor = "#FFF";
    document.getElementById("button2").style.color = "#7332C3";

    document.getElementById("button5").style.opacity = "0.4";

    document.getElementById("button7").style.opacity = "0.4";
    document.getElementById("button11").style.opacity = "0.4";
    document.getElementById("button15").style.opacity = "0.4";
    document.getElementById("button19").style.opacity = "0.4";

    document.getElementById("button8").style.opacity = "0.4";
    document.getElementById("button12").style.opacity = "0.4";
    document.getElementById("button16").style.opacity = "0.4";
    document.getElementById("button20").style.opacity = "0.4";
    document.getElementById("button24").style.opacity = "0.4";
  };

  const frame3HoverHandler = () => {
    document.getElementById("element3").style.backgroundColor = "#FFF";
    document.getElementById("button3").style.color = "#7332C3";

    document.getElementById("button5").style.opacity = "0.4";

    document.getElementById("button6").style.opacity = "0.4";
    document.getElementById("button10").style.opacity = "0.4";
    document.getElementById("button14").style.opacity = "0.4";
    document.getElementById("button18").style.opacity = "0.4";
    document.getElementById("button22").style.opacity = "0.4";
    document.getElementById("button26").style.opacity = "0.4";
    document.getElementById("button30").style.opacity = "0.4";
    document.getElementById("button34").style.opacity = "0.4";

    document.getElementById("button8").style.opacity = "0.4";
    document.getElementById("button12").style.opacity = "0.4";
    document.getElementById("button16").style.opacity = "0.4";
    document.getElementById("button20").style.opacity = "0.4";
    document.getElementById("button24").style.opacity = "0.4";
  };

  const frame4HoverHandler = () => {
    document.getElementById("element4").style.backgroundColor = "#FFF";
    document.getElementById("button4").style.color = "#7332C3";

    document.getElementById("button5").style.opacity = "0.4";

    document.getElementById("button6").style.opacity = "0.4";
    document.getElementById("button10").style.opacity = "0.4";
    document.getElementById("button14").style.opacity = "0.4";
    document.getElementById("button18").style.opacity = "0.4";
    document.getElementById("button22").style.opacity = "0.4";
    document.getElementById("button26").style.opacity = "0.4";
    document.getElementById("button30").style.opacity = "0.4";
    document.getElementById("button34").style.opacity = "0.4";

    document.getElementById("button7").style.opacity = "0.4";
    document.getElementById("button11").style.opacity = "0.4";
    document.getElementById("button15").style.opacity = "0.4";
    document.getElementById("button19").style.opacity = "0.4";
  };

  // onMouseOut Event 발생 시 스타일 변경
  const frame1HoverOutHandler = () => {
    document.getElementById("element1").style.backgroundColor = "#7332C3";
    document.getElementById("button1").style.color = "#EBE9F2";

    document.getElementById("button6").style.opacity = "1.0";
    document.getElementById("button10").style.opacity = "1.0";
    document.getElementById("button14").style.opacity = "1.0";
    document.getElementById("button18").style.opacity = "1.0";
    document.getElementById("button22").style.opacity = "1.0";
    document.getElementById("button26").style.opacity = "1.0";
    document.getElementById("button30").style.opacity = "1.0";
    document.getElementById("button34").style.opacity = "1.0";

    document.getElementById("button7").style.opacity = "1.0";
    document.getElementById("button11").style.opacity = "1.0";
    document.getElementById("button15").style.opacity = "1.0";
    document.getElementById("button19").style.opacity = "1.0";

    document.getElementById("button8").style.opacity = "1.0";
    document.getElementById("button12").style.opacity = "1.0";
    document.getElementById("button16").style.opacity = "1.0";
    document.getElementById("button20").style.opacity = "1.0";
    document.getElementById("button24").style.opacity = "1.0";
  };

  const frame2HoverOutHandler = () => {
    document.getElementById("element2").style.backgroundColor = "#7332C3";
    document.getElementById("button2").style.color = "#EBE9F2";

    document.getElementById("button5").style.opacity = "1.0";

    document.getElementById("button7").style.opacity = "1.0";
    document.getElementById("button11").style.opacity = "1.0";
    document.getElementById("button15").style.opacity = "1.0";
    document.getElementById("button19").style.opacity = "1.0";

    document.getElementById("button8").style.opacity = "1.0";
    document.getElementById("button12").style.opacity = "1.0";
    document.getElementById("button16").style.opacity = "1.0";
    document.getElementById("button20").style.opacity = "1.0";
    document.getElementById("button24").style.opacity = "1.0";
  };

  const frame3HoverOutHandler = () => {
    document.getElementById("element3").style.backgroundColor = "#7332C3";
    document.getElementById("button3").style.color = "#EBE9F2";

    document.getElementById("button5").style.opacity = "1.0";

    document.getElementById("button6").style.opacity = "1.0";
    document.getElementById("button10").style.opacity = "1.0";
    document.getElementById("button14").style.opacity = "1.0";
    document.getElementById("button18").style.opacity = "1.0";
    document.getElementById("button22").style.opacity = "1.0";
    document.getElementById("button26").style.opacity = "1.0";
    document.getElementById("button30").style.opacity = "1.0";
    document.getElementById("button34").style.opacity = "1.0";

    document.getElementById("button8").style.opacity = "1.0";
    document.getElementById("button12").style.opacity = "1.0";
    document.getElementById("button16").style.opacity = "1.0";
    document.getElementById("button20").style.opacity = "1.0";
    document.getElementById("button24").style.opacity = "1.0";
  };

  const frame4HoverOutHandler = () => {
    document.getElementById("element4").style.backgroundColor = "#7332C3";
    document.getElementById("button4").style.color = "#EBE9F2";

    document.getElementById("button5").style.opacity = "1.0";

    document.getElementById("button6").style.opacity = "1.0";
    document.getElementById("button10").style.opacity = "1.0";
    document.getElementById("button14").style.opacity = "1.0";
    document.getElementById("button18").style.opacity = "1.0";
    document.getElementById("button22").style.opacity = "1.0";
    document.getElementById("button26").style.opacity = "1.0";
    document.getElementById("button30").style.opacity = "1.0";
    document.getElementById("button34").style.opacity = "1.0";

    document.getElementById("button7").style.opacity = "1.0";
    document.getElementById("button11").style.opacity = "1.0";
    document.getElementById("button15").style.opacity = "1.0";
    document.getElementById("button19").style.opacity = "1.0";
  };

  // 일반 화면에서는 onMouseOver Event 발생 시 보드게임 필터 목록이 나타난다.
  // 보드게임 목록 화면에서는 Event가 발생하지 않아도 화면에 고정되어 나타난다.
  // 일반 화면에서는 단순히 필터 목록에서 필터를 누르면 보드게임 목록화면으로 이동하지만,
  // 보드게임 목록 화면에서는 State 관리를 통해 필터 정보를 저장하고 필터를 누적할 수 있도록 한다.
  const hiddenNavbar = () => {
    if (openNavbar) {
      return (
        <div
          className={hiddenStyle.layout}
          onMouseOver={onMouseOverHandler}
          onMouseOut={onMouseOutHandler}
        >
          <div className={hiddenStyle.frame}>
            <div
              id="frame1"
              className={hiddenStyle.frame1}
              onMouseOver={frame1HoverHandler}
              onMouseOut={frame1HoverOutHandler}
            >
              <div id="element1" className={hiddenStyle.element1}>
                <div id="button1" className={hiddenStyle.button1}>
                  전체상품
                </div>
              </div>
              <div className={hiddenStyle.element5}>
                <NavLink
                  id="button5"
                  to="/boardgame/list" // 보드게임 전체 목록 URL
                  className={hiddenStyle.button5}
                >
                  전체상품
                </NavLink>
              </div>
              <div className={hiddenStyle.element9} />
              <div className={hiddenStyle.element13} />
              <div className={hiddenStyle.element17} />
              <div className={hiddenStyle.element21} />
              <div className={hiddenStyle.element25} />
              <div className={hiddenStyle.element29} />
              <div className={hiddenStyle.element33} />
            </div>
            <div
              id="frame2"
              className={hiddenStyle.frame2}
              onMouseOver={frame2HoverHandler}
              onMouseOut={frame2HoverOutHandler}
            >
              <div id="element2" className={hiddenStyle.element2}>
                <div id="button2" className={hiddenStyle.button2}>
                  장르
                </div>
              </div>
              <div className={hiddenStyle.element6}>
                <NavLink
                  id="button6"
                  to="/boardgame/list?category=strategy" // 보드게임 전체 목록 - 장르 - 전략 URL
                  className={hiddenStyle.button6}
                >
                  전략
                </NavLink>
              </div>
              <div className={hiddenStyle.element10}>
                <NavLink
                  id="button10"
                  to="/boardgame/list?category=reasoning" // 보드게임 전체 목록 - 장르 - 추리 URL
                  className={hiddenStyle.button10}
                >
                  추리
                </NavLink>
              </div>
              <div className={hiddenStyle.element14}>
                <NavLink
                  id="button14"
                  to="/boardgame/list?category=mentality" // 보드게임 전체 목록 - 장르 - 심리 URL
                  className={hiddenStyle.button14}
                >
                  심리
                </NavLink>
              </div>
              <div className={hiddenStyle.element18}>
                <NavLink
                  id="button18"
                  to="/boardgame/list?category=collaboration" // 보드게임 전체 목록 - 장르 - 협동 URL
                  className={hiddenStyle.button18}
                >
                  협동
                </NavLink>
              </div>
              <div className={hiddenStyle.element22}>
                <NavLink
                  id="button22"
                  to="/boardgame/list?category=negotiation" // 보드게임 전체 목록 - 장르 - 협상 URL
                  className={hiddenStyle.button22}
                >
                  협상
                </NavLink>
              </div>
              <div className={hiddenStyle.element26}>
                <NavLink
                  id="button26"
                  to="/boardgame/list?category=speed" // 보드게임 전체 목록 - 장르 - 순발력 URL
                  className={hiddenStyle.button26}
                >
                  순발력
                </NavLink>
              </div>
              <div className={hiddenStyle.element30}>
                <NavLink
                  id="button30"
                  to="/boardgame/list?category=team" // 보드게임 전체 목록 - 장르 - 팀전 URL
                  className={hiddenStyle.button30}
                >
                  팀전
                </NavLink>
              </div>
              <div className={hiddenStyle.element34}>
                <NavLink
                  id="button34"
                  to="/boardgame/list?category=personal" // 보드게임 전체 목록 - 장르 - 개인전 URL
                  className={hiddenStyle.button34}
                >
                  개인전
                </NavLink>
              </div>
            </div>
            <div
              id="frame3"
              className={hiddenStyle.frame3}
              onMouseOver={frame3HoverHandler}
              onMouseOut={frame3HoverOutHandler}
            >
              <div id="element3" className={hiddenStyle.element3}>
                <div id="button3" className={hiddenStyle.button3}>
                  난이도
                </div>
              </div>
              <div className={hiddenStyle.element7}>
                <NavLink
                  id="button7"
                  to="/boardgame/list?category=easy" // 보드게임 전체 목록 - 난이도 - 쉬움 URL
                  className={hiddenStyle.button7}
                >
                  쉬움
                </NavLink>
              </div>
              <div className={hiddenStyle.element11}>
                <NavLink
                  id="button11"
                  to="/boardgame/list?category=medium" // 보드게임 전체 목록 - 난이도 - 중간 URL
                  className={hiddenStyle.button11}
                >
                  중간
                </NavLink>
              </div>
              <div className={hiddenStyle.element15}>
                <NavLink
                  id="button15"
                  to="/boardgame/list?category=hard" // 보드게임 전체 목록 - 난이도 - 어려움 URL
                  className={hiddenStyle.button15}
                >
                  어려움
                </NavLink>
              </div>
              <div className={hiddenStyle.element19}>
                <NavLink
                  id="button19"
                  to="/boardgame/list?category=very-hard" // 보드게임 전체 목록 - 난이도 - 매우 어려움 URL
                  className={hiddenStyle.button19}
                >
                  매우 어려움
                </NavLink>
              </div>
              <div className={hiddenStyle.element23}></div>
              <div className={hiddenStyle.element27}></div>
              <div className={hiddenStyle.element31}></div>
              <div className={hiddenStyle.element35}></div>
            </div>
            <div
              id="frame4"
              className={hiddenStyle.frame4}
              onMouseOver={frame4HoverHandler}
              onMouseOut={frame4HoverOutHandler}
            >
              <div id="element4" className={hiddenStyle.element4}>
                <div id="button4" className={hiddenStyle.button4}>
                  플레이타임
                </div>
              </div>
              <div className={hiddenStyle.element8}>
                <NavLink
                  id="button8"
                  to="/boardgame/list?category=interval1" // 보드게임 전체 목록 - 플레이타임 - 30분 이하 URL
                  className={hiddenStyle.button8}
                >
                  30분 이하
                </NavLink>
              </div>
              <div className={hiddenStyle.element12}>
                <NavLink
                  id="button12"
                  to="/boardgame/list?category=interval2" // 보드게임 전체 목록 - 플레이타임 - 30분~1시간 URL
                  className={hiddenStyle.button12}
                >
                  30분~1시간
                </NavLink>
              </div>
              <div className={hiddenStyle.element16}>
                <NavLink
                  id="button16"
                  to="/boardgame/list?category=interval3" // 보드게임 전체 목록 - 플레이타임 - 1시간~2시간 URL
                  className={hiddenStyle.button16}
                >
                  1~2시간
                </NavLink>
              </div>
              <div className={hiddenStyle.element20}>
                <NavLink
                  id="button20"
                  to="/boardgame/list?category=interval4" // 보드게임 전체 목록 - 플레이타임 - 2시간~3시간 URL
                  className={hiddenStyle.button20}
                >
                  2~3시간
                </NavLink>
              </div>
              <div className={hiddenStyle.element24}>
                <NavLink
                  id="button24"
                  to="/boardgame/list?category=interval5" // 보드게임 전체 목록 - 플레이타임 - 3시간 이상 URL
                  className={hiddenStyle.button24}
                >
                  3시간 이상
                </NavLink>
              </div>
              <div className={hiddenStyle.element28}></div>
              <div className={hiddenStyle.element32}></div>
              <div className={hiddenStyle.element36}></div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <>
      <div className={style.layout}>
        <div className={style.line1} />
        <div className={style.framebox1}>
          <NavLink
            to="/boardgame/list" // 보드게임 전체 목록 URL
            className={style.frame1}
            onMouseOver={onMouseOverHandler}
            onMouseOut={onMouseOutHandler}
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
          to="/main" // 이벤트 URL
          className={style.frame3}
        >
          <div className={style.button3}>
            이벤트
            <br />
            (수정 필요)
          </div>
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
          <div className={style.button7}>
            1:1문의 <br />
            (수정 필요)
          </div>
        </NavLink>
        <div className={style.line8} />
      </div>
      {hiddenNavbar()}
    </>
  );
}

export default Navbar;
