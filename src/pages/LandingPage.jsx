import '../App.scss';
import '../style/landing_page.scss'

function LandingPage() {
  return (
    <div className="landing-page">
      <header className="landing-page-header">
        <p>
    
          <h1>Faites de vos projets une réalité...</h1>
          <div className="test">
            <p>De quoi avez vous besoin ?</p>
          </div>
          <div className="test">
            <p>Code Postal</p>
          </div>
          <div className="testt">
            <p>Rechercher</p><i class="fa-solid fa-magnifying-glass"></i>
          </div>
        </p>
      </header>
    </div>
  );
}

export default LandingPage;