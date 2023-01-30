import { useEffect, useState } from 'react';
import '../App.scss';

function Panel() {

  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [artisan, setArtisan] = useState(true);
  
  const getUser = () => {
    fetch('http://localhost:3000/api/user')
    .then((response) => response.json())
    .then((data) => {
        setUser(data);
    })
    .catch((error) => {
        setError(error);
    });
    }


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
    fetch('/items/services', {
        credentials: 'same-origin',
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },

    })
        .then(response => response.json())
        .then(data => console.log(data));
  }, []);

  return (
    <div className="Informations">
      <header className="Informations-header">
        <h1>Mes informations</h1>
        <button>Modifier</button>
      </header>

<section className="Informations-section">
    <div className="Informations-Cards">
        
        {
          !artisan ? (<><div className="Informations-Card">
          <h2>Informations personnelles</h2>
          <p>Nom : </p>
          <p>Prénom : </p>
          <p>Email : </p>
      </div></>) : (
            <>
            <div className="Informations-Card">
            <h2>Informations professionnelles</h2>
            <p>Nom : </p>
            <p>Prénom : </p>
            <p>Email : </p>
            <p>Profession : </p>
            <p>Nom de l'entreprise : </p>
            <p>Adresse de l'entreprise : </p>
            <p>Numéro de téléphone : </p>
            <p>Numéro de SIRET : </p>
            <p>Numéro de TVA : </p>
        </div>
            </>
          )
        }
    </div>
</section>

    </div>
  );
}

export default Panel;