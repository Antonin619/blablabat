import { useEffect, useState, useContext } from 'react';
import '../App.scss';
import { ArtisansService } from '../services/artisan.service';
import '../style/panel.scss'
import { AuthContext } from '../contexts/auth.context';
import { Link, useNavigate } from 'react-router-dom';
import devis from "../assets/images/wallet.svg"
import messages from "../assets/images/messages.svg"  
import projets from "../assets/images/projets.svg"
import archive from "../assets/images/archive.svg"
import pen from "../assets/images/pen.svg"

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
    <img src={devis} alt="illustration devis" />
    <div className="card-label"><Link to="/devis">
        <h2>Mes devis</h2>
      </Link></div>
    </div>
    <div className="panel-card">
    <img src={messages} alt="illustration devis" />
    <div className="card-label"><Link to="/messagerie">
      <h2>Messagerie</h2>
      </Link></div>
    </div>
    
    <div className="panel-card">
    <img src={pen} alt="illustration devis" />
    <div className="card-label"><Link to="/informations">
      <h2>Modifier mes informations</h2>
      </Link></div>
    </div>
    
    <div className="panel-card">
    <img src={archive} alt="illustration devis" />
    <div className="card-label"><Link to="/archives">
      <h2>Archives</h2>
      </Link></div>
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
              <img src={projets} alt="illustration devis" />
              <div className="card-label"><Link to="/projets">
                <h2>Mes projets</h2>
              </Link></div>
            </div>
            </div>
            </>
          )
        }
    </div>
  );
}

export default Panel;