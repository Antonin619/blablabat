import '../style/header.scss'
import logo from '../assets/images/logo.svg'
import { useState } from 'react';
import BurgerMenu from './BurgerMenu';
import { Link } from 'react-router-dom';

function Header() {

  const [isBurgerMenuToggled, setIsBurgerMenuToggled] = useState(false);

  function toggleBurger() {
    setIsBurgerMenuToggled(true)
  }

    return (
      <header className="header">
        <div className="header-leftside">
          <Link to="/"><img src={logo} alt="logo blablabat" /></Link>
          <h3>BLABLABAT</h3>
        </div>
        
        <div className="header-rightside">
          <i onClick={toggleBurger} className="fa-solid fa-bars"></i>
        </div>
        
        <BurgerMenu isEnabled={isBurgerMenuToggled} onClose={() => setIsBurgerMenuToggled(false)}/>
        <div className={isBurgerMenuToggled ? "burger-blur" : "hidden"}>
        
        </div>
      </header>
      
    );
  }
  
  export default Header;