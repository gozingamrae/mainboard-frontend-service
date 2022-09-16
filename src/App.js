import {BrowserRouter, Routes, Route} from "react-router-dom"; 
import Login from "./user/pages/Login"; 
import Join from "./user/pages/Join";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={ <Login/> }>
        </Route>
        <Route path="join"  element={ <Join/> }>
    
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
