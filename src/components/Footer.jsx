import { Link } from 'react-router-dom';
import '../style/footer.scss'
import logo from '../assets/images/logo.svg'

function Footer() {
    return (
      <footer className="footer">
          <div className="footer-header">
            <Link to="/"><img src={logo} alt="logo blablabat" /></Link>
            <h3>BLABLABAT</h3>
            
        </div>
        <div className="footer-content">
              <h4>Nos solutions</h4>
              <Link to={'/'}><p>Clients</p></Link>
              <Link to={'/'}><p>Professionnels</p></Link>
              <h4>A propos</h4>
              <Link to={'/'}><p>Qui sommes-nous ?</p></Link>
              <Link to={'/'}><p>Comment ça marche ?</p></Link>
              <Link to={'/cgv-mentions-legales'}><p>CGV et Mentions légales</p></Link>
              <h4>Nous contacter</h4>
              <p className='footer-phone-number'>06.55.60.79.90</p>
              <Link to={'/contact#top'}><button className='contact-button'>Nous contacter en ligne</button></Link>
            </div>
      </footer>
    );
  }
  
  export default Footer;