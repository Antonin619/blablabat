import '../style/header.scss'
import logo from '../assets/images/logo.svg'
import { useState } from 'react';
import BurgerMenu from './BurgerMenu';
import { Link } from 'react-router-dom';

function Header() {

  const [isBurgerMenuToggled, setIsBurgerMenuToggled] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false)

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
          <i className={isBurgerMenuToggled ? "hidden" : "fa-solid fa-bars"} onClick={toggleBurger}></i>
          <i className={isBurgerMenuToggled ? "fa-regular fa-user" : "hidden"}></i>
        </div>
        
        <BurgerMenu isEnabled={isBurgerMenuToggled} onClose={() => setIsBurgerMenuToggled(false)}/>
        <div className={isBurgerMenuToggled ? "burger-blur" : "hidden"} onClick={unToggleBurger}>
        
        </div>
      </header>
      
    );
  }
  
  export default Header;