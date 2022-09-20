import { BrowserRouter, Routes, Route } from "react-router-dom";
import BoardgameList from "./boardgame/pages/BoardgameList";
import Layout from "./layouts/Layout";
import Main from "./main/pages/Main";
import OrderInfo from "./order/pages/OrderInfo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/boardgame/list" element={<BoardgameList />} />
          <Route path="/order-info" element={<OrderInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
