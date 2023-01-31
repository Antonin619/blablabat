import { useEffect, useState, useContext } from 'react';
import '../App.scss';
import { ArtisansService } from '../services/artisan.service';
import '../style/panel.scss'
import { AuthContext } from '../contexts/auth.context';
import { Link, useNavigate } from 'react-router-dom';

function Panel() {


  let history = useNavigate();

  const { user, isReady } = useContext(AuthContext);
  return (
    <div className="panel">
        <Link to="/"> <button onClick={() => history(-1)} className='back-button' type="button"><i className='fa-solid fa-arrow-left'></i>Retour</button></Link>

      <header className="panel-header">
        <h1>Mon compte</h1>
      </header>

<section className="panel-section">
  <div className="panel-cards">
  <div className="panel-card">
      <Link to="/devis">
        <h2>Mes devis</h2>
      </Link>
    </div>
    <div className="panel-card">
    <Link to="/messagerie">
      <h2>Messagerie</h2>
      </Link>
    </div>
    <div className="panel-card">
      <Link to="/informations">
      <h2>Modifier mes informations</h2>
      </Link>
    </div>
    
    <hr />
  </div>

</section>

      {
          
          user.role.name === "craftsman" && (
            <>
            <h1>Espace Artisan</h1>
            <div className="panel-cards">
            <div className="panel-card last">
              <a href="/projets">
              <h2>Mes projets</h2>
              </a>
            </div>
            </div>
            </>
          )
        }
    </div>
  );
}

export default Panel;