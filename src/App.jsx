import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import Panel from './pages/Panel';
import './App.scss'
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
    <Header/>
    <div className="app-content">
    <Routes>
      
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/panel" element={<Panel/>}/>
      
    </Routes>
    </div>
    <Footer/>
    </div>
  );
}

export default App;