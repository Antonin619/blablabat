import { useEffect, useState, useContext } from 'react';
import '../App.scss';
import '../style/informations.scss'
import { ServicesService } from '../services/services.service';
import { AuthContext } from '../contexts/auth.context';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

function InformationsPage() {
  const { user, token } = useContext(AuthContext);
  const [isLoaded, setIsLoaded] = useState(false);
  const [services, setServices] = useState(null);

  let history = useNavigate();

  useEffect(() => {
    ServicesService.fetchServices(token.accessToken)
      .then((response) => {
        console.log('response :>> ', response);
        setServices(response.data);
        setIsLoaded(true);
      })
      .catch((error) => {
        console.log('error :>> ', error);
        setIsLoaded(true);
      });
  }, []);

  return (
    <div className="informations">
        <Link to="/"> <button onClick={() => history(-1)} className='back-button' type="button"><i className='fa-solid fa-arrow-left'></i>Retour</button></Link>

      <header className="informations-header">
        <h1>Mes informations</h1>
      </header>

      <section className="informations-section">
          <div className="informations-Cards">
              
              {
                !isLoaded ? (<><div className="informations-Card">
                <h3>Informations personnelles</h3>
                <hr />
                <p>Nom : </p>
                <p>Prénom : </p>
                <p>Email : </p>
            </div></>) : (
                  <>
                  <div className="informations-Card">
                  <h3>Informations professionnelles</h3>
                  <hr />
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
              <hr />
        <button className='modif-button'>Modifier <i className='fa-solid fa-pen'></i></button>

          </div>
      </section>

    </div>
  );
}

export default InformationsPage;