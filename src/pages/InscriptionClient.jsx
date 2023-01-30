import { useEffect } from 'react';
import '../App.scss';
import '../style/sign-in.scss'

function InscriptionClient() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="sign-in">
        <h1>Inscription</h1>
        <div className="sign-in-content">
        <form action="">
          <input type="text" name="firstname" id="firstname" placeholder='Prénom'/>
          <input type="text" name="lastname" id="lastname" placeholder='Nom'/>
          <input type="text" name="email" id="email" placeholder='Email'/>
          <input type="text" name="password" id="password" placeholder='Mot de passe'/>
          <input type="text" name="confirmpwd" id="confirmpwd" placeholder='Confirmer le mot de passe'/>
          <button className='submit-button' type="submit">S'inscrire !</button>
        </form>
        </div>
    </div>
  );
}

export default InscriptionClient;