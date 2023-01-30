import '../App.scss';
import '../style/404.scss'
import logo from '../assets/images/logo.svg'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function NotFound() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
    <div className="not-found">
        <div className="top-content"><h3>404 : Not Found</h3></div>
        <div className="middle-content"><img src={logo} alt="logo blablabat" /><p className='not-found-question-mark'>?</p></div>
        <div className="bottom-content">
            Oups, perdu ?
            <Link to="/"><button className="redirect-button">Retourner à l'accueil</button></Link>
        </div>
    </div>
  );
}

export default NotFound;