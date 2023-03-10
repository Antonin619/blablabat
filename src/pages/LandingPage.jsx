import '../App.scss';
import '../style/landing_page.scss'
import illu1 from '../assets/images/illu-1.jpg'
import illu2 from '../assets/images/illu-2.png'
import illu3 from '../assets/images/illu-3.jpg'
import { useEffect } from 'react';
import { useState } from 'react';
import ResultComponent from '../components/ResultComponent';
import { CraftmensService } from '../services/craftmens.service';

function LandingPage() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  console.log('results :>> ', results);

  const handleCLick = () => {
    setLoading(true);
    CraftmensService.fetchCraftsmen().then((data) => {
      console.log('data :>> ', data);
      setResults(data);
      setLoading(false);
    });
  }

  const getLocalisation = () => {
    const select = document.getElementById('localisation');
    console.log('localisation :>> ', select.value)
    return select.value;
  }

  const getSelectedJob = () => {
    const select = document.getElementById('job');
    console.log('job :>> ', select.value)
    return select.value;
  }


  return (
    <div className="landing-page">
      <header className="landing-page-header">
          <h1>Faites de vos projets une réalité...</h1>
            <div className="landing-page-input">
              <div className="icon-container">
              <i className="fa-solid fa-hammer"></i>
            </div>
          
            <select className='selector' name="" id="job">
              <option>De quoi avez vous besoin ?</option>
              <option value="9">Peintre</option>
              <option value="18">Macon</option>
              <option value="3">Plombier</option>
            </select>
          </div>
          <div className="landing-page-input">
          <div className="icon-container">
            <i className="fa-solid fa-location-dot"></i>
            </div>
            <select className='selector' name="" id="localisation">
              <option>Code postal...</option>
              <option value="17000">17000 (Charente-Maritime)</option>
              <option value="44000">44000 (Loire-Atlantique)</option>
              <option value="33000">33000 (Gironde)</option>
            </select>
          </div>
          <div className="landing-page-research">
            <p onClick={handleCLick}>Rechercher</p><i className="fa-solid fa-magnifying-glass"></i>
          </div>
      </header>
      <div className="result">
      {
        !loading && results.length != 0 && (
          <ResultComponent results={results} localisation={getLocalisation()} job={getSelectedJob()} />
        )
} 
</div>
        





      <img src={illu1} alt="test" />

      <div className="landing-page-content">
        <div className="content-1">
        <h2>Le moyen le plus pratique pour réaliser vos projets </h2>
        <img src={illu2} alt="test" />
        <p>BlaBlabat est le moyen le plus pratique et efficace pour réaliser vos projets. 
          Nous proposons des artisans près de chez vous qui sauront répondre à vos besoins. Notre système de gestion de projets vous permet de connaitre l’avancement des travaux et de communiquer rapidement avec le professionnel à l'aide d'un chat intégré.</p>
          </div>
        <div className="content-2">
          <h2>Comment fonctionne BlaBlaBat ? </h2>
          <div className="bbb-function">
            <div className="bbb-function_nb">1.</div>
            <p>Exposez votre besoin et votre localisation à l’aide de notre barre de recherche </p>
          </div>
          <div className="bbb-function">
            <div className="bbb-function_nb">2.</div>
            <p>Suite à votre recherche, utilisez les filtre pour préciser votre recherche</p>
          </div>
          <div className="bbb-function">
            <div className="bbb-function_nb">3.</div>
            <p>Choisissez un artisan ou une entreprise et faite lui une demande de devis en ligne</p>
          </div>
          <div className="bbb-function">
            <div className="bbb-function_nb">4.</div>
            <p>Attendez le retour du professionnel et validez le devis lorsqu’il vous convient</p>
          </div>
          <div className="bbb-function">
            <div className="bbb-function_nb">5.</div>
            <p>Vous pourrez ensuite suivre l’avancement de votre projet et communiquer avec l’artisan depuis votre tableau de bord</p>
          </div>
        </div>

        <div className="content-3">
          <h2>Les avantages BlaBlaBat</h2>
          <div className="content-3-elements">
          <i className="fa-solid fa-dollar-sign"></i>
          <h4>Des prix fixes</h4>
          <i className="fa-solid fa-user-check"></i>
          <h4>Des artisans et entreprises de confiance</h4>
          <i className="fa-solid fa-hand-holding-dollar"></i>
          <h4>Paiement à la fin du projet</h4>
          <i className="fa-solid fa-people-carry-box"></i>
          <h4>Une communication et un suivi de qualité</h4>
          </div>
        </div>

        <div className="content-4">
        <h2>Proposer ses services en tant que professionnel</h2>
        <div className="content-4-elements">
          <i className="fa-solid fa-file-signature"></i>
          <h4>Créez un compte depuis le bouton d'inscription professionnel</h4>
          <i className="fa-solid fa-address-card"></i>
          <h4>Vous pourrez ensuite compléter votre profil professionnel</h4>
          <i className="fa-solid fa-list-check"></i>
          <h4>Accédez à votre tableau de bord professionnel pour pouvoir gérer et suivre vos projets en cours</h4>
          </div>
        </div>

        <div className="content-5">
          <h2>Nos meilleurs artisans</h2>
          <div className="craftmen-card">
            <div className='craftmen-info'>
              <h3>Bob Bricolo</h3>
              <p className='role'>Maçon</p>
             
              <ul>{Array.from(Array(4), (e, i) => {
                return <li className='star' key={i}><i className='fa-solid fa-star'></i></li>
              })}
                <li className='empty-star'><i className='fa-regular fa-star'></i></li>
              </ul>

              <p className="location">17000, La Rochelle</p>
              <p className="company-name">Bricolo & Co.</p>
            </div>
            <img src={illu3} alt="Bob" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;