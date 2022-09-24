import style from "../static/css/pagenation.module.css";

function Pagenation() {
  return (
    <div className={style.pagenation}>
      <div>좌측 버튼</div>
      <div>--숫자--</div>
      <div>우측 버튼</div>
    </div>
  );
}

export default Pagenation;
