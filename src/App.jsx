import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import Panel from './pages/Panel';
import './App.scss'
import Header from './components/Header';
import Footer from './components/Footer';
import RegisterPage from './pages/RegisterPage';
import InformationsPage from './pages/InformationsPage';
import NotFound from './pages/404';
import Legal from './pages/Legal';
import InscriptionClient from './pages/InscriptionClient';
import InscriptionPro from './pages/InscriptionPro';
import LoginForm from './components/LoginForm';
import ProfilePage from './pages/ProfilePage';

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
      
      
      <Route path="*" element={<NotFound/>}/>
      <Route path="/cgv-mentions-legales" element={<Legal/>}/>
      <Route path="/inscription-client" element={<InscriptionClient/>}/>
      <Route path="/inscription-pro" element={<InscriptionPro/>}/>
      <Route path="/profil" element={<ProfilePage/>}/>


      <Route path="/login" element={<LoginForm/>}/>
    </Routes>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
