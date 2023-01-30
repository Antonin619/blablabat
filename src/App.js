import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import Panel from './pages/Panel';
import './App.scss'

function App() {
  return (
    <div class='App'>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/panel" element={<Panel/>}/>
    </Routes>
    </div>
  );
}

export default App;
