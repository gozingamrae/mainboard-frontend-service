import {BrowserRouter, Routes, Route} from "react-router-dom"; 
import Login from "./user/pages/Login"; 
import Join from "./user/pages/Join";
import Agreement from "./user/pages/Agreement";

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

      </Routes>
    </BrowserRouter>
  );
}

export default App;
