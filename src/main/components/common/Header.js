import style from "../../static/css/header.module.css";
import { useNavigate, NavLink } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

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
      <NavLink className={style.logo} to="/main"></NavLink>
      <div>
        <input
          id="search"
          className={style.searchBox}
          placeholder="검색어를 입력하세요"
          onKeyUp={onKeyUpHandler}
        />
        <div className={style.searchButton} onClick={searchByKeyword} />
      </div>
      <NavLink className={style.login} to="/login">
        로그인
      </NavLink>
      <NavLink className={style.join} to="/join">
        회원가입
      </NavLink>
    </div>
  );
}

export default Header;
