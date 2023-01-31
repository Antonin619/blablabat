import { useEffect, useState, useContext } from 'react';
import '../App.scss';
import { ServicesService } from '../services/services.service';
import { AuthContext } from '../contexts/auth.context';

function Panel() {
  const { user, token, setError } = useContext(AuthContext);
  const [isLoaded, setIsLoaded] = useState(false);
  const [services, setServices] = useState(null);

  useEffect(() => {
    ServicesService.fetchServices(token.accessToken)
      .then((response) => {
        console.log('response :>> ', response);
        setServices(response.data);
        setIsLoaded(true);
      })
      .catch((error) => {
        console.log('error :>> ', error);
        setError(error);
        setIsLoaded(true);
      });
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
          !isLoaded ? (<><div className="Informations-Card">
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