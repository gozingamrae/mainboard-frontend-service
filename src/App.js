import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./user/pages/Login";
import Join from "./user/pages/Join";
import Agreement from "./user/pages/Agreement";
import InputInfo from "./user/pages/InputInfo";
import JoinResult from "./user/pages/JoinResult";
import FindId from "./user/pages/FindId";
import FindIdResult from "./user/pages/FindIdResult";
import FindPw from "./user/pages/FindPw";
import ChangePw from "./user/pages/ChangePw";
import PaymentCompleted from "./payment/pages/payment-completed";
import ChangePwResult from "./user/pages/ChangePwResult";
import BoardgameInfo from "./order/pages/boardgameInfo";
import BoardgameList from "./boardgame/pages/BoardgameList";
import Layout from "./layouts/Layout";
import Main from "./main/pages/Main";
import OrderInfo from "./order/pages/order-info";
import DeliveryAddressList from "./mypage/pages/DeliveryAddressList";
import DeliveryAddressInsert from "./mypage/pages/DeliveryAddressInsert";
import DeliveryAddressUpdate from "./mypage/pages/DeliveryAddressUpdate";
import Mypage from "./layouts/Mypage";
import EditProfile from "./mypage/pages/EditProfile";
import Unregist from "./mypage/pages/Unregist";
import OrderReport from "./mypage/pages/orderreport";
import Error from "./error/page/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/boardgame/list" element={<BoardgameList />} />
          <Route path="/boardgame/list/:1" element={<BoardgameInfo />} />
          <Route path="/order-info" element={<OrderInfo />} />
          <Route path="/payment-completed" element={<PaymentCompleted />} />
          <Route path="login" element={<Login />} />
          <Route path="join">
            <Route index element={<Join />} />
            <Route path="agreement" element={<Agreement />} />
            <Route path="inputinfo" element={<InputInfo />} />
            <Route path="result" element={<JoinResult />} />
          </Route>
          <Route path="findid">
            <Route index element={<FindId />} />
            <Route path="result" element={<FindIdResult />} />
          </Route>
          <Route path="findpw">
            <Route index element={<FindPw />} />
            <Route path="changepw" element={<ChangePw />} />
            <Route path="result" element={<ChangePwResult />} />
          </Route>

          <Route path="mypage" element={<Mypage />}>
            <Route index element={<EditProfile />} />
            <Route path="unregist" element={<Unregist />} />
            <Route
              path="delivery-address-list"
              element={<DeliveryAddressList />}
            />
            <Route
              path="delivery-address-insert"
              element={<DeliveryAddressInsert />}
            />
            <Route
              path="delivery-address-update"
              element={<DeliveryAddressUpdate />}
            />
            <Route path="orderreport" element={<OrderReport />} />
          </Route>
          <Route path="/*" element={<Error />} exact />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
