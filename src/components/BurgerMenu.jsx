import '../style/burger_menu.scss'
import logo from '../assets/images/logo.svg'
import { Link } from 'react-router-dom';

function BurgerMenu({
    isEnabled=false,
    onClose
}) {


    return (
      <div className={isEnabled ? "burger-menu" : "burger-menu hidden"}>
        <header className="burger-header">
            <Link onClick={onClose} to="/"><img src={logo} alt="logo blablabat" /></Link>
            <i onClick={onClose} className="fa-solid fa-xmark"></i>
        </header>
        <div className="burger-content">
            <Link onClick={onClose} to="/register-pro" className='burger-pro_link'><h4>Vous êtes un professionnel ?</h4></Link>
            <hr />
            <Link onClick={onClose} to="/login" className='burger-link'><h4>S'inscrire</h4></Link>
            <Link onClick={onClose} to="/register" className='burger-link'><h4>Se connecter</h4></Link>
        </div>
      </div>
    );
  }
  
  export default BurgerMenu;