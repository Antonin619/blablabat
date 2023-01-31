import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.scss';
import '../style/sign-in.scss'


function InscriptionClient() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  let history = useNavigate();
  return (
    <div className="sign-in">
      <Link to="/"> <button onClick={() => history(-1)} className='back-button' type="button"><i className='fa-solid fa-arrow-left'></i>Retour</button></Link>

        <h1>Inscription</h1>
        <div className="sign-in-content">
        <form action="">
          <label htmlFor="firstname">Votre prénom :</label>
          <input type="text" name="firstname" id="firstname" placeholder='Prénom'/>
          <label htmlFor="lastname">Votre nom :</label>
          <input type="text" name="lastname" id="lastname" placeholder='Nom'/>
          <label htmlFor="email">Votre email :</label>
          <input type="text" name="email" id="email" placeholder='Email'/>
          <label htmlFor="password">Mot de passe :</label>
          <input type="text" name="password" id="password" placeholder='Mot de passe'/>
          <label htmlFor="confirmpwd">Confirmez votre mot de passe :</label>
          <input type="text" name="confirmpwd" id="confirmpwd" placeholder='Confirmer le mot de passe'/>
          <button className='submit-button' type="submit">S'inscrire !</button>
        </form>
        </div>
    </div>
  );
}

export default InscriptionClient;