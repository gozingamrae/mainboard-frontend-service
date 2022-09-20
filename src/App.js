
import Login from "./user/pages/Login"; 
import Join from "./user/pages/Join";
import Agreement from "./user/pages/Agreement";
import InputInfo from "./user/pages/InputInfo";
import JoinResult from "./user/pages/JoinResult";
import FindId from "./user/pages/FindId";
import FindIdResult from "./user/pages/FindIdResult";
import FindPw from "./user/pages/FindPw";
import ChangePw from "./user/pages/ChangePw";
import ChangePwResult from "./user/pages/ChangePwResult"; 
import BoardgameInfo from './order/pages/Order';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Main from './main/Main';
<<<<<<< HEAD
import OrderInfo from './order/pages/OrderInfo';
import Notice from './community/Notice';
=======

>>>>>>> 9080fb2af5c5fa8415115a739e2ad19a4f456725

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/boardgame/list/:1" element = { <Order/> } />
    </Routes>
      <Routes>
        <Route path="/main" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="login" element={ <Login/> }/>
        </Route>
        <Route path="join">
          <Route index element={ <Join/> }/>
          <Route path="agreement"  element={ <Agreement/> }/>
          <Route path="inputinfo"  element={ <InputInfo/> }/>
          <Route path="result"  element={ <JoinResult/> }/>
        </Route>
        <Route path="findid">
          <Route index element={ <FindId/> }/>
          <Route path="result"  element={ <FindIdResult/> }/>
        </Route>
        <Route path="findpw" >
          <Route index element={ <FindPw/> }/>
          <Route path="changepw"  element={ <ChangePw/> }/>
          <Route path="result"  element={ <ChangePwResult/> }/>
        </Route>
<<<<<<< HEAD
        <Route path="/order-info" element = { <OrderInfo/> } />
        <Route path="/notice" element = { <Notice/> } /> 
        <Route path="/notice" element={<Layout />}><Route index element = { <Notice/> } /> </Route>
=======
>>>>>>> 9080fb2af5c5fa8415115a739e2ad19a4f456725
      </Routes>

    </BrowserRouter>
  );
}

export default App;
