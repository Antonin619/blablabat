import { Link } from 'react-router-dom';
import '../style/footer.scss'

function Footer() {
    return (
      <footer className="footer">
        <div className="footer-content">
        <Link className='link' to="/mentions-legales">Mentions Légales</Link>
        </div>
      </footer>
    );
  }
  
  export default Footer;