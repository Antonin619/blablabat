import { useEffect, useState } from 'react';
import '../App.scss';

function Panel() {

  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [artisan, setArtisan] = useState(false);
  
   const getArtisan = () => {
     fetch('http://localhost:3000/api/artisan')
     .then((response) => response.json())
     .then((data) => {
       setArtisan(data);
     })
     .catch((error) => {
       setError(error);
     });
   }

   useEffect(() => {
    getArtisan();
  }, []);

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
          artisan && (
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