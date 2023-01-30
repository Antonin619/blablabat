import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import Panel from './pages/Panel';
import './App.scss'
import Header from './components/Header';
import Footer from './components/Footer';
import RegisterPage from './pages/RegisterPage';
import InformationsPage from './pages/InformationsPage';

function App() {
  return (
    <div className='App'>
    <Header/>
    <div className="app-content">
    <Routes>
      
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/panel" element={<Panel/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/panel" element={<Panel/>}/>
      <Route path="/informations" element={<InformationsPage/>}/>
      
      
    </Routes>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
