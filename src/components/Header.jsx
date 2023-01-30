import '../style/header.scss'
import logo from '../assets/images/logo.svg'

function Header() {
    return (
      <header className="header">
        <div className="header-leftside">
          <img src={logo} alt="logo blablabat" />
          <h3>BLABLABAT</h3>
        </div>
        
        <div className="header-rightside">
          <i class="fa-solid fa-bars"></i>
        </div>
        
      </header>
    );
  }
  
  export default Header;