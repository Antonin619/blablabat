import { useEffect } from 'react';
import '../App.scss';
import '../style/sign-in.scss'

function InscriptionPro() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="sign-in">
        <h1>Inscription</h1>
        <div className="sign-in-content">
        <form action="">
          <label htmlFor="firstname">Votre prénom :</label>
          <input type="text" name="firstname" id="firstname" placeholder='...'/>
          <label htmlFor="lastname">Votre nom :</label>
          <input type="text" name="lastname" id="lastname" placeholder='...'/>
          <label htmlFor="email">Votre email :</label>
          <input type="text" name="email" id="email" placeholder='exemple@gmail.com'/>
          <label htmlFor="password">Mot de passe :</label>
          <input type="text" name="password" id="password" placeholder='Mot de passe'/>
          <label htmlFor="confirmpwd">Confirmez votre mot de passe :</label>
          <input type="text" name="confirmpwd" id="confirmpwd" placeholder='Confirmer le mot de passe'/>

          <hr />

          <h3>Votre entreprise</h3>

          <label htmlFor="companyname">Nom de votre entreprise :</label>
          <input type="text" name="companyname" id="companyname" placeholder='Bricolo & Co...'/>
          <label htmlFor="services">Services que vous proposez :</label>
          <input type="text" name="services" id="services" placeholder='Maçonnerie, Peinture en bâtiment...'/>
          <label htmlFor="postalcode">Code postal :</label>
          <input type="text" name="postalcode" id="postalcode" placeholder='93000, 17000...'/>
          <label htmlFor="companyphone">N. de téléphone (entreprise)</label>
          <input type="text" name="companyphone" id="companyphone" placeholder='06 12 23 34 45'/>
          <button className='submit-button' type="submit">S'inscrire !</button>
        </form>
        </div>
    </div>
  );
}

export default InscriptionPro;