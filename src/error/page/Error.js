import { NavLink } from "react-router-dom";

function Error() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "red", marginTop: "50px" }}>"404 NOT FOUND"</h1>
      <h1>생성되지 않은 페이지 혹은 연결되지 않은 URL입니다.</h1>
      <h1>
        <span style={{ color: "blue" }}>페이지 파일</span> 혹은
        <span style={{ color: "blue" }}> 라우터 연결을 </span>
        확인해주시기 바랍니다.
      </h1>
      <NavLink
        style={{
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          width: "120px",
          height: "40px",
          backgroundColor: "#A086F1",
          borderRadius: "0.7rem",
          border: "2px solid black",
          boxSizing: "border-box",
          color: "white",
        }}
        to={-1}
      >
        뒤로가기
      </NavLink>
    </div>
  );
}

export default Error;
