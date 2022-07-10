import './styles/App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './components/HomePage/HomePage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import LoginPage from './components/LoginPage/LoginPage';
import ProductIdPage from './components/ProductIdPage/ProductIdPage';
import FinishOrderPage from './components/FinishOrderPage/FinishOrderPage';
import FinishedOrderPage from './components/FinishOrderPage/FinishedOrderPage';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/produto/:id' element={<ProductIdPage/>} />
        <Route path='/finalizarpedido' element={<FinishOrderPage />} />
        <Route path='/pedidofinalizado/:orderId' element={<FinishedOrderPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
