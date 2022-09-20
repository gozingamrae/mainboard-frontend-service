import style from "../../static/css/footer.module.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (  
    <div className={style.layout}>
      <div className={style.textBox}>
        <NavLink className={style.text1} to="/policy/service">
          이용약관
        </NavLink>
        <NavLink className={style.text2} to="/policy/privacy">
          개인정보처리방침
        </NavLink>
        <NavLink className={style.text3} to="/business-info">
          사업자정보
        </NavLink>
        <NavLink className={style.text4} to="/help">
          고객센터
        </NavLink>
      </div>
        <div className={style.phone}>010-1234-4567</div>
        <div className={style.copyright}>
          c 2022 고진감래 Inc. All rights reserved
        </div>
    </div>
  );
}

export default Footer;
