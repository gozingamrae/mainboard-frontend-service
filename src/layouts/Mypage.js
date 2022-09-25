import { Outlet } from "react-router-dom";
import Navbar from "../mypage/components/Navbar";
import "./css/style.css";

function Layout() {
  return (
    <div className="display">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
