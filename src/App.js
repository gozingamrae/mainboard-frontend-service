import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Main from './main/Main';
import OrderInfo from './order/pages/OrderInfo';
import Notice from './community/Notice';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Layout />}>
          <Route index element={<Main />} />
        </Route>
        <Route path="/order-info" element = { <OrderInfo/> } />
        <Route path="/notice" element = { <Notice/> } /> 
        <Route path="/notice" element={<Layout />}><Route index element = { <Notice/> } /> </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
