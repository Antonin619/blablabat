import { useEffect, useState, useContext } from 'react';
import '../App.scss';
import { ArtisansService } from '../services/artisan.service';
import '../style/panel.scss'
import { AuthContext } from '../contexts/auth.context';

function Panel() {
  const { user, isReady } = useContext(AuthContext);
  return (
    <div className="Panel">
      <header className="Panel-header">
        <h1>Mon compte</h1>
      </header>

<section className="Panel-section">
  <div className="Panel-Cards">
    <div className="Panel-Card">
      <a href="/informations">
      <h2>Modifier mes informations</h2>
      </a>
    </div>
    <div className="Panel-Card">
      <a href="/devis">
        <h2>Mes devis</h2>
      </a>
      
    </div>
    <div className="Panel-Card">
    <a href="/messagerie">
      <h2>Messagerie</h2>
      </a>
    </div>
  </div>

</section>

      {
          user.role.name === "craftman" && (
            <>
            <h1>Espace Artisan</h1>
            <div className="Panel-Card">
              <a href="/projets">
              <h2>Mes projets</h2>
              </a>
            </div>
            </>
          )
        }
    </div>
  );
}

export default Panel;