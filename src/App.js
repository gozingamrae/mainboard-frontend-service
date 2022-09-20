import { BrowserRouter, Routes, Route} from 'react-router-dom';
import BoardgameInfo from './order/pages/boardgameInfo.js';
import OrderInfo from './order/pages/order-info.js';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/boardgame/list/:1" element = { <BoardgameInfo/> } />
      <Route path="/order-info" element = { <OrderInfo/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
