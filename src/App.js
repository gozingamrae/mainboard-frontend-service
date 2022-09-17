import {BrowserRouter, Routes, Route} from "react-router-dom"; 
import Login from "./user/pages/Login"; 
import Join from "./user/pages/Join";
import Agreement from "./user/pages/Agreement";
import InputInfo from "./user/pages/InputInfo";
import SucessJoin from "./user/pages/SucessJoin";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
