import '../style/burger_menu.scss'
import logo from '../assets/images/logo.svg'

function BurgerMenu() {
    return (
      <header className="header">
        <div className="header-leftside">
          <img src={logo} alt="logo blablabat" />
          <h1>BLABLABAT</h1>
        </div>
        
        <div className="header-rightside">
          <i class="fa-solid fa-bars"></i>
        </div>
        
      </header>
    );
  }
  
  export default BurgerMenu;