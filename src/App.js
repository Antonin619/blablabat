import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import Panel from './pages/Panel';
import './App.scss'
import Header from './components/Header';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <div className='App'>
    <Header/>
    <Routes>
      
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/panel" element={<Panel/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
