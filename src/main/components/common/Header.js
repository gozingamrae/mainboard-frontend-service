import style from "../../static/css/header.module.css";
import { useNavigate, NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // 검색으로 접근하지 않을 시 검색어 초기화
    if (!location.search.includes("?search="))
      document.getElementById("search").value = "";
  }, [location]);

  console.log(location.search);
  // 검색 시 쿼리스트링 파라미터로 검색어 전달
  const searchByKeyword = () => {
    navigate(
      `/boardgame/list?search=${document.getElementById("search").value}`
    );
  };

  // 검색창에서 엔터 눌러도 검색 버튼 누른 것과 동일 효과
  const onKeyUpHandler = () => {
    if (window.event.keyCode == 13) {
      searchByKeyword();
    }
  };

  return (
    <div className={style.layout}>
      <NavLink className={style.logo} to="/"></NavLink>
      <div className={style.searchArea}>
        <input
          id="search"
          className={style.searchBox}
          placeholder="검색어를 입력하세요"
          onKeyUp={onKeyUpHandler}
        />
        <div className={style.searchButton} onClick={searchByKeyword} />
      </div>
      <div className={style.userButton}>
        <NavLink className={style.login} to="/login">
          로그인
        </NavLink>
        <NavLink className={style.join} to="/join">
          회원가입
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
