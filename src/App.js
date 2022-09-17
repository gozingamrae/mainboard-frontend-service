import {BrowserRouter, Routes, Route} from "react-router-dom"; 
import Login from "./user/pages/Login"; 
import Join from "./user/pages/Join";
import Agreement from "./user/pages/Agreement";
import InputInfo from "./user/pages/InputInfo";
import SucessJoin from "./user/pages/SucessJoin";
import FindId from "./user/pages/FindId";
import FindIdResult from "./user/pages/FindIdResult";
import FindPwd from "./user/pages/FindPwd";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={ <Login/> }>
        </Route>
        <Route path="join"  element={ <Join/> }>
        </Route>
        <Route path="agreement"  element={ <Agreement/> }>
        </Route>
        <Route path="inputInfo"  element={ <InputInfo/> }>
        </Route>
        <Route path="successJoin"  element={ <SucessJoin/> }>
        </Route>
        <Route path="findId"  element={ <FindId/> }>
        </Route>
        <Route path="findIdResult"  element={ <FindIdResult/> }>
        </Route>
        <Route path="findPwd"  element={ <FindPwd/> }>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
