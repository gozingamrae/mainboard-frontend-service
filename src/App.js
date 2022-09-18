import { BrowserRouter, Routes, Route} from 'react-router-dom';
import OrderInfo from './order/pages/Order';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/order" element = { <Order/> } />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
