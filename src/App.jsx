import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import Panel from './pages/Panel';
import './App.scss'
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './pages/404';
import Legal from './pages/Legal';
import InscriptionClient from './pages/InscriptionClient';
import InscriptionPro from './pages/InscriptionPro';


function App() {
  return (
    <div className='App'>
    <Header/>
    <div className="app-content">
    <Routes>
      
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/panel" element={<Panel/>}/>
      <Route path="*" element={<NotFound/>}/>
      <Route path="/cgv-mentions-legales" element={<Legal/>}/>
      <Route path="/inscription-client" element={<InscriptionClient/>}/>
      <Route path="/inscription-pro" element={<InscriptionPro/>}/>

    </Routes>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
