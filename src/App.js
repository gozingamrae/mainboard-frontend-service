import { BrowserRouter, Routes, Route} from 'react-router-dom';
import OrderInfo from './order/pages/OrderInfo';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/order" element = { <OrderInfo/> } />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
