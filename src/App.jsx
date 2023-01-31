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
import AuthContextProvider, { AuthContext } from './contexts/auth.context';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import { useContext } from 'react';
import Loader from './components/Loader';

function AppWrapper() {
  return (
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  );
}

function App() {
  const { isAuthenticated, isReady } = useContext(AuthContext);

  console.log('isAuthenticated [App.tsx] :>> ', isAuthenticated);
  console.log('isReady [App.tsx] :>> ', isReady);

  if (!isReady) return <Loader />;

  return (
    <div className='App'>
    <Header/>
    <div className="app-content">
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      
      <Route path="/login" element={<LoginForm/>}/>
      <Route path="/register" element={<RegisterPage/>}/>

      <Route path="/inscription-client" element={<InscriptionClient/>}/>
      <Route path="/inscription-pro" element={<InscriptionPro/>}/>

      <Route path="/informations" element={<InformationsPage/>}/>
      <Route path="/cgv-mentions-legales" element={<Legal/>}/>

      <Route path="/panel" element={<AuthenticatedRoute  component={Panel}/>}/>
      
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </div>
    <Footer/>
    </div>
  );
}

export default AppWrapper;
