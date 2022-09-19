import {BrowserRouter, Routes, Route} from "react-router-dom"; 
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
import Layout from './layouts/Layout';
import Main from './main/Main';
import OrderInfo from './order/pages/OrderInfo';

function App() {
  return (
    <BrowserRouter>
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
