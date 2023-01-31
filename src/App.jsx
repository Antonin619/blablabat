import { Routes, Route, Navigate } from 'react-router-dom'
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
import AuthContextProvider, { AuthContext } from './contexts/auth.context';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import { useContext } from 'react';
import Loader from './components/Loader';
import ProjectsPage from './pages/ProjectsPage';
import LogoutPage from './pages/LogoutPage';

function AppWrapper() {
  return (
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  );
}

function App() {
  const { isAuthenticated, isReady, user, isLoading } = useContext(AuthContext);

  console.log('isAuthenticated [App.tsx] :>> ', isAuthenticated);
  console.log('isReady [App.tsx] :>> ', isReady);

  if (isLoading || !isReady) {
    return <Loader />;
  }

  return (
    <div className='App'>
    <Header/>
    <div className="app-content">
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      
      {
        !isAuthenticated ? (
          <>
            <Route path="/login" element={<LoginForm/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
          </>
        ) : (
          <>
            <Route path="/login" element={<Navigate to="/panel" />} />
            <Route path="/register" element={<Navigate to="/panel" />} />
          </>
        )
      }

      <Route path="/inscription-client" element={<InscriptionClient/>}/>
      <Route path="/inscription-pro" element={<InscriptionPro/>}/>

      <Route path="/cgv-mentions-legales" element={<Legal/>}/>

      {
        isAuthenticated ? (
          <>
            <Route path="/logout" element={<LogoutPage />} />
            <Route path="/informations" element={<InformationsPage />} />
            <Route path="/profil" element={<ProfilePage/>}/>
            <Route path="/projets" element={<ProjectsPage />} /> 
            <Route path="/panel" element={<Panel />} />
          </>
        ) : (
          <>
          </>
        )
      }
      


      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </div>
    <Footer/>
    </div>
  );
}

export default AppWrapper;
