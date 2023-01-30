import '../style/header.scss'
import logo from '../assets/images/logo.svg'

function Header() {
    return (
      <header className="header">
        <div className="header-leftside">
          <img src={logo} alt="logo blablabat" />
          <h1>BLABLABAT</h1>
        </div>
        
        <div className="header-rightside">
          <i class="fa-solid fa-user"></i>
        </div>
        
      </header>
    );
  }
  
  export default Header;