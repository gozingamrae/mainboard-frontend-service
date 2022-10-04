import style from "../../static/css/header.module.css";
import { useNavigate, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  OFF_FILTER,
  SET_FILTER,
} from "../../../modules/mainModules/navbarModule";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const filter = useSelector((state) => state.hiddenNavbarReducer);
  const dispatch = useDispatch();

  const isLogin = window.localStorage.getItem('accessToken');

  console.log("islogin:", isLogin);

  useEffect(() => {
    // 검색으로 접근하지 않을 시 검색어 초기화
    if (!location.search.includes("?query="))
      document.getElementById("search").value = "";
  }, [location]);

  // console.log(location.search);
  // 검색 시 쿼리스트링 파라미터로 검색어 전달
  const searchByKeyword = () => {
    navigate(
      `/boardgame/list?query=${document.getElementById("search").value}`
    );
    dispatch({ type: OFF_FILTER });
    dispatch({ type: SET_FILTER, payload: "all" });
  };

  // 검색창에서 엔터 눌러도 검색 버튼 누른 것과 동일 효과
  const onKeyUpHandler = () => {
    if (window.event.keyCode == 13) {
      searchByKeyword();
    }
  };

  const onLogoutHandler = () => {
    window.localStorage.setItem("accessToken",null);
    console.log("logout");
    window.location.reload();
  }

  const userButton = (isLogin) => {
    if (isLogin == 'null' || isLogin == undefined || isLogin == null) {
      return (
        <>
          <NavLink className={style.loginButton} to="/login">
            로그인
          </NavLink>
          <NavLink className={style.button} to="/join">
            회원가입
          </NavLink>
        </>
      );
    } else {
      return (
        <>
          <NavLink className={style.button} to="/shoppingcart">
            장바구니
          </NavLink>
          <NavLink className={style.button} to="/mypage">
            마이페이지
          </NavLink>
          <button className={style.button} onClick={ onLogoutHandler }
          >
            로그아웃
          </button>
        </>
      );
    }
  };

  return (
    <div className={style.layout}>
      <NavLink
        className={style.logo}
        to="/"
      ></NavLink>
      <div className={style.searchArea}>
        <input
          id="search"
          className={style.searchBox}
          placeholder="검색어를 입력하세요"
          onKeyUp={onKeyUpHandler}
        />
        <div className={style.searchButton} onClick={searchByKeyword} />
      </div>
      <div className={style.userButton}>{userButton(isLogin)}</div>
    </div>
  );
}

export default Header;
