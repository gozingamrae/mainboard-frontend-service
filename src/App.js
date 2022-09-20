
import BoardgameInfo from './order/pages/Order';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Main from './main/Main';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/boardgame/list/:1" element = { <Order/> } />
    </Routes>
      <Routes>
        <Route path="/main" element={<Layout />}>
          <Route index element={<Main />} />
        </Route>
        <Route path="/order-info" element = { <OrderInfo/> } />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
