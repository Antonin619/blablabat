import '../style/header.scss'
import logo from '../assets/images/logo.svg'
import { useContext, useState } from 'react';
import BurgerMenu from './BurgerMenu';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/auth.context';

function Header() {

  const [isBurgerMenuToggled, setIsBurgerMenuToggled] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const {user,isAuthenticated} = useContext(AuthContext);

  console.log("user",user)

  function toggleBurger() {
    setIsBurgerMenuToggled(true)
  }

  function unToggleBurger() {
    setIsBurgerMenuToggled(false)
  }

    return (
      <header className="header">
        <div className="header-leftside">
          <Link to="/"><img src={logo} alt="logo blablabat" /></Link>
          <h3>BLABLABAT</h3>
        </div>
        
        <div className="header-rightside">
          
          <i className={isAuthenticated ? "hidden" : "fa-solid fa-bars"} onClick={toggleBurger}></i>
          <Link to="/panel"><i className={isAuthenticated ? "fa-regular fa-rectangle-list panel-button" : "hidden"}></i></Link>
          <Link to="/profil"><i className={isAuthenticated ? "fa-regular fa-user" : "hidden"}></i></Link>
        </div>
        
        <BurgerMenu isEnabled={isBurgerMenuToggled} onClose={() => setIsBurgerMenuToggled(false)}/>
        <div className={isBurgerMenuToggled ? "burger-blur" : "hidden"} onClick={unToggleBurger}>
        
        </div>
      </header>
      
    );
  }
  
  export default Header;