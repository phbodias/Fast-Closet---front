import './styles/App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './components/HomePage/HomePage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import LoginPage from './components/LoginPage/LoginPage';

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
