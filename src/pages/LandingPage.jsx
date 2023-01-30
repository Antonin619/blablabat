import '../App.scss';
import '../style/landing_page.scss'
import illu1 from '../assets/images/illu-1.jpg'

function LandingPage() {
  return (
    <div className="landing-page">
      <header className="landing-page-header">
    
          <h1>Faites de vos projets une réalité...</h1>
          <div className="landing-page-input">
            <div className="icon-container">
            <i class="fa-solid fa-hammer"></i>
            </div>
          
            <select className='selector' name="" id="">
              <option>De quoi avez vous besoin ?</option>
              <option>Peinture</option>
              <option>Maçonnerie</option>
              <option>Plomberie</option>
            </select>
          </div>
          <div className="landing-page-input">
          <div className="icon-container">
            <i className="fa-solid fa-location-dot"></i>
            </div>
            <select className='selector' name="" id="">
              <option>Code postal...</option>
              <option>17000 (Charente-Maritime)</option>
              <option>44000 (Loire-Atlantique)</option>
              <option>33000 (Gironde)</option>
            </select>
          </div>
          <div className="landing-page-research">
            <p>Rechercher</p><i className="fa-solid fa-magnifying-glass"></i>
          </div>
      </header>

      <img src={illu1} alt="test" />
    </div>
  );
}

export default LandingPage;