import '../App.scss';
import '../style/messagerie.scss'
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Messagerie() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  let history = useNavigate();

  return (
    <div className="messagerie">
        <Link to="/"> <button onClick={() => history(-1)} className='back-button' type="button"><i className='fa-solid fa-arrow-left'></i>Retour</button></Link>

        <h1>Messagerie</h1>
        <div className="messagerie-card">
            <h4 className='card-name'>Manolo le rigolo</h4>
            <h4 className="card-nb">4</h4>
            <div className="red-dot"></div>
        </div>
        <div className="messagerie-card">
            <h4 className='card-name'>Etienne Mbappe</h4>
            <h4 className="card-nb">12</h4>
            <div className="red-dot"></div>
        </div>
        <div className="messagerie-card">
            <h4 className='card-name'>Claudo François</h4>
            <h4 className="card-nb">0</h4>
        </div>
        <div className="messagerie-card">
            <h4 className='card-name'>Marise Lepen</h4>
            <h4 className="card-nb">5</h4>
            <div className="red-dot"></div>
        </div>
    </div>
  );
}

export default Messagerie;